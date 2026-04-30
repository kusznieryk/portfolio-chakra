import {
  Box,
  Grid,
  GridItem,
  Heading,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

import { project } from "../types";
import Project from "./project";

const Projects = () => {
  const [projects, setProjects] = useState<Array<project>>([]);
  const projectsURL =
    "https://gist.githubusercontent.com/kusznieryk/ab892e5b8448402cc79ef0a0ea54d6e8/raw/";

  useEffect(() => {
    fetch(projectsURL)
      .then((r) => r.json())
      .then((r) => setProjects(r));
  }, []);

  const featured = projects.filter((p) => p.featured);
  const regular = projects.filter((p) => !p.featured);

  return (
    <Box as="section" py={{ base: 12, md: 20 }}>
      {/* Section label with amber prefix line */}
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
          Projects
        </Text>
      </HStack>

      {/* Section title */}
      <Heading
        fontFamily="heading"
        fontSize={{ base: "3xl", md: "5xl" }}
        fontWeight="bold"
        color="text"
        mb={{ base: 8, md: 12 }}
      >
        Things I've built.
      </Heading>

      {/* Featured projects — full-width cards */}
      {featured.length > 0 && (
        <VStack align="stretch" spacing={{ base: 8, md: 12 }} mb={{ base: 8, md: 12 }}>
          {featured.map((p, i) => (
            <Project key={i} details={p} />
          ))}
        </VStack>
      )}

      {/* Regular projects — grid of cards */}
      {regular.length > 0 && (
        <Grid
          templateColumns={{ base: "1fr", sm: "repeat(2, 1fr)" }}
          gap={{ base: 6, md: 8 }}
        >
          {regular.map((p, i) => (
            <GridItem key={i}>
              <Project details={p} />
            </GridItem>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default Projects;