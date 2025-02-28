import { transactionData } from '@/lib/mockData';
import { Transaction } from '@/types/transactions';

// Helper function to get unique random numbers
function getUniqueRandomNumbers(min: number, max: number, count: number) {
  const uniqueNumbers = new Set<number>();
  while (uniqueNumbers.size < count) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    uniqueNumbers.add(randomNumber);
  }
  return Array.from(uniqueNumbers) as number[];
}

// Simulating the GET request to "/api/transactions"
export const fetchTransactionData = (): Promise<Transaction[]> => {
  const indexes = getUniqueRandomNumbers(0, transactionData.length - 1, 3);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        transactionData[indexes[0]],
        transactionData[indexes[1]],
        transactionData[indexes[2]],
      ]);
    }, 200); // Simulate a delay like a real API call
  });
};
