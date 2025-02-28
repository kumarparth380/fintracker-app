export interface Transaction {
  id: number;
  type?: string;
  description: string;
  amount: number;
  date: string;
  platform: string;
}
