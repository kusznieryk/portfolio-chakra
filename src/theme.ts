import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      html: {
        scrollBehavior: "smooth",
        fontSize: "18px",
      },
      body: {
        bg: "brand.400",
        color: "brand.100",
        fontFamily: "'Roboto Mono', monospace",
      },
      "span, b": {
        color: "brand.200",
      },
      li: {
        borderBottom: "solid 1px red",
      },
    },
  },
  colors: {
    brand: {
      100: "#E0E1DD",
      200: "#778DA9",
      300: "#415A77",
      400: "#141C2C",
      500: "#0D1B2A",
    },
  },
});

export default theme;
