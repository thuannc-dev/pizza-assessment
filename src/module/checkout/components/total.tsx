import { Flex, Text } from '@chakra-ui/react';
import { useCheckoutProvider } from '../../../context/useCheckoutProvider';

const Total = () => {
  const { total } = useCheckoutProvider();
  return (
    <Flex mt='auto' width='100%' justify='space-between' alignItems='end'>
      <Text>Total:</Text>
      <Text fontSize='2xl' as='b'>
        ${Math.round(total * 100) / 100}
      </Text>
    </Flex>
  );
};

export default Total;
