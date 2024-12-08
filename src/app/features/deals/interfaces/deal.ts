export interface Deal {
  created: Date;
  dueDate: Date;
  status: string;
  customer: string;
  meters: number;
  quotes: number | string;
  updates: string;
}
