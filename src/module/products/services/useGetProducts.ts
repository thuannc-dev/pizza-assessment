import { useState, useEffect } from 'react';
import { PizzaInfoType } from '../../../types/product';

const fetchData = async () => {
  const res = await fetch('/api/products.json')
    .then(res => res.json())
    .catch(err => {
      console.log('🚀 useGetProducts ~ err:', err);
    });
  return res;
};

const useGetProducts = () => {
  const [data, setData] = useState<PizzaInfoType[]>([]);

  useEffect(() => {
    const excute = async () => {
      const res = await fetchData();
      setData(res.products || []);
    };
    excute();
  }, []);

  return data;
};

export default useGetProducts;
