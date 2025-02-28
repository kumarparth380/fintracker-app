import { fetchQuickTransfers } from '@/api/quickTransfer';
import { TransactionalUser } from '@/types/gen';
import { useEffect, useState } from 'react';

export const useFetchQuickTransfer = () => {
  const [users, setUsers] = useState<TransactionalUser[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const response = await fetchQuickTransfers();
        setUsers(response);
        setError(null);
      } catch (err) {
        setError(
          err instanceof Error
            ? err
            : new Error('An error occurred while fetching users'),
        );
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return { users, loading, error };
};
