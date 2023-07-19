import { useCallback, useMemo } from 'react';
import { PizzaInfoCartType, Size } from '../types/product';
import { Customer } from '../types/customer';
import { PricingRulesType } from '../types/pricing';

const usePricing = (pricingRules: PricingRulesType) => {
  const getDiscount = useCallback(
    (items: PizzaInfoCartType[], pricingRules: PricingRulesType) => {
      switch (pricingRules.id) {
        case Customer.MICROSOFT:
          const smallPizza = items.find(i => i.size === Size.SMALL);
          if (smallPizza) {
            return Math.floor(smallPizza?.amount / 3) * (smallPizza.price * -1);
          }
          return 0;
        case Customer.AMAZON:
          const largePizza = items.find(i => i.size === Size.LARGE);
          if (largePizza) {
            return (
              largePizza.amount *
              ((largePizza.price - (pricingRules?.dropTo || 0)) * -1)
            );
          }
          return 0;
        case Customer.FACEBOOK:
          const mediumPizza = items.find(i => i.size === Size.MEDIUM);
          if (mediumPizza) {
            return (
              Math.floor(mediumPizza?.amount / 5) * (mediumPizza.price * -1)
            );
          }
          return 0;
        default:
          return 0;
      }
    },
    []
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
