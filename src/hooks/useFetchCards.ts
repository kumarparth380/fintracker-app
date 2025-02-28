import { fetchCardData } from '@/api/card';
import { Card } from '@/types/card';
import { useEffect, useState } from 'react';

export const useFetchCards = () => {
  const [data, setData] = useState<Card[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        setLoading(true);
        const response = await fetchCardData();
        setData(response);
        setError(null);
      } catch (err) {
        setError(
          err instanceof Error
            ? err
            : new Error('An error occurred while fetching cards'),
        );
      } finally {
        setLoading(false);
      }
    };

    fetchCards();
  }, []);

  return { data, loading, error };
};
