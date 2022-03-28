import React from "react";
import { Box, Stack, Heading, Text, Link, Center } from "@chakra-ui/react";

import { project } from "../types";

interface props {
  details: project;
}
const proj: React.FC<props> = ({ details }) => {
  return (
    <Stack h="80vh" w="80vw" direction={{ base: "column", lg: "row" }} gap="4">
      <Box
        bgImage={details.img}
        bgPos="center"
        bgSize="contain"
        bgRepeat="no-repeat"
        flex="4"
        position="relative"
        zIndex="-20"
        alignItems="center"
      >
        <Heading
          bg="brand.500"
          color="brand.100"
          opacity="0.6"
          position="absolute"
          bottom={0}
          w="100%"
          textAlign="center"
        >
          {details.name}
        </Heading>
      </Box>
      <Center flex="2">
        <Box>
          <Text>{details.description}</Text>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Link isExternal href={details.code} borderBottom="1px solid white">
              {" "}
              Code{" "}
            </Link>
            <Link isExternal href={details.live} borderBottom="1px solid white">
              {" "}
              Preview
            </Link>
          </Stack>
        </Box>
      </Center>
    </Stack>
  );
};

export default proj;
