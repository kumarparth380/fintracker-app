import { SpinnerContainer } from '@/components/ui/spinnerContainer';
import { useFetchCards } from '@/hooks/useFetchCards';
import { Card } from '@/types/card';
import CardItem from '@/components/Card';

export default function CardsPage() {
  const { data: cards, loading, error } = useFetchCards();

  if (loading) {
    return <SpinnerContainer />;
  }

  if (error) {
    return <div className="text-center text-red-500">{error.message}</div>;
  }

  if (cards?.length === 0) {
    return <div className="text-center text-gray-500">No cards found.</div>;
  }

  const renderCard = (card: Card) => {
    return <CardItem key={card.number} type={card.type} card={card} />;
  };

  return (
    <div className="container mx-auto px-4 py-6 sm:py-8">
      <h1 className="mb-6 sm:mb-8 text-2xl sm:text-3xl font-bold text-gray-800">
        My Cards
      </h1>
      <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
        {cards?.map((card) => (
          <div
            key={card.number}
            className="h-auto sm:h-[250px] md:h-[300px] lg:h-[250px]">
            {renderCard(card)}
          </div>
        ))}
      </div>
    </div>
  );
}
