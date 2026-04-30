import React from "react";
import {
  Box,
  Grid,
  GridItem,
  Heading,
  Text,
  Link,
  Image,
  HStack,
  VStack,
  Tag,
} from "@chakra-ui/react";
import { project } from "../types";
import { SkillTag } from "../hero/badge";

interface ProjectCardProps {
  details: project;
}

const FeaturedProject: React.FC<ProjectCardProps> = ({ details }) => {
  const stack = details.stack ?? [];
  const longDescription = details.longDescription ?? details.description;

  return (
    <Box
      bg="surface"
      border="1px solid"
      borderColor="border"
      borderRadius="lg"
      overflow="hidden"
      transition="border-color 0.3s"
      _hover={{ borderColor: "amber" }}
    >
      <Grid
        templateColumns={{ base: "1fr", lg: "1fr 1.4fr" }}
        gap={0}
      >
        <GridItem>
          <Box
            height={{ base: "220px", md: "100%" }}
            minHeight={{ md: "320px" }}
            overflow="hidden"
          >
            <Image
              src={details.img}
              alt={`${details.name} Project Screenshot`}
              width="100%"
              height="100%"
              objectFit="cover"
            />
          </Box>
        </GridItem>

        <GridItem>
          <VStack align="start" spacing={5} p={{ base: 6, md: 8 }}>
            {details.badge && (
              <Text
                fontFamily="heading"
                fontSize="xs"
                fontWeight="semibold"
                letterSpacing="wider"
                textTransform="uppercase"
                color="amber"
                bg="rgba(239,159,39,0.12)"
                px={3}
                py={1}
                borderRadius="md"
              >
                {details.badge}
              </Text>
            )}

            <Heading
              fontFamily="heading"
              fontSize={{ base: "xl", md: "2xl" }}
              fontWeight="bold"
              color="text"
            >
              {details.name}
            </Heading>

            <Text
              fontFamily="body"
              fontSize={{ base: "md", md: "lg" }}
              color="text"
              lineHeight="tall"
            >
              {longDescription}
            </Text>

            {stack.length > 0 && (
              <HStack spacing={2} flexWrap="wrap">
                {stack.map((tech) => (
                  <SkillTag key={tech} text={tech} featured />
                ))}
              </HStack>
            )}

            <HStack spacing={4} pt={2}>
              {details.live && details.live !== "/" && (
                <Link
                  href={details.live}
                  fontFamily="heading"
                  fontSize="sm"
                  fontWeight="semibold"
                  color="amber"
                  _hover={{ textDecoration: "underline" }}
                  target="_blank"
                >
                  Live Demo →
                </Link>
              )}
              {details.code && details.code !== "/" && (
                <Link
                  href={details.code}
                  fontFamily="heading"
                  fontSize="sm"
                  fontWeight="semibold"
                  color="textMuted"
                  _hover={{ color: "text" }}
                  target="_blank"
                >
                  Source Code
                </Link>
              )}
            </HStack>
          </VStack>
        </GridItem>
      </Grid>
    </Box>
  );
};

const RegularProject: React.FC<ProjectCardProps> = ({ details }) => {
  const stack = details.stack ?? [];

  return (
    <Box
      bg="surface"
      border="1px solid"
      borderColor="border"
      borderRadius="lg"
      overflow="hidden"
      transition="border-color 0.3s, transform 0.3s"
      _hover={{ borderColor: "amber", transform: "translateY(-4px)" }}
    >
      <Box height={{ base: "160px", md: "200px" }} overflow="hidden">
        <Image
          src={details.img}
          alt={`${details.name} Project Screenshot`}
          width="100%"
          height="100%"
          objectFit="cover"
          transition="transform 0.3s"
          _hover={{ transform: "scale(1.05)" }}
        />
      </Box>

      <VStack align="start" spacing={4} p={{ base: 4, md: 6 }}>
        <Heading
          fontFamily="heading"
          fontSize={{ base: "lg", md: "xl" }}
          fontWeight="bold"
          color="text"
        >
          {details.name}
        </Heading>

        <Text
          fontFamily="body"
          fontSize={{ base: "sm", md: "md" }}
          color="textMuted"
          lineHeight="tall"
          noOfLines={3}
        >
          {details.description}
        </Text>

        {stack.length > 0 && (
          <HStack spacing={2} flexWrap="wrap">
            {stack.map((tech) => (
              <Tag
                key={tech}
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
                {tech}
              </Tag>
            ))}
          </HStack>
        )}

        <HStack spacing={4}>
          {details.live && details.live !== "/" && (
            <Link
              href={details.live}
              fontFamily="heading"
              fontSize="sm"
              fontWeight="semibold"
              color="amber"
              _hover={{ textDecoration: "underline" }}
              target="_blank"
            >
              Live Demo →
            </Link>
          )}
          {details.code && details.code !== "/" && (
            <Link
              href={details.code}
              fontFamily="heading"
              fontSize="sm"
              fontWeight="semibold"
              color="textMuted"
              _hover={{ color: "text" }}
              target="_blank"
            >
              Source Code
            </Link>
          )}
        </HStack>
      </VStack>
    </Box>
  );
};

const ProjectCard: React.FC<ProjectCardProps> = ({ details }) => {
  if (details.featured) {
    return <FeaturedProject details={details} />;
  }
  return <RegularProject details={details} />;
};

export default ProjectCard;