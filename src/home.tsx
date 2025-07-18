import React from "react";
import { Box, Heading, Text, Center } from "@chakra-ui/react";
import {Badge} from "./hero/badge";

const home = () => {
  const badges=[".NET","TypeScript","NextJS","ChakraUI","NodeJS", "Python", "Flask"];
  return (
      <>
        <Box
          position="fixed"
          top={0}
          right={0}
          width="100%"
          height="100%"
          zIndex={-1}
          sx={{
            background: "linear-gradient(135deg, rgba(97, 218, 251, 0.1), rgba(121, 40, 202, 0.1))",
            clipPath: "polygon(0% 3px, 90% 1px, 7.63% 100%, 0.13% 100%);"
          }}
        />
        <Box maxW={"800px"}>
          <Heading color={"transparent"} as="h1" fontSize={{ base: "5xl", lg: "6xl" }}
                   marginBottom={"1rem"}
                   fontWeight={700} background={" linear-gradient(to right, var(--chakra-colors-brand-300), var(--chakra-colors-brand-100))"}
                   backgroundClip={"text"}
          >
            Eduardo Kusznieryk
          </Heading>
          <Heading as="h2" fontSize={{ base: "3xl", lg: "4xl" }} fontWeight={600} marginBottom={"1rem"} color={"var(--chakra-colors-brand-100)"}> React developer</Heading>
          <Text color={"var(--chakra-colors-brand-500)"} fontSize={"2xl"}>
            Experience on simple backend with Nodejs and PostgreSQL. Some knowledge
            in authentication and React native. But my main focus is FrontEnd with
            Reactjs, TypeScript, Nextjs and Chakra-UI.
          </Text>
          <Box display={"flex"} flexWrap={"wrap"} gap={"0.5rem"} m={"2rem 0"}>{badges.map((badge, index) => (<Badge key={index} text={badge} />))}</Box>
        </Box>

      </>
  );
}

export default home;
