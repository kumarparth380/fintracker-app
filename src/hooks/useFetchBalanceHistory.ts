import { fetchBalanceHistoryData } from '@/api/balanceHistory';
import { BalanceHistoryData } from '@/types/gen';
import { useEffect, useState } from 'react';

export const useFetchBalanceHistory = () => {
  const [data, setData] = useState<BalanceHistoryData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchBalanceHistory = async () => {
      try {
        setLoading(true);
        const response = await fetchBalanceHistoryData();
        setData(response);
        setError(null);
      } catch (err) {
        setError(
          err instanceof Error
            ? err
            : new Error('An error occurred while fetching balance history'),
        );
      } finally {
        setLoading(false);
      }
    };

    fetchBalanceHistory();
  }, []);

  return { data, loading, error };
};
