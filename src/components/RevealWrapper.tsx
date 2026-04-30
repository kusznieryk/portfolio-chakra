import { Box, BoxProps } from "@chakra-ui/react";
import React from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";

interface RevealWrapperProps extends Omit<BoxProps, "ref"> {
  children: React.ReactNode;
  delay?: string | number;
}

export const RevealWrapper: React.FC<RevealWrapperProps> = ({
  children,
  delay = "0s",
  ...boxProps
}) => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.05 });

  const delayValue =
    typeof delay === "number"
      ? `${delay}ms`
      : delay;

  return (
    <Box
      ref={ref}
      opacity={isVisible ? 1 : 0}
      transform={isVisible ? "translateY(0)" : "translateY(28px)"}
      transition="opacity 0.65s ease-out, transform 0.65s ease-out"
      transitionDelay={delayValue}
      willChange="opacity, transform"
      sx={{
        // Ensure content is visible for SSR and reduced motion
        '@media (prefers-reduced-motion: reduce)': {
          opacity: 1,
          transform: 'none',
        },
      }}
      {...boxProps}
    >
      {children}
    </Box>
  );
};

export default RevealWrapper;
