import React, { ReactElement } from "react";
import { Box, Collapse, Stack, useDisclosure, Image } from "@chakra-ui/react";

import { itemDetail } from "../types";
interface props {
  items: Array<ReactElement>;
  itemsList: Array<itemDetail>;
}
const mobile: React.FC<props> = ({ items, itemsList }) => {
  const { isOpen, onToggle } = useDisclosure();

  const navPreview = itemsList.map((item, index) => (
    <Image
      src={item.icon}
      key={index}
      opacity={item.active ? 1 : 0.3}
      w="40px"
    />
  ));
  return (
    <>
      <Box
        onClick={onToggle}
        display={{ base: "flex", lg: "none" }}
        flexDirection="row"
        justifyContent={"space-around"}
        position="fixed"
        h="6vh"
        w="100vw"
        bg="brand.500"
        zIndex="100"
      >
        {navPreview}
      </Box>
      <Collapse in={isOpen} animateOpacity>
        <Stack
          zIndex="100"
          position="fixed"
          w={"100vw"}
          h={"50vh"}
          bg="brand.500"
          p="1vw"
          alignItems={"center"}
          justifyContent={"space-evenly"}
          onClick={onToggle}
        >
          {items}
        </Stack>
      </Collapse>
    </>
  );
};

export default mobile;
