import { Text, Flex, IconButton, Spacer, Box, Button } from '@chakra-ui/react';
import { PizzaInfoCartType } from '../../../types/product';
import { useCheckoutProvider } from '../../../context/useCheckoutProvider';

const ProductOrderCard = (product: PizzaInfoCartType) => {
  const { name, size, price, amount } = product;
  const { addToCart, removeFromCart, clearItemFromCart } =
    useCheckoutProvider();
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
        <Flex alignItems='center' justifyContent='center'>
          <IconButton
            size='sm'
            aria-label='decrease'
            icon={<span>-</span>}
            variant='solid'
            onClick={() => removeFromCart(product)}
          />
          <Text>{amount}</Text>
          <IconButton
            size='sm'
            aria-label='increase'
            icon={<span>+</span>}
            variant='solid'
            onClick={() => addToCart(product)}
          />
          <Button
            ml={2}
            size='sm'
            colorScheme='red'
            onClick={() => clearItemFromCart(product)}
          >
            Clear
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default ProductOrderCard;
