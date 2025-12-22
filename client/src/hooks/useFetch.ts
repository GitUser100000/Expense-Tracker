import { useEffect, useState } from "react";

export function useFetch<T>(fetchFunction: () => Promise<T>) {
  const [data, setResult] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<unknown>(null);

  useEffect(() => {
    let cancelled = false;
    async function run() { 
      try {
        setLoading(true); 
        const result = await fetchFunction();
        if (!cancelled) setResult(() => result);
      } catch (err) {
        if (!cancelled) setError(err); 
      } finally {
        if (!cancelled) setLoading(false);
      }
    }
    run();
    return () => {cancelled = true}
  }, [fetchFunction])

  return { data, loading, error}
}