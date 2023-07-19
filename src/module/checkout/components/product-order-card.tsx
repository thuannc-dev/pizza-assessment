import { Text, Flex, IconButton, Spacer, Box } from '@chakra-ui/react';
import { PizzaInfoCartType } from '../../../types/product';
import { useCheckoutProvider } from '../../../context/useCheckoutProvider';

const ProductOrderCard = (product: PizzaInfoCartType) => {
  const { name, size, price, amount } = product;
  const { addToCart, removeToCart } = useCheckoutProvider();
  return (
    <Box>
      <Flex>
        <Box>
          <Text as='b'>{name}</Text>
          <br />
          <Text>size: {size}</Text>
          <Text>${price}</Text>
        </Box>
        <Spacer />
        <Flex alignItems='center'>
          <IconButton
            aria-label='decrease'
            icon={<span>-</span>}
            variant='solid'
            onClick={() => removeToCart(product)}
          />
          <Text>{amount}</Text>
          <IconButton
            aria-label='increase'
            icon={<span>+</span>}
            variant='solid'
            onClick={() => addToCart(product)}
          />
        </Flex>
      </Flex>
    </Box>
  );
};

export default ProductOrderCard;
