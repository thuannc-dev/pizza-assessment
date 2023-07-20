import { createContext, useState, useMemo, useCallback } from 'react';
import { PizzaInfoCartType, PizzaInfoType } from '../types/product';
import usePricing from '../hook/usePricing';

interface ICheckoutContextState {
  carts: PizzaInfoCartType[];
  addToCart: (p: PizzaInfoType) => void;
  removeFromCart: (p: PizzaInfoType) => void;
  clearItemFromCart: (p: PizzaInfoType) => void;
  changePricingRules: (r: any) => void;
  total: number;
}

export const CheckoutContext = createContext<ICheckoutContextState>({
  carts: [],
  addToCart: () => {},
  removeFromCart: () => {},
  clearItemFromCart: () => {},
  changePricingRules: () => {},
  total: 0
});

type CheckoutProviderProps = {
  children: React.ReactNode;
};

export function CheckoutProvider({ children }: CheckoutProviderProps) {
  const [carts, setCarts] = useState<PizzaInfoCartType[]>([]);
  const [pricingRules, setpPicingRules] = useState<any>({});
  const { getPricing } = usePricing(pricingRules);

  const addToCart = useCallback((newItem: PizzaInfoType) => {
    setCarts(prevItems => {
      const foundedIndex = prevItems.findIndex(i => i.id === newItem.id);

      // add new
      if (foundedIndex === -1) {
        return [...prevItems, { ...newItem, amount: 1 }];
      }

      // update amount
      const newItems = prevItems.map(item => {
        if (item.id === newItem.id) {
          return { ...item, amount: item.amount + 1 };
        }
        return item;
      });
      return newItems;
    });
  }, []);

  const removeFromCart = useCallback((currItem: PizzaInfoType) => {
    setCarts(prevItems => {
      const foundedIndex = prevItems.findIndex(i => i.id === currItem.id);

      if (foundedIndex > -1 && prevItems[foundedIndex].amount === 1) {
        return prevItems.filter(item => item.id !== currItem.id);
      }

      const newItems = prevItems.map(item => {
        if (item.id === currItem.id) {
          return { ...item, amount: item.amount - 1 };
        }
        return item;
      });
      return newItems;
    });
  }, []);

  const clearItemFromCart = useCallback((currItem: PizzaInfoType) => {
    setCarts(prevItems => {
      const foundedIndex = prevItems.findIndex(i => i.id === currItem.id);

      if (foundedIndex > -1) {
        return prevItems.filter(item => item.id !== currItem.id);
      }

      return prevItems;
    });
  }, []);

  const total = useMemo(() => {
    const caculatedPrice = getPricing(carts);
    return caculatedPrice;
  }, [getPricing, carts]);

  const memoizedValue = useMemo(
    () => ({
      carts,
      total,
      addToCart,
      removeFromCart,
      clearItemFromCart,
      changePricingRules: setpPicingRules
    }),
    [carts, total, addToCart, removeFromCart, clearItemFromCart]
  );

  return (
    <CheckoutContext.Provider value={memoizedValue}>
      {children}
    </CheckoutContext.Provider>
  );
}
