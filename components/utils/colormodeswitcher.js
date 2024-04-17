// components/ColorModeSwitcher.js

import { useColorMode, Button } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

import { useColorModeValue } from '@chakra-ui/react';

const ColorModeSwitcher = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Button
    /* Interaction */
    onClick={toggleColorMode}
    aria-label="Switch color mode"

    /* Visual appearance */
    variant="ghost"
    borderColor="white"
    color={useColorModeValue('white', 'black')}
    bg={useColorModeValue('#9F7AEA', '#F6AD55')}
    _hover={{ bg: useColorModeValue('#805AD5', '#ED8936')}}
    _active={{ bg: useColorModeValue('#6B46C1', '#DD6B20')}}

    /* Layout */
    mr={5} /* Lays space between element on it's right */
    >
      {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
    </Button>
  );
};

export default ColorModeSwitcher;
