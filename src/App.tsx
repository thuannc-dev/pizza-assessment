import { ChakraProvider, Flex, Box, Container } from '@chakra-ui/react';
import Products from './module/products';
import Checkout from './module/checkout';
import { CheckoutProvider } from './context/CheckoutProvider';

function App() {
  return (
    <ChakraProvider>
      <CheckoutProvider>
        <Container centerContent height={'100vh'} p={12}>
          <Flex height='100%' flex={1}>
            <Box mr={8}>
              <Products />
            </Box>
            <Checkout />
          </Flex>
        </Container>
      </CheckoutProvider>
    </ChakraProvider>
  );
}

export default App;
