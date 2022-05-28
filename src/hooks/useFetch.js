import { useEffect, useState } from 'react';

export const useFetch = (requestFn, deps) => {
  const [state, setState] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const asyncRequest = async () => {
      setLoading(true);
      try {
        const data = await requestFn();
        // console.log('useEffect', data);
        setState(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    asyncRequest();
  }, deps);
  // console.log(state, 'after useEffect');
  return [state, loading, error];
};
