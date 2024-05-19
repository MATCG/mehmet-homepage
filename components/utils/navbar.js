import Link from 'next/link';

import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  useColorModeValue,
} from "@chakra-ui/react";

import {
  HamburgerIcon,
} from "@chakra-ui/icons";
 

const Navbar = () => {
  return (
    <Menu pt="10">
      <MenuButton
        /* Interaction */
        as={IconButton}
        aria-label='Navigation menu'

        /* Visual appearance */
        icon={<HamburgerIcon />}
        variant='ghost'
        borderColor="white"
        color={useColorModeValue('black', 'white')}
        bg={useColorModeValue('RGBA(0, 0, 0, 0.00)', 'RGBA(0, 0, 0, 0.08)')}
        _hover={{ bg: useColorModeValue('white', 'RGBA(0, 0, 0, 0.16)')}}
        _active={{ bg: useColorModeValue('white', 'RGBA(0, 0, 0, 0.24)')}}
      />
      <MenuList>
        <MenuItem as={Link} href="/">
          Home
        </MenuItem>
        <MenuItem as={Link} href="/achievements/cs50">
          Works
        </MenuItem>
      </MenuList>
    </Menu>
  );
};
 
export default Navbar;
