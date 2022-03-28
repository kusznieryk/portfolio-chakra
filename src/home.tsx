import React from "react";
import { Box, Heading, Text, Center } from "@chakra-ui/react";

const home = () => (
  <>
    <Center flex="1">
      <Heading color="brand.100" as="h1" fontSize={{ base: "5xl", lg: "6xl" }}>
        <Box as="span" color="brand.200">
          E
        </Box>
        duardo
        <br />
        <Box as="span" color="brand.200">
          Kusz
        </Box>
        nieryk
      </Heading>
    </Center>
    <Box flex="1" maxW="40ch">
      <Heading fontSize="4xl">React developer</Heading>
      <Text>
        Experience on simple backend with Nodejs and PostgreSQL. Some knowledge
        in authentication and React native. But my main focus is FrontEnd with
        <b> Reactjs, TypeScript, Nextjs and Chakra-UI.</b>
      </Text>
    </Box>
  </>
);

export default home;
