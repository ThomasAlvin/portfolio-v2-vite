import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import {
  ChakraProvider,
  defineStyle,
  defineStyleConfig,
  extendTheme,
} from "@chakra-ui/react";
const primary = defineStyle({
  background: "linear-gradient(to right,rgb(255, 64, 83), #bf081a)",
  _hover: {
    background: "linear-gradient(to right,rgb(246, 34, 55),rgb(161, 2, 18))",
  },
  color: "white",
  // transition: "background-color 0.2s ease-in-out",
});

export const buttonTheme = defineStyleConfig({
  variants: { primary },
  defaultProps: { variant: "primary" },
});
const customTheme = extendTheme({
  fonts: {
    body: "Oxanium, serif",
    heading: "Montserrat, serif",
    mono: "Roboto, sans-serif",
  },
  components: {
    Button: buttonTheme,
  },
});
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ChakraProvider theme={customTheme}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ChakraProvider>
);
