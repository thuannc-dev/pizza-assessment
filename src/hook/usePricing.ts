import { useCallback, useMemo } from 'react';
import { PizzaInfoCartType } from '../types/product';

interface PriceRuleType {}

const usePricing = (priceRule: PriceRuleType) => {
  const getPricing = useCallback(
    (items: PizzaInfoCartType[]) => {
      // TODO
      return 0;
    },
    [priceRule]
  );

  return useMemo(
    () => ({
      getPricing
    }),
    [getPricing]
  );
};

export default usePricing;
