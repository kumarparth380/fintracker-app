import { fetchExpenseStats } from '@/api/expenseStats';
import { ExpenseStats } from '@/types/expense';
import { useEffect, useState } from 'react';

export const useFetchExpenseStats = () => {
  const [data, setData] = useState<ExpenseStats | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        setLoading(true);
        const response = await fetchExpenseStats();
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

    fetchStats();
  }, []);

  return { rawStats: data, loading, error };
};
