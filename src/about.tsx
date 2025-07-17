import React from "react";
import { Box, Image, Text, Heading, Button, Link } from "@chakra-ui/react";
import Underline from "./underline";
const about = () => {
  return (
      <Box minH={{ base: "auto", md: "100vh" }}>
        <Heading pl={{ base: 4, md: "200px" }} pt={{ base: 4, md: "20px" }} color={"var(--chakra-colors-brand-300)"} fontSize={{ base: "2xl", md: "4xl" }}>
          About me
          <Underline />
        </Heading>
    <Box display="flex" flexDirection={{ base: "column", md: "row" }} justifyContent="space-evenly" alignItems="center" minH={{ base: "auto", md: "75vh" }} px={{ base: 2, md: 8 }}>
      <Box color={"var(--chakra-colors-brand-300)"} flexGrow={1} maxWidth={{ base: "100%", md: "60%" }} fontSize={{ base: "md", md: "2xl" }} mb={{ base: 6, md: 0 }}>
       <Text>
        Hi! I’m an Argentinian student of Licenciatura en Sistemas at UNLP.<br />
I'm passionate about technology, especially emerging trends, and I'm a strong advocate for open source and lifelong learning.<br />
I enjoy reading, building things, and breaking them to understand how they work.<br />
I also love teaching, it is something I truly care about.
       </Text>
      </Box>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Image rounded="md" src="https://i.imgur.com/TUCeBJm.png" alt="Kusznieryk Eduardo " mb={4} maxWidth={{ base: "180px", md: "300px" }} w="100%" h="auto" objectFit="cover" />
        <Button
  as={Link}
  href="https://drive.google.com/drive/folders/1h7xmJJYWdGN3nJGiBxHoefqUGAURgTJ4?usp=sharing"
  target="_blank"
  rel="noopener noreferrer"
  w="full"
  mt={4}
  py={6}
  fontSize={{ base: "md", md: "lg" }}
  fontWeight="bold"
  letterSpacing="wide"
  borderRadius="full"
  bgGradient="linear(to-r, teal.400, blue.500)"
  boxShadow="0 4px 20px rgba(56, 178, 172, 0.15)"
  color="white"
  _hover={{
    transform: "scale(1.04) translateY(-2px)",
    bgGradient: "linear(to-r, teal.500, blue.600)",
    boxShadow: "0 8px 24px rgba(66, 153, 225, 0.18)",
    opacity: 0.95,
  }}
  _active={{
    bgGradient: "linear(to-r, teal.600, blue.700)",
    boxShadow: "0 2px 8px rgba(56, 178, 172, 0.10)",
  }}
  transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
>
  View my CV
</Button>
      </Box>
    </Box>
      </Box>
  );
};

export default about;
