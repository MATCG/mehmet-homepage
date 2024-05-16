// components/CustomHeading.js

import { Heading, Box, useColorModeValue } from '@chakra-ui/react';

/** children
 * Children enables you to be able to give content to the
 * heading. I.e you can then use the element like you
 * would use any other normal element
 */

/** ...rest
 * color, fontSize etc are also properties with rest you
 * enable the element to accept later more properties i.e
 * modifies e.g if you use the element in another file and
 * edit it there.
 */

const SectionTitle = ({ children, ...rest }) => {
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
