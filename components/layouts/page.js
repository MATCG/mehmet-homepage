import { Box, Container } from '@chakra-ui/react';
import Head from 'next/head';

const Page = ({ children }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Container alignItems="left" textAlign="left" align="left">
        {children}
      </Container>
    </Box>
  );
};

export default Page;
