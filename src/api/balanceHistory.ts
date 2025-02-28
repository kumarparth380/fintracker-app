import { monthNames } from '@/lib/mockData';
import { BalanceHistoryData } from '@/types/gen';

function getRandomValue(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function fetchBalanceHistoryData(): Promise<BalanceHistoryData> {
  const min = 100;
  const max = 1000;

  const balanceHistory = monthNames.map((name, index) => ({
    id: index + 1,
    name,
    value: getRandomValue(min, max),
  }));

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(balanceHistory);
    }, 200);
  });
}
