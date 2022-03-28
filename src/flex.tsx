import React, { LegacyRef } from "react";
import { Box } from "@chakra-ui/react";

interface props {
  id: string;
  reff: LegacyRef<HTMLDivElement>;
}

const flex: React.FC<props> = ({ children, id, reff }) => {
  return (
    <Box
      ref={reff}
      display="flex"
      flexDir={{ base: "column", lg: "row" }}
      alignItems="center"
      justifyContent="center"
      h={{ base: "92vh", lg: "100vh" }}
      maxH="100vh"
      id={id}
    >
      {children}
    </Box>
  );
};

export default flex;
