import { usersData } from '@/lib/mockData';
import { TransactionalUser } from '@/types/gen';

function getUniqueRandomNumbers(min: number, max: number, count = 6): number[] {
  const uniqueNumbers = new Set<number>();
  while (uniqueNumbers.size < count) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    uniqueNumbers.add(randomNumber);
  }
  return Array.from(uniqueNumbers);
}

export function fetchQuickTransfers(): Promise<TransactionalUser[]> {
  return new Promise((resolve) => {
    const indexes = getUniqueRandomNumbers(0, usersData.length - 1);
    const randomUsers = indexes.map((idx) => usersData[idx]);
    setTimeout(() => resolve(randomUsers), 1000);
  });
}
