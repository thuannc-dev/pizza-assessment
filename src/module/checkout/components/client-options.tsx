import { Box, Select } from '@chakra-ui/react';
import { useCheckoutProvider } from '../../../context/useCheckoutProvider';
import useGetPricingRules from '../services/useGetPricingRules';

const ClientOptions = () => {
  const { changePricingRules } = useCheckoutProvider();
  const rules = useGetPricingRules();
  console.log(
    '🚀 ~ file: client-options.tsx:7 ~ ClientOptions ~ rules:',
    rules
  );

  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    console.log('🍉 :', value);
    if (rules.length > 0) {
      const rule = (rules || []).find(r => r.id === value);
      changePricingRules(rule);
    }
  };
  return (
    <Box>
      <Select placeholder='Select client type' onChange={onChange}>
        <option value='default'>Default</option>
        <option value='microsoft'>Microsoft</option>
        <option value='amazon'>Amazon</option>
        <option value='facebook'>Facebook</option>
      </Select>
    </Box>
  );
};

export default ClientOptions;
