const ENDPOINTS = {
  perplexity: {
    url: 'https://api.perplexity.ai/chat/completions',
    model: 'llama-3.1-sonar-small-128k-online',
    system: 'Tu es un expert juridique sénégalais du droit des affaires. Cite tes sources.',
    envVar: 'PERPLEXITY_API_KEY'
  },
  deepseek: {
    url: 'https://api.deepseek.com/chat/completions',
    model: 'deepseek-chat',
    system: 'Tu es un expert juridique du Sénégal. Réponds de façon précise avec les articles de loi.',
    envVar: 'DEEPSEEK_API_KEY'
  }
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const { provider, query } = req.body || {};
  const config = ENDPOINTS[provider];

  if (!config || typeof query !== 'string' || !query.trim()) {
    res.status(400).json({ error: 'Invalid provider or query' });
    return;
  }

  const apiKey = process.env[config.envVar];
  if (!apiKey) {
    res.status(200).json({ demo: true });
    return;
  }

  try {
    const upstream = await fetch(config.url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: config.model,
        messages: [
          { role: 'system', content: config.system },
          { role: 'user', content: query }
        ]
      })
    });

    const data = await upstream.json();

    if (!upstream.ok) {
      res.status(upstream.status).json({ error: data });
      return;
    }

    res.status(200).json(data);
  } catch (error) {
    res.status(502).json({ error: 'Upstream request failed' });
  }
}
