import { Flex } from '@chakra-ui/react';
import ProductCard from './components/product-card';
import { PizzaInfoType } from '../../types/product';

const PIZZA: PizzaInfoType[] = [
  { id: 1, name: 'Small Pizza', price: 11.99, size: 'S' },
  { id: 2, name: 'Medium Pizza', price: 15.99, size: 'M' },
  { id: 3, name: 'Large Pizza', price: 21.99, size: 'L' }
];

const Products = () => {
  return (
    <Flex direction='column'>
      {PIZZA.map((pizza: PizzaInfoType) => (
        <ProductCard key={pizza.id} {...pizza} />
      ))}
    </Flex>
  );
};

export default Products;
