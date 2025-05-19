import React from "react";
import { Box, Image, Text, Heading } from "@chakra-ui/react";
import Underline from "./underline";
const about = () => {
  return (
      <Box  height={"100vh"}>
        <Heading pl={"200px"} pt={"20px"} color={"var(--chakra-colors-brand-300)"}>
          About me
          <Underline />
        </Heading>
    <Box display="flex" flexDirection="row" justifyContent="space-evenly" alignItems="center" height={"75vh"}>
      <Box color={"var(--chakra-colors-brand-300)"} flexGrow={1} maxWidth={"40%"} fontSize={"2xl"}>
        <Text >
          I would describe myself as someone exigent and who didn’t take care
          about my limits sometimes. Enthusiast of technology,{" "}
          reading and Open Source. Student of Lic. on{" "}
          Systems at the UNLP.
        </Text>
        <Text>
          Something as a self-taught developer and an{" "}
          Argentinian learning English.
        </Text>
        <Text>
          Love for learning new things and breaking{" "}
          the existent.
        </Text>
      </Box>
      <Image rounded="md" src="https://bit.ly/dan-abramov" alt="Dan Abramov" />
    </Box>
      </Box>
  );
};

export default about;
