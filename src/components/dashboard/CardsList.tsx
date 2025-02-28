import { Card, CardType } from '@/types/card';
import { Link } from 'react-router';

import { useFetchCards } from '@/hooks/useFetchCards';
import { CardSkeleton } from '@/components/CardSkeleton';
import CardItem from '@/components/Card';

export function CardsList() {
  const { data, loading, error } = useFetchCards();

  if (loading) {
    return <CardSkeleton />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!data || data.length === 0) {
    return null;
  }

  const renderCard = (card: Card, type: CardType = 'other') => {
    return <CardItem key={card.number} card={card} type={type} />;
  };

  return (
    <div className="flex h-full flex-col">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xl font-bold text-[#27364B]">My Cards</h2>
        <Link
          to="/cards"
          aria-label="see-all"
          className="text-sm font-medium text-black hover:underline">
          See All
        </Link>
      </div>
      <div className="relative flex h-full overflow-hidden">
        <div className="flex w-full flex-col gap-4 lg:flex-row">
          <div className="w-full lg:w-1/2">{renderCard(data[0], 'paypal')}</div>
          {data[1] && (
            <div className="w-full lg:w-1/2">{renderCard(data[1])}</div>
          )}
        </div>
      </div>
    </div>
  );
}
