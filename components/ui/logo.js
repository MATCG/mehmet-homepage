import { useColorMode, Box } from '@chakra-ui/react';
import styled from '@emotion/styled';

const Logo = styled.h3`
  /* Text Appearance */
  font-family: "Anta", sans-serif;
  font-weight: 600;
  font-style: normal;
  font-size: 20px;

  /* Visual appearance */
  background: transparent;
  color: white;
  border-radius: 8px;
  cursor: default; /* Default cursor style */

  /* Layout */
  display: inline-block;
  text-align: left;
  padding: 15px;

  /* Animations */
  transition: transform 0.3s ease;
  transform-origin: center;

  /* Interaction */

  &:hover {
    transform: scale(1.1) translate(3%, 0%);
  }
  
  &:active {
    transform: scale(1.0) translate(0%, 0%); /* Make it smaller when clicked */
  }

  .anta-regular {
    font-family: "Anta", sans-serif;
    font-weight: 400;
    font-style: normal;
  }

`;

const MyLogo = () => {
  const { colorMode } = useColorMode();

  return(
    <Box>
      <Logo style={{ color: colorMode === 'dark' ? 'white' : 'black' }}>⏾Ak1f</Logo>
    </Box>
  );
};

export default MyLogo;
