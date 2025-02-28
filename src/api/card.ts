import { cardData } from '@/lib/mockData';
import { Card } from '@/types/card';

function getUniqueRandomNumbers(min: number, max: number, count: number) {
  const uniqueNumbers = new Set();
  while (uniqueNumbers.size < count) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    uniqueNumbers.add(randomNumber);
  }
  return Array.from(uniqueNumbers);
}

// Simulating the GET request to "/api/card"
export const fetchCardData = (): Promise<Card[]> => {
  const indexes = getUniqueRandomNumbers(0, cardData.length - 1, 5);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(indexes.map((idx) => cardData[idx as number]));
    }, 200); // Simulate a delay like a real API call
  });
};
