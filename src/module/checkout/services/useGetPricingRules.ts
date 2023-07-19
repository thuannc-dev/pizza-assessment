import { useState, useEffect } from 'react';
import { PricingRulesType } from '../../../types/pricing';

const fetchData = async () => {
  const res = await fetch('/api/pricingRules.json')
    .then(res => res.json())
    .catch(err => {
      console.log('🚀 useGetPricingRules ~ err:', err);
    });
  return res;
};

const useGetPricingRules = () => {
  const [data, setData] = useState<PricingRulesType[]>([]);

  useEffect(() => {
    const excute = async () => {
      const res = await fetchData();
      setData(res.pricingRules || []);
    };
    excute();
  }, []);

  return data;
};

export default useGetPricingRules;
