import { newsletters } from '../src/data/newsletters.js';

const renderHtml = (issue) => {
  const sections = issue.sections.map(section => `
    <h2 style="color:#006B3F;font-size:18px;margin:24px 0 12px;">${section.heading}</h2>
    ${section.items.map(item => `
      <div style="margin-bottom:16px;">
        <h3 style="margin:0 0 6px;font-size:15px;color:#0f172a;">${item.title}</h3>
        <p style="margin:0 0 6px;font-size:14px;color:#475569;line-height:1.6;">${item.text}</p>
        <a href="${item.url}" style="font-size:12px;color:#006B3F;font-weight:600;">Source : ${item.source}</a>
      </div>
    `).join('')}
  `).join('');

  return `
    <div style="font-family:Inter,Arial,sans-serif;max-width:600px;margin:0 auto;">
      <h1 style="color:#006B3F;font-size:22px;">${issue.title}</h1>
      <p style="color:#475569;font-size:15px;">${issue.summary}</p>
      ${sections}
      <hr style="border:none;border-top:1px solid #e2e8f0;margin:24px 0;" />
      <p style="font-size:12px;color:#94a3b8;">Sénégal Invest Brief — Numéro ${issue.issueNumber} — APIX Invest. Vous recevez cet email suite à votre inscription sur le portail APIX Invest.</p>
    </div>
  `;
};

export default async function handler(req, res) {
  // Protection : n'accepte que les appels du Cron Vercel (authentifiés via CRON_SECRET),
  // pour empêcher quiconque devinant l'URL de déclencher un envoi réel aux abonnés.
  const cronSecret = process.env.CRON_SECRET;
  if (cronSecret && req.headers.authorization !== `Bearer ${cronSecret}`) {
    res.status(401).json({ error: 'Unauthorized' });
    return;
  }

  const apiKey = process.env.RESEND_API_KEY;
  const audienceId = process.env.RESEND_AUDIENCE_ID;

  if (!apiKey || !audienceId) {
    res.status(200).json({ demo: true, reason: 'RESEND_API_KEY ou RESEND_AUDIENCE_ID non configurés' });
    return;
  }

  const latest = newsletters[0];
  if (!latest) {
    res.status(200).json({ sent: false, reason: 'Aucun numéro à envoyer' });
    return;
  }

  const fromAddress = process.env.RESEND_FROM_EMAIL || 'newsletter@apix-invest.sn';

  try {
    // API Resend "Broadcasts" : on crée le broadcast rattaché à l'audience, puis on l'envoie.
    const createRes = await fetch('https://api.resend.com/broadcasts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        audienceId,
        from: `APIX Invest <${fromAddress}>`,
        subject: `${latest.title} — Sénégal Invest Brief #${latest.issueNumber}`,
        html: renderHtml(latest)
      })
    });

    const created = await createRes.json();

    if (!createRes.ok) {
      res.status(createRes.status).json({ error: created });
      return;
    }

    const sendRes = await fetch(`https://api.resend.com/broadcasts/${created.id}/send`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`
      },
      body: JSON.stringify({})
    });

    const sent = await sendRes.json();

    if (!sendRes.ok) {
      res.status(sendRes.status).json({ error: sent });
      return;
    }

    res.status(200).json({ sent: true, issueNumber: latest.issueNumber, broadcastId: created.id });
  } catch (error) {
    res.status(502).json({ error: 'Upstream request failed' });
  }
}
