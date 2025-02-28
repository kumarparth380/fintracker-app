function getRandomValue(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export type IWeeklyActivity = {
  name: string;
  value?: number;
}[];

export function fetchWeeklyActivityData(): Promise<IWeeklyActivity> {
  const minDeposit = 100;
  const maxDeposit = 500;
  const minWithdraw = 200;
  const maxWithdraw = 600;

  const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  // Simulating async data fetching (like a real API call)
  return new Promise((resolve) => {
    setTimeout(() => {
      const weeklyActivity = weekDays.map((name) => ({
        name,
        deposit: getRandomValue(minDeposit, maxDeposit),
        withdraw: getRandomValue(minWithdraw, maxWithdraw),
      }));

      resolve(weeklyActivity);
    }, 200); // Simulate a 1-second delay for the API response
  });
}
