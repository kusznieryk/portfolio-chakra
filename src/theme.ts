import { extendTheme } from "@chakra-ui/react";

// Completely rewritten design system for a dark/amber theme
const theme = extendTheme({
  styles: {
    global: {
      html: {
        scrollBehavior: "smooth",
        fontSize: "18px",
        WebkitFontSmoothing: "antialiased",
        MozOsxFontSmoothing: "grayscale",
      },
      body: {
        bg: "bg",
        color: "text",
        fontFamily: "body",
        lineHeight: 1.5,
      },
      // Remove legacy debug styling from theme
    },
  },
  colors: {
    // Core palette mapped to Chakra tokens
    bg: "#0c0d0f",       // main background
    bg2: "#13141a",      // secondary background
    bg3: "#1a1c24",      // tertiary background
    surface: "#1e2028",   // card surfaces
    amber: "#EF9F27",     // accent color
    text: "#e8e6e0",      // main text
    textMuted: "#8a8882", // muted text
    textDim: "#5a5955",   // dim text
    border: "rgba(255,255,255,0.07)",
  },
  fonts: {
    heading: "'Syne', ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, Arial, sans-serif",
    body: "'Lora', Georgia, Cambria, serif",
    mono: "'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Courier New', monospace",
  },
});

export default theme;
