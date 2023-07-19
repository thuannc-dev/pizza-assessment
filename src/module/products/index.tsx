import { Flex } from '@chakra-ui/react';
import ProductCard from './components/product-card';
import { PizzaInfoType } from '../../types/product';
import useGetProducts from './services/useGetProducts';

const Products = () => {
  const pizzaTypes = useGetProducts();
  return (
    <Flex direction='column'>
      {pizzaTypes.map((pizza: PizzaInfoType) => (
        <ProductCard key={pizza.id} {...pizza} />
      ))}
    </Flex>
  );
};

export default Products;
