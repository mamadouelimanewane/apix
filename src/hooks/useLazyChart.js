import { useState, useEffect } from 'react';

// Hook pour lazy load Recharts et composants graphiques
export const useLazyChart = () => {
  const [ChartLibrary, setChartLibrary] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Import dynamique pour éviter charger Recharts au démarrage
    import('recharts').then(() => {
      setChartLibrary(() => require('recharts'));
      setIsLoading(false);
    }).catch(err => {
      console.error('Failed to load charts library:', err);
      setIsLoading(false);
    });
  }, []);

  return { ChartLibrary, isLoading };
};

// Hook pour lazy load Leaflet
export const useLazyMap = () => {
  const [MapLibrary, setMapLibrary] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    import('leaflet').then(() => {
      setMapLibrary(() => require('leaflet'));
      setIsLoading(false);
    }).catch(err => {
      console.error('Failed to load map library:', err);
      setIsLoading(false);
    });
  }, []);

  return { MapLibrary, isLoading };
};
