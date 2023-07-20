import { Box, Select } from '@chakra-ui/react';
import { useCheckoutProvider } from '../../../context/useCheckoutProvider';
import useGetPricingRules from '../services/useGetPricingRules';
import { useMemo } from 'react';

const ClientOptions = () => {
  const { changePricingRules } = useCheckoutProvider();
  const rules = useGetPricingRules();

  const rulesIds = useMemo(() => {
    if (rules) {
      return rules.map(r => r.id);
    }
  }, [rules]);

  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;

    if (rules.length > 0) {
      const rule = (rules || []).find(r => r.id === value);
      changePricingRules(rule);
    }
  };

  return (
    <Box>
      <Select placeholder='Select client type' onChange={onChange}>
        {rulesIds?.map(id => (
          <option key={id} value={id}>
            {id}
          </option>
        ))}
      </Select>
    </Box>
  );
};

export default ClientOptions;
