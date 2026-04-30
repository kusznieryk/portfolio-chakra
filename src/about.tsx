import React from "react";
import {
  Box,
  Grid,
  GridItem,
  Text,
  Heading,
  VStack,
  HStack,
} from "@chakra-ui/react";
import { ABOUT_DATA } from "./data/siteData";

const About = () => {
  return (
    <Box as="section" py={{ base: 12, md: 20 }}>
      <HStack spacing={3} mb={2}>
        <Box w="32px" h="3px" bg="amber" borderRadius="full" />
        <Text
          fontFamily="heading"
          fontSize="sm"
          fontWeight="semibold"
          letterSpacing="wider"
          textTransform="uppercase"
          color="amber"
        >
          About me
        </Text>
      </HStack>

      <Heading
        fontFamily="heading"
        fontSize={{ base: "3xl", md: "5xl" }}
        fontWeight="bold"
        color="text"
        mb={{ base: 8, md: 12 }}
      >
        Engineer. Teacher. Builder.
      </Heading>

      <Grid
        templateColumns={{ base: "1fr", lg: "1fr 1.4fr" }}
        gap={{ base: 8, lg: 12 }}
        alignItems="start"
      >
        <GridItem>
          <Box
            position="relative"
            w="100%"
            h="100%"
            minH={{ base: "250px", md: "350px" }}
            bg="surface"
            border="1px solid"
            borderColor="border"
            borderRadius="lg"
            display="flex"
            alignItems="center"
            justifyContent="center"
            _after={{
              content: '""',
              position: "absolute",
              bottom: "-12px",
              right: "-12px",
              width: "100%",
              height: "100%",
              border: "1px solid",
              borderColor: "amber",
              borderRadius: "lg",
              zIndex: -1,
              opacity: 0.25,
            }}
          >
            <VStack spacing={3} zIndex={1} textAlign="center">
              <Text
                fontFamily="heading"
                fontSize={{ base: "5rem", md: "7.5rem" }}
                fontWeight={800}
                color="text"
                lineHeight={1}
                letterSpacing="-.05em"
              >
                ek<Text as="span" color="amber">.</Text>
              </Text>
              <Text
                fontSize=".65rem"
                letterSpacing=".22em"
                textTransform="uppercase"
                color="textDim"
              >
                Eduardo Kusznieryk
              </Text>
            </VStack>
            <Text
              position="absolute"
              bottom="14px"
              right="16px"
              fontSize=".6rem"
              letterSpacing=".12em"
              color="textDim"
              zIndex={1}
            >
              ekusz.com
            </Text>
          </Box>
        </GridItem>

        <GridItem>
          <VStack align="start" spacing={5} mb={8}>
            {ABOUT_DATA.paragraphs.map((paragraph, i) => (
              <Text
                key={i}
                fontFamily="body"
                fontSize={{ base: "md", md: "lg" }}
                color="text"
                lineHeight="tall"
              >
                {paragraph}
              </Text>
            ))}
          </VStack>

          <Grid
            templateColumns={{ base: "1fr", sm: "1fr 1fr" }}
            gap={4}
            mt={6}
          >
            {ABOUT_DATA.facts.map((fact) => (
              <GridItem key={fact.label}>
                <Box
                  bg="surface"
                  border="1px solid"
                  borderColor="border"
                  borderRadius="md"
                  p={4}
                >
                  <Text
                    fontFamily="heading"
                    fontSize="xs"
                    fontWeight="semibold"
                    textTransform="uppercase"
                    letterSpacing="wider"
                    color="amber"
                    mb={1}
                  >
                    {fact.label}
                  </Text>
                  <Text
                    fontFamily="body"
                    fontSize="sm"
                    color="text"
                  >
                    {fact.value}
                  </Text>
                </Box>
              </GridItem>
            ))}
          </Grid>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default About;