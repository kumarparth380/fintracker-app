export type CardType = 'paypal' | 'credit' | 'debit' | 'other';
export interface Card {
  balance: number;
  name: string;
  validity: string;
  number: string;
  type: CardType;
}
