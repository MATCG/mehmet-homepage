import { Box, Container } from '@chakra-ui/react';
import Head from 'next/head';

const Main = ({ children }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Container>
        {children}
      </Container>
    </Box>
  );
};

export default Main;
