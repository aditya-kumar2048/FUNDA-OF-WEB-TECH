// src/hooks/useFetch.js
import { useCallback, useEffect, useRef, useState } from 'react';

/**
 * useFetch hook
 * @param {string|null} url
 * @param {object} options
 * @param {object} config - { auto: boolean } (defaults to true)
 * @returns {{data: any, loading: boolean, error: any, refetch: Function}}
 */
export default function useFetch(url, options = {}, config = { auto: true }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(Boolean(url) && config.auto);
  const [error, setError] = useState(null);

  const controllerRef = useRef(null);
  const lastUrlRef = useRef(url);

  const fetchData = useCallback(
    async (overrideUrl = url, overrideOptions = options) => {
      if (!overrideUrl) {
        setData(null);
        setLoading(false);
        setError(null);
        return;
      }

      // abort previous
      if (controllerRef.current) controllerRef.current.abort();
      const controller = new AbortController();
      controllerRef.current = controller;

      setLoading(true);
      setError(null);

      try {
        const res = await fetch(overrideUrl, { signal: controller.signal, ...overrideOptions });

        if (!res.ok) {
          const text = await res.text().catch(() => null);
          throw new Error(text || `Request failed with status ${res.status}`);
        }

        const contentType = res.headers.get('content-type') || '';
        const parsed = contentType.includes('application/json') ? await res.json() : await res.text();

        setData(parsed);
        setLoading(false);
        setError(null);
        return parsed;
      } catch (err) {
        if (err.name === 'AbortError') return;
        setError(err);
        setLoading(false);
        setData(null);
        return;
      }
    },
    [url, options]
  );

  useEffect(() => {
    if (!config.auto) return;
    lastUrlRef.current = url;
    fetchData(url, options);
    return () => {
      if (controllerRef.current) controllerRef.current.abort();
    };
  }, [url, options, config.auto, fetchData]);

  const refetch = useCallback((newUrl, newOptions) => fetchData(newUrl ?? url, newOptions ?? options), [fetchData, url, options]);

  return { data, loading, error, refetch };
}
