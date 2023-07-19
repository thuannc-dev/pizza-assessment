export type SizeType = 'S' | 'M' | 'L';

export enum Size {
  SMALL = 'S',
  MEDIUM = 'M',
  LARGE = 'L'
}

export interface PizzaInfoType {
  id: number;
  name: string;
  size: Size;
  price: number;
}

export interface PizzaInfoCartType extends PizzaInfoType {
  amount: number;
}
