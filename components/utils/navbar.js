import { useState } from 'react';

import Link from 'next/link';

import {
  Box,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";

import {
  HamburgerIcon,
} from "@chakra-ui/icons";
 
import { motion } from "framer-motion";

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" }
}

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [isOpen, setIsOpen] = useState(false);

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

/*
*/
