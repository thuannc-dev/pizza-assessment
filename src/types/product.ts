export type SizeType = 'S' | 'M' | 'L';

export enum SizeEnum {
  SMALL = 'S',
  MEDIUM = 'M',
  LARGE = 'L'
}
export interface PizzaInfoType {
  id: number;
  name: string;
  size: SizeType;
  price: number;
}

export interface PizzaInfoCartType extends PizzaInfoType {
  amount: number;
}
