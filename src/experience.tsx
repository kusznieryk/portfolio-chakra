import React, { useState, useEffect } from "react";
import {
  Box,
  Grid,
  GridItem,
  Text,
  Heading,
  HStack,
  VStack,
  Tag,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import { Experience } from "./types";

const EXPERIENCE_URL =
  "https://gist.githubusercontent.com/kusznieryk/8431bc477054c05294e9114446a5452d/raw/2a465ae226a1b53814a70d30d08b6f3c7f4bc3b0/experience.json";

const ExperienceSection = () => {
  const [experienceData, setExperienceData] = useState<Experience[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(EXPERIENCE_URL)
      .then((res) => res.json())
      .then((data: Experience[]) => {
        setExperienceData(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

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
          Experience
        </Text>
      </HStack>

      <Heading
        fontFamily="heading"
        fontSize={{ base: "3xl", md: "5xl" }}
        fontWeight="bold"
        color="text"
        mb={{ base: 8, md: 12 }}
      >
        Where I've shipped.
      </Heading>

      {loading && (
        <Box textAlign="center" py={8}>
          <Spinner color="amber" size="lg" />
        </Box>
      )}

      <VStack align="stretch" spacing={{ base: 10, md: 14 }}>
        {experienceData.map((entry) => (
          <Grid
            key={entry.id}
            templateColumns={{ base: "1fr", lg: "200px 1fr" }}
            gap={{ base: 2, lg: 8 }}
            alignItems="start"
          >
            <GridItem>
              <Text
                fontFamily="heading"
                fontSize="sm"
                fontWeight="semibold"
                color="amber"
                letterSpacing="wide"
              >
                {entry.date}
              </Text>
            </GridItem>

            <GridItem>
              <VStack align="start" spacing={3}>
                <Box>
                  <Text
                    fontFamily="body"
                    fontSize="sm"
                    color="textMuted"
                    mb={1}
                  >
                    {entry.company}
                  </Text>
                  <Heading
                    fontFamily="heading"
                    fontSize={{ base: "xl", md: "2xl" }}
                    fontWeight="bold"
                    color="text"
                  >
                    {entry.title}
                  </Heading>
                </Box>

                <Text
                  fontFamily="body"
                  fontSize={{ base: "md", md: "lg" }}
                  color="text"
                  lineHeight="tall"
                >
                  {entry.description}
                </Text>

                {entry.bullets && entry.bullets.length > 0 && (
                  <List spacing={2} w="full">
                    {entry.bullets.map((bullet, i) => (
                      <ListItem
                        key={i}
                        display="flex"
                        alignItems="start"
                        gap={2}
                      >
                        <Text
                          as="span"
                          color="amber"
                          fontFamily="heading"
                          fontWeight="bold"
                          flexShrink={0}
                          mt="2px"
                        >
                          →
                        </Text>
                        <Text
                          fontFamily="body"
                          fontSize={{ base: "sm", md: "md" }}
                          color="text"
                          lineHeight="tall"
                        >
                          {bullet}
                        </Text>
                      </ListItem>
                    ))}
                  </List>
                )}

                {entry.tags && entry.tags.length > 0 && (
                  <HStack spacing={2} flexWrap="wrap" mt={1}>
                    {entry.tags.map((tag) => (
                      <Tag
                        key={tag}
                        size="sm"
                        variant="outline"
                        borderColor="border"
                        color="textMuted"
                        fontFamily="mono"
                        fontSize="xs"
                        borderRadius="md"
                        px={2}
                        py={1}
                      >
                        {tag}
                      </Tag>
                    ))}
                  </HStack>
                )}
              </VStack>
            </GridItem>
          </Grid>
        ))}
      </VStack>
    </Box>
  );
};

export default ExperienceSection;