import React from "react";
import { Box, Image, Link } from "@chakra-ui/react";

interface props {
  text: string;
  icon: string;
  active?: boolean;
}

const icon: React.FC<props> = ({ text, icon, active }) => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      minW={{ base: "150px", lg: "initial" }}
      maxW="300px"
    >
      <Image src={icon} opacity={active ? 1 : 0.3} w="40px" />
      <Link
        href={`#${text}`}
        opacity={{ base: "1", lg: 0 }}
        _hover={{ opacity: 1 }}
        p="3"
        bg="brand.500"
        color="brand.100"
        textTransform={"uppercase"}
      >
        {" "}
        {text}
      </Link>
    </Box>
  );
};

export default icon;
