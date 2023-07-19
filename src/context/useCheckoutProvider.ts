import { CheckoutContext } from './CheckoutProvider';
import { useContext } from 'react';

export const useCheckoutProvider = () => {
  const context = useContext(CheckoutContext);

  if (!context)
    throw new Error('CheckoutContext context must be use inside ChatProvider');

  return context;
};
