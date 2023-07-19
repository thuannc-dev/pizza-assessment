export type SizeType = 'S' | 'M' | 'L';

export interface PizzaInfoType {
  id: number;
  name: string;
  size: SizeType;
  price: number;
}

export interface PizzaInfoCartType extends PizzaInfoType {
  amount: number;
}

export interface PricingRulesType {
  id: string;
}
