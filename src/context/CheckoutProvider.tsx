import { createContext, useState, useMemo, useCallback } from 'react';
import { PizzaInfoCartType, PizzaInfoType } from '../types/product';
import usePricing from '../hook/usePricing';

interface ICheckoutContextState {
  carts: PizzaInfoCartType[];
  addToCart: (p: PizzaInfoType) => void;
  removeToCart: (p: PizzaInfoType) => void;
  total: number;
}

export const CheckoutContext = createContext<ICheckoutContextState>({
  carts: [],
  addToCart: () => {},
  removeToCart: () => {},
  total: 0
});

type CheckoutProviderProps = {
  children: React.ReactNode;
};

export function CheckoutProvider({ children }: CheckoutProviderProps) {
  const { getPricing } = usePricing({});
  const [carts, setCarts] = useState<PizzaInfoCartType[]>([]);

  const addToCart = useCallback((newItem: PizzaInfoType) => {
    setCarts(prevItems => {
      const foundIndex = prevItems.findIndex(i => i.id === newItem.id);
      // add new
      if (foundIndex === -1) {
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

  const removeToCart = useCallback((newItem: PizzaInfoType) => {
    setCarts(prevItems => {
      const foundIndex = prevItems.findIndex(i => i.id === newItem.id);
      if (foundIndex > -1 && prevItems[foundIndex].amount === 1) {
        return prevItems.splice(foundIndex, 1);
      }

      const newItems = prevItems.map(item => {
        if (item.id === newItem.id) {
          return { ...item, amount: item.amount - 1 };
        }
        return item;
      });
      return newItems;
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
      removeToCart
    }),
    [carts, total, addToCart, removeToCart]
  );

  return (
    <CheckoutContext.Provider value={memoizedValue}>
      {children}
    </CheckoutContext.Provider>
  );
}
