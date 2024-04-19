import {
  Box,
  Container, 
  Flex,
} from "@chakra-ui/react";

import { useColorModeValue } from "@chakra-ui/react";

import Logo from './logo';
import ColorModeSwitcher from '../utils/colormodeswitcher';

const TopBar = () => {
  return (
    <Box
      bg={useColorModeValue('#FFFFFF96', '#70245980')}
      backdropFilter="blur(10px)"
      maxW="auto"
      position="fixed" // To make it fixed at the top
      top={0} // To position it at the top
      left={0} // To position it at the left edge
      right={0} // To position it at the right edge
      zIndex={999} // To make sure it appears above other content
      mb=""
    >
      <Container>
        <Flex justify="space-between" alignItems="center">
          <Logo ml={5} />
          <Flex>
            <ColorModeSwitcher />
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default TopBar;
