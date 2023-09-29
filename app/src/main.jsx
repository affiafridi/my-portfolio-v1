import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ChakraProvider, ColorModeProvider, extendTheme } from "@chakra-ui/react";
import theme from './styles/theme.js'

ReactDOM.createRoot(document.getElementById("root")).render(
  <ChakraProvider theme={theme}>
    <ColorModeProvider
      options={{
        initialColorMode: 'dark',
      useSystemColorMode: false, //** If this is false 'dark' will be shown as default */ 
      }}
    >
      <App />
    </ColorModeProvider>
  </ChakraProvider>
);
