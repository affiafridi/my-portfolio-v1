import { extendTheme } from "@chakra-ui/react";
import { theme as chakraTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

const fonts = {
  body: `source code pro`,
  heading: `Rubik`,
};

const colors = {
    dark: {
        900: "#461959",
        800: "7A316F",
        700: "CD6688"
    }
}

const overrides = {
  ...chakraTheme,
  colors,
  fonts,
};

// const breakpoints = {
//     sm: '30em',
//     md: '48em',
//     lg: '62em',
//     xl: '80em',
//     '2xl': '96em',
//   }


const customTheme = extendTheme(overrides);

export default customTheme;
