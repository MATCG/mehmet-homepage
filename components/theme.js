import { extendTheme } from "@chakra-ui/react";
import { mode } from '@chakra-ui/theme-tools';

// Import individual component themes

// Import other component themes as needed

const styles = {
  global: props => ({
    body: {
      bg: mode('#EBF8FF', '#1A202C')(props)
    }
  })
};

const config = {
  initialColorMode: "dark",
  useSystemColorMode: true,
};

// Left => light- | Right = darkmode
const colors = {
  // background: useColorModeValue('#EBF8FF', '#1A202C'),
  // cover: useColorModeValue('#76E4F7', '#2D3748'),
  // indicator: useColorModeValue('#9F7AEA', '#BEE3F8'),
  // text: useColorModeValue('#000000', '#FFFFFF'),
  // primary: useColorModeValue('', '#81E6D9'),
  // secondary: useColorModeValue('', '#B83280'),
};

const fonts = {
  // body: "Roboto, sans-serif",
  // heading: "Roboto, sans-serif",
  // logo: "'../fonts/Blanka-Regular.otf'"
  // define additional fonts here if needed
};

const components = {
  // ...buttonTheme,
  // Above an example add other component themes here
};

const variants = {
  // define button variants or other component variants
};

const theme = extendTheme({ styles, config, colors, fonts, components, variants });
 
export default theme;
