// components/CustomHeading.js

import { Heading, Box, useColorModeValue } from '@chakra-ui/react';

const SectionTitle = ({ children, variant, ...rest }) => {
  const color = useColorModeValue('black', 'white');
  const underlineColor = useColorModeValue('black', 'white');

  const sectionTitleStyle = {
    color,
    fontSize: 'lg',
    borderBottom: `4px solid ${underlineColor}`, // Adjust the underline size
    textDecoration: 'none', // Remove default underline
    display: 'inline-block', // Ensure the underline doesn't span the whole line
  };

  return (
    <Box mb="1rem" mt="1rem">
      <Heading {...sectionTitleStyle} {...rest}>
        {children}
      </Heading>
    </Box>
  );
};

export default SectionTitle;
