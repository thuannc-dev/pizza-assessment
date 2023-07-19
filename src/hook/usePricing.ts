import { useCallback, useMemo } from 'react';
import { PizzaInfoCartType, PricingRulesType } from '../types/product';

const usePricing = (pricingRules: PricingRulesType) => {
  const getPricing = useCallback(
    (items: PizzaInfoCartType[]) => {
      // TODO
      return 0;
    },
    [pricingRules]
  );

  return useMemo(
    () => ({
      getPricing
    }),
    [getPricing]
  );
};

export default usePricing;
