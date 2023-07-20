import { renderHook } from '@testing-library/react-hooks';
import usePricing from '../usePricing';
import { PizzaInfoCartType } from '../../types/product';

const cartDumpData: Record<string, PizzaInfoCartType[]> = {
  default: [
    { id: 1, name: 'Small Pizza', price: 11.99, size: 'S', amount: 1 },
    { id: 2, name: 'Medium Pizza', price: 15.99, size: 'M', amount: 1 },
    { id: 3, name: 'Large Pizza', price: 21.99, size: 'L', amount: 1 }
  ],
  microsoft: [
    { id: 1, name: 'Small Pizza', price: 11.99, size: 'S', amount: 3 },
    { id: 3, name: 'Large Pizza', price: 21.99, size: 'L', amount: 1 }
  ],
  amazon: [
    { id: 2, name: 'Medium Pizza', price: 15.99, size: 'M', amount: 3 },
    { id: 3, name: 'Large Pizza', price: 21.99, size: 'L', amount: 1 }
  ],
  facebook: [
    { id: 2, name: 'Medium Pizza', price: 15.99, size: 'M', amount: 5 },
    { id: 3, name: 'Large Pizza', price: 21.99, size: 'L', amount: 1 }
  ]
};

describe('test usePricing', () => {
  test('default', async () => {
    const { result } = renderHook(() =>
      usePricing({
        id: 'default',
        type: 'DEFAULT'
      })
    );

    expect(result.current.getPricing(cartDumpData.default)).toEqual(49.97);
  });

  test('microsoft', async () => {
    const { result } = renderHook(() =>
      usePricing({
        id: 'microsoft',
        type: 'GET_MORE',
        size: 'S',
        getMoreAmount: 1,
        from: 2
      })
    );

    expect(result.current.getPricing(cartDumpData.microsoft)).toEqual(45.97);
  });

  test('amazon', async () => {
    const { result } = renderHook(() =>
      usePricing({
        id: 'amazon',
        type: 'DROP',
        size: 'L',
        dropTo: 19.99
      })
    );

    expect(result.current.getPricing(cartDumpData.amazon)).toEqual(67.96);
  });

  test('facebook', async () => {
    const { result } = renderHook(() =>
      usePricing({
        id: 'facebook',
        type: 'GET_MORE',
        size: 'M',
        getMoreAmount: 1,
        from: 4
      })
    );

    expect(result.current.getPricing(cartDumpData.facebook)).toEqual(85.95);
  });
});
