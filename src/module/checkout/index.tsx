import { Card, CardBody, Text, Stack, StackDivider } from '@chakra-ui/react';
import ProductOrderCard from './components/product-order-card';
import Total from './components/total';
import { useCheckoutProvider } from '../../context/useCheckoutProvider';

const Checkout = () => {
  const { carts } = useCheckoutProvider();
  return (
    <Card>
      <CardBody width={500}>
        <Text fontSize='4xl'>Order</Text>
        <Stack spacing={2} divider={<StackDivider borderColor='gray.100' />}>
          {carts.map(p => {
            return <ProductOrderCard key={p.id} {...p} />;
          })}
          {carts.length === 0 && <Text>No data</Text>}
        </Stack>
        <Total />
      </CardBody>
    </Card>
  );
};

export default Checkout;
