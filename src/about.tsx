import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
const about = () => {
  return (
    <>
      <Heading>
        Looking for a <b>job</b> and open to participate in <b>projects</b>
      </Heading>
      <Box>
        <Text>
          I would describe myself as someone exigent and who didn’t care about
          his limits sometimes, with all the bad that that implies. Enthusiast
          of <span>technology</span>, <span>reading</span> and{" "}
          <span>Open Source</span>. Student of Lic. on <span>Systems</span> at
          the <span>UNLP</span>.
        </Text>
        <Text>
          Something as a <span>self-taught</span> developer and an{" "}
          <span>Argentinian</span> learning English.
        </Text>
        <Text>
          Love for <span>learning new things</span> and <span>break</span>
          existent
        </Text>
      </Box>
    </>
  );
};

export default about;
