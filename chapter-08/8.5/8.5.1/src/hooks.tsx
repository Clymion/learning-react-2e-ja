import { useState, useEffect, useCallback, useMemo } from 'react';

export function useFetch(uri: string | null) {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!uri) return;
    fetch(uri)
      .then((data) => data.json())
      .then(setData)
      .then(() => setLoading(false))
      .catch(setError);
  }, [uri]);

  return {
    loading,
    data,
    error,
  };
}

export const useIterator = (items = [], initialValue = 0) => {
  const [i, setIndex] = useState(initialValue);

  const prev = useCallback(() => {
    if (i === 0) return setIndex(items.length - 1);
    setIndex(i - 1);
  }, [i]);

  const next = useCallback(() => {
    if (i === items.length - 1) return setIndex(0);
    setIndex(i + 1);
  }, [i]);

  const item = useMemo(() => items[i], [i]);

  return [item || items[0], prev, next];
};

export const useInput = <T extends string | number>(initialValue: T) => {
  const [value, setValue] = useState<T>(initialValue);
  return [
    { value, onChange: (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value as T) },
    () => setValue(initialValue),
  ] as const;
};
