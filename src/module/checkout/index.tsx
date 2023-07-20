import {
  Card,
  CardBody,
  Text,
  Stack,
  StackDivider,
  Divider
} from '@chakra-ui/react';
import ProductOrderCard from './components/product-order-card';
import Total from './components/total';
import { useCheckoutProvider } from '../../context/useCheckoutProvider';
import ClientOptions from './components/client-options';

const Checkout = () => {
  const { carts } = useCheckoutProvider();

  return (
    <Card>
      <CardBody width={500}>
        <Text fontSize='4xl'>Order</Text>
        <ClientOptions />
        <Divider orientation='horizontal' mt={4} mb={4} />
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
