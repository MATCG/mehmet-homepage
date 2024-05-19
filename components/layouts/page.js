import { Box } from '@chakra-ui/react';
import Head from 'next/head';

const Page = ({ children }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
        {children}
    </Box>
  );
};

export default Page;
