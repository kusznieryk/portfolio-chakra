import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      html: {
        scrollBehavior: "smooth",
        fontSize: "18px",
        transition: "all 0.3s ease",
      },
      body: {
        bg: "brand.400",
        color: "brand.100",
        fontFamily: " 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;",
        lineHeight: "1.5",
      },
      "span, b": {
        color: "brand.300",
      },
      li: {
        borderBottom: "solid 1px red",
      },
    },
  },
  colors: {
    brand: {
      100: "#61dafb", //primary
      200: "#7928ca", //accent
      300: "#e6e6e6", //text
      400: "#141C2C",
      500: "#a0a0a0", //text muted
    },
    bg:{
      "card": "#1a2133",
      "dark":"#0f1525"
    }
  },
});

export default theme;
