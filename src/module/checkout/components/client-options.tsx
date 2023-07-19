import { Box, Select } from '@chakra-ui/react';
import { useCheckoutProvider } from '../../../context/useCheckoutProvider';

const ClientOptions = () => {
  const { changePricingRules } = useCheckoutProvider();

  const onChange = (e: any) => {
    console.log('🍉 :', e);
    changePricingRules('');
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
