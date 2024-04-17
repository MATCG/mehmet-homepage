# Understanding
## Theming
### NEXTJS, ChakraUI, Framer-motion

```js
// pages/_app.js
import { ChakraProvider, ColorModeScript, useColorMode } from '@chakra-ui/react';
import Layout from '../components/layouts/main';

// Color themes
import lightTheme from '../components/lightTheme';
import darkTheme from '../components/darkTheme';

const Website = ({ Component, pageProps, router }) => {
  return (
    // In case of light mode it uses lightTheme and otherwise darkTheme
    <ChakraProvider theme={useColorModeValue(lightTheme, darkTheme)}>
      <ColorModeScript initialColorMode={initialColorMode} />
        <Layout router={router}>
        </Layout>
      <Component {...pageProps} key={router.route} />
    </ChakraProvider>
  );
}

export default Website;
```

OR

## LightTheme

```js
// themes/lightTheme.js
import { extendTheme } from '@chakra-ui/react';

const lightTheme = extendTheme({
  colors: {
    background: '#FFFFFF',
    text: '#000000',
  },
});

export default lightTheme;
```

## DarkTheme

```js
``// themes/darkTheme.js
import { extendTheme } from '@chakra-ui/react';

const darkTheme = extendTheme({
  colors: {
    background: '#1A202C',
    text: '#FFFFFF',
  },
});

export default darkTheme;
```

Utils

```js
// components/ColorModeSwitcher.js

import { useColorMode, Button } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const ColorModeSwitcher = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Button onClick={toggleColorMode} variant="outline" colorScheme="pink">
      {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
    </Button>
  );
};

export default ColorModeSwitcher;
```

Final

```js
// index.js

<Box bgColor="background"> Hello, World <Box>
<Text color="text"> This was CS50X <Text>
```


## Optional ideas

```js
import { useColorModeValue } from "@chakra-ui/react";

const YourComponent = () => {
  // Define colors using useColorModeValue
  const white = useColorModeValue('#81E6D9', '#ED64A6');
  const gray300 = useColorModeValue("#CBD5E0", "#4A5568");
  const teal200 = useColorModeValue("#81E6D9", "#CBD5E0");
  const secondary = useColorModeValue("#ED64A6", "#6B46C1");
  const indicator = useColorModeValue("#6B46C1", "#ED64A6");
  const cover = useColorModeValue("#4A5568", "#CBD5E0");
  const background = useColorModeValue("#1A202C", "#FFFFFF");
  const darkest = useColorModeValue("#000000", "#FFFFFF");

  // Your JSX rendering here
};
```

## Other ways of making a theme

There is one way where you wrap everything into extend theme like this:

```js
import { extendTheme } from "@chakra-ui/react"

// Import individual component themes

// Import other component themes as needed

const theme = extendTheme({
  // Merge individual component themes into the main theme
  config: {
    initialColorMode: "light",
    useSystemColorMode: true,
  },
  colors: {
    // Define your color palette here
    light: {
      White: "FFFFFF", // White
    },
  },
  fonts: {
    body: "Roboto, sans-serif",
    heading: "Roboto, sans-serif",
  },
  components: {
    // ...buttonTheme,
    // Above an example add other component themes here...
  },
  variants: {
    // define button variants or other component variants
  },
});

export default theme
```

Or you define variables and then give them as parameters into the extend
theme function. It has the same effect but slightly different syntax.

> No need for an example since current theme is made with that principle.
