import React from "react";
import { Button } from "@chakra-ui/react";

interface props {
  onclick: () => void;
  text: string;
  right: string;
}

const btn: React.FC<props> = ({ onclick, text, right }) => (
  <Button
    onClick={onclick}
    bg="brand.500"
    colorScheme="brand.500"
    position="absolute"
    opacity="0.5"
    _hover={{ opacity: "1", transform: "scale(1.2)" }}
    top="50vh"
    right={right}
  >
    {text}
  </Button>
);

export default btn;
