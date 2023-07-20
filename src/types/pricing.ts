import { SizeType } from './product';

export type PricingRules = 'GET_MORE' | 'DROP';

export enum PricingRulesEnum {
  GET_MORE = 'GET_MORE',
  DROP = 'DROP'
}

export type PricingRulesDropType = {
  id: string;
  type: string;
  size: SizeType;
  dropTo: number;
};

export type PricingRulesGetmoreType = {
  id: string;
  type: string;
  size: SizeType;
  getMoreAmount: number;
  from: number;
};

export type PricingRulesType = PricingRulesDropType | PricingRulesGetmoreType;
