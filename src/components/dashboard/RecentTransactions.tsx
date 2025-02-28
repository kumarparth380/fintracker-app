import { useState, useEffect } from 'react';
import { SpinnerContainer } from '@/components/ui/spinnerContainer';

import PaypalIcon from '@/assets/svgs/paypal.svg';
import OtherIcon from '@/assets/svgs/other.svg';
import TransactionCardIcon from '@/assets/svgs/transaction-card.svg';
import { Transaction } from '@/types/transactions';
import { fetchTransactionData } from '@/api/transactions';

export function RecentTransactions() {
  const [data, setData] = useState<Transaction[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        setLoading(true);
        const response = await fetchTransactionData();
        setData(response);
        setError(null);
      } catch (err) {
        setError(
          err instanceof Error
            ? err
            : new Error('An error occurred while fetching transactions'),
        );
      } finally {
        setLoading(false);
      }
    };

    fetchTransactions();
  }, []);

  if (loading) {
    return <SpinnerContainer />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!data || data.length === 0) {
    return null;
  }

  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case 'paypal':
        return <img width={28} height={28} src={PaypalIcon} alt="paypal" />;
      case 'card':
        return (
          <img width={28} height={28} src={TransactionCardIcon} alt="card" />
        );
      case 'other':
        return <img width={28} height={28} src={OtherIcon} alt="other" />;
      default:
        return '💰';
    }
  };

  const getPlatformBgColor = (platform: string) => {
    switch (platform) {
      case 'paypal':
        return 'bg-[#e7edff]';
      case 'card':
        return 'bg-[#fff5d9]';
      case 'other':
        return 'bg-[#dcfaf8]';
      default:
        return 'bg-gray-100';
    }
  };

  return (
    <div className="flex h-full flex-col">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xl font-semibold text-[#1A1D1F]">
          Recent Transactions
        </h2>
      </div>
      <div className="flex-1 overflow-y-auto rounded-[20px] bg-white p-6">
        <div className="space-y-6">
          {data.map((transaction) => {
            const icon = getPlatformIcon(transaction.platform);
            const bgColor = getPlatformBgColor(transaction.platform);
            const isPositive = transaction.amount > 0;
            const amountColor = isPositive ? 'text-green-500' : 'text-red-500';

            return (
              <div key={transaction.id} className="flex items-center gap-4">
                <div
                  className={`h-12 w-12 rounded-full ${bgColor} flex items-center justify-center text-xl`}>
                  {icon}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="truncate font-medium text-[#1A1D1F]">
                    {transaction.description}
                  </div>
                  <div className="text-sm text-[#6F767E]">
                    {transaction.date}
                  </div>
                </div>
                <div className={`whitespace-nowrap font-medium ${amountColor}`}>
                  {isPositive ? '+' : ''} $
                  {Math.abs(transaction.amount).toLocaleString()}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
