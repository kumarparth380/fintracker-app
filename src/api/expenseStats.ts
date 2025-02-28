import { expenseCategories } from '@/lib/mockData';
import { ExpenseStats } from '@/types/expense';

export const fetchExpenseStats = (): Promise<ExpenseStats> => {
  const values = [30, 15, 35, 20];

  const rotatedExpenseStats: Record<string, number> = expenseCategories.reduce(
    (acc, category, index) => {
      acc[category] = values[index];
      return acc;
    },
    {} as Record<string, number>,
  );

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(rotatedExpenseStats as ExpenseStats);
    }, 200);
  });
};
