// pages/_app.js
import { ChakraProvider } from "@chakra-ui/react";
import Layout from '../components/layouts/main';
import theme from '../components/theme';

const Website = ({ Component, pageProps, router }) => {
  return (
    <ChakraProvider theme={theme}>
      <Layout router={router}>
      </Layout>
      <Component {...pageProps} key={router.route} />
    </ChakraProvider>
  );
}

export default Website;
