import React from "react";
import { Box, Image, Link, Button, Text } from "@chakra-ui/react";

import Item from "./item";
import Mobile from "./mobile";
import Desktop from "./desktop";

import { itemDetail } from "../types";

interface props {
  itemsDetails: Array<itemDetail>;
}

const navbar: React.FC<props> = ({ itemsDetails }) => {
  const items = itemsDetails.map((item, i) => (
    <Item text={item.text} icon={item.icon} key={i} active={item.active} />
  ));
  items.push(
    <Box key="19">
      <Button
        leftIcon={
          <Image src="https://icongr.am/fontawesome/download.svg?size=36&color=778DA9" />
        }
        as={Link}
        href=""
        p="4"
        color="brand.100"
        colorScheme="brand.300"
        variant="ghost"
      >
        <Text opacity={{ base: "1", lg: 0 }} _hover={{ opacity: 1 }}>
          {" "}
          Resume
        </Text>
      </Button>
    </Box>
  );

  return (
    <>
      <Mobile items={items} itemsList={itemsDetails} />

      <Desktop items={items} />
    </>
  );
};

export default navbar;
