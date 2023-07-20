import { useCallback, useMemo } from 'react';
import { PizzaInfoCartType } from '../types/product';
import {
  PricingRulesType,
  PricingRulesDropType,
  PricingRulesGetmoreType,
  PricingRulesEnum
} from '../types/pricing';
import { SizeType } from '../types/product';

const usePricing = (pricingRules: PricingRulesType) => {
  const findItemBySize = useCallback(
    (items: PizzaInfoCartType[], size: SizeType) => {
      return items.find(i => i.size === size);
    },
    []
  );

  const getDropDiscount = useCallback(
    (items: PizzaInfoCartType[], rule: PricingRulesDropType) => {
      const itemFounded = findItemBySize(items, rule.size);
      if (itemFounded) {
        return itemFounded.amount * (itemFounded.price - rule.dropTo) * -1;
      }
      return 0;
    },
    [findItemBySize]
  );

  const getGetmoreDiscount = useCallback(
    (items: PizzaInfoCartType[], rule: PricingRulesGetmoreType) => {
      const itemFounded = findItemBySize(items, rule.size);
      if (itemFounded) {
        const peak = rule.getMoreAmount + rule.from;
        return (
          Math.floor(itemFounded?.amount / peak) *
          (itemFounded.price * rule.getMoreAmount) *
          -1
        );
      }
      return 0;
    },
    [findItemBySize]
  );

  const getDiscount = useCallback(
    (items: PizzaInfoCartType[], pricingRules: PricingRulesType) => {
      // TODO: change switch case to create object { [Rules]: discountFunc}
      switch (pricingRules.type) {
        case PricingRulesEnum.DROP:
          return getDropDiscount(items, pricingRules as PricingRulesDropType);
        case PricingRulesEnum.GET_MORE:
          return getGetmoreDiscount(
            items,
            pricingRules as PricingRulesGetmoreType
          );
        default:
          return 0;
      }
    },
    [getDropDiscount, getGetmoreDiscount]
  );

  const getPricing = useCallback(
    (items: PizzaInfoCartType[]) => {
      const total = items.reduce(
        (acc, item) => acc + item.price * item.amount,
        0
      );
      const discount = getDiscount(items, pricingRules);
      return total + discount;
    },
    [pricingRules, getDiscount]
  );

  return useMemo(
    () => ({
      getPricing
    }),
    [getPricing]
  );
};

export default usePricing;
