import { Stat, StatLabel, StatNumber, Text, Button } from '@chakra-ui/react';

import { PizzaInfoType } from '../../../types/product';
import { useCheckoutProvider } from '../../../context/useCheckoutProvider';

const ProductCard = (product: PizzaInfoType) => {
  const { name, size, price } = product;
  const { addToCart } = useCheckoutProvider();
  return (
    <Stat
      mb={8}
      px={{ base: 4, md: 8 }}
      py={'5'}
      border={'1px solid'}
      borderColor={'gray.300'}
      rounded={'lg'}
    >
      <StatLabel fontWeight={'medium'} isTruncated>
        {name}
      </StatLabel>
      <Text>Size: {size}</Text>
      <StatNumber fontSize={'2xl'} fontWeight={'medium'}>
        ${price}
      </StatNumber>
      <Button
        mt={4}
        px={8}
        colorScheme='teal'
        size='sm'
        color='white'
        rounded='md'
        onClick={() => addToCart(product)}
      >
        Add to cart
      </Button>
    </Stat>
  );
};

export default ProductCard;
