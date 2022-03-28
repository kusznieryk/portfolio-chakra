import React, { ReactElement } from "react";
import { Stack } from "@chakra-ui/react";

interface props {
  items: Array<ReactElement>;
}
const desktop: React.FC<props> = ({ items }) => {
  return (
    <Stack
      position="fixed"
      display={{ base: "none", lg: "flex" }}
      w="5vw"
      h="100vh"
      bg="brand.500"
      p="1vw"
      justifyContent={"space-evenly"}
    >
      {items}
    </Stack>
  );
};

export default desktop;
