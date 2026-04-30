import { Box, Flex, Grid, Heading, Text, Link } from "@chakra-ui/react";
import { HERO_DATA } from "./data/siteData";
import { SkillTag } from "./hero/badge";

const FEATURED_SKILLS = [".NET C#", "React", "Python", "Next.js"];
const OTHER_SKILLS = [
  "TypeScript",
  "Flask",
  "PostgreSQL",
  "SQL Server",
  "Docker",
  "Django",
  "Entity Framework",
  "TinyML",
];

const Home = () => {
  const { tag, name, title, description, stats } = HERO_DATA;
  const firstName = name.split(" ")[0];
  const lastName = name.split(" ").slice(1).join(" ");

  return (
    <Box
      as="section"
      w="100%"
      position="relative"
      overflow="hidden"
      pt={{ base: "6rem", md: "8rem" }}
      pb="4rem"
      px="5%"
    >
      {/* Grid background overlay */}
      <Box
        position="absolute"
        inset={0}
        pointerEvents="none"
        opacity={0.03}
        backgroundImage={`linear-gradient(var(--chakra-colors-text) 1px, transparent 1px), linear-gradient(90deg, var(--chakra-colors-text) 1px, transparent 1px)`}
        backgroundSize="60px 60px"
      />

      {/* Amber orb glow */}
      <Box
        position="absolute"
        w="400px"
        h="400px"
        borderRadius="50%"
        bg="radial-gradient(circle, rgba(239,159,39,0.06) 0%, transparent 70%)"
        top="20%"
        right="-10%"
        pointerEvents="none"
      />

      <Grid
        templateColumns={{ base: "1fr", lg: "1fr 1fr" }}
        gap={{ base: "2.5rem", lg: "4rem" }}
        maxW="1200px"
        mx="auto"
        w="100%"
        alignItems="center"
      >
        {/* Left column */}
        <Box>
          <Flex align="center" gap="0.75rem" mb="1.5rem">
            <Box w="32px" h="1px" bg="amber" />
            <Text
              fontSize="0.72rem"
              letterSpacing="0.16em"
              textTransform="uppercase"
              color="amber"
            >
              {tag}
            </Text>
          </Flex>

          <Heading
            as="h1"
            fontFamily="heading"
            fontSize={{ base: "2.8rem", md: "clamp(2.8rem, 5vw, 4.5rem)" }}
            fontWeight={800}
            lineHeight={1.02}
            letterSpacing="-0.03em"
            color="text"
            mb="1.25rem"
          >
            {firstName}
            <br />
            <Text
              as="em"
              fontStyle="italic"
              fontFamily="body"
              color="amber"
              fontWeight={400}
            >
              {lastName}
            </Text>
          </Heading>

          <Text
            fontSize="0.82rem"
            letterSpacing="0.1em"
            textTransform="uppercase"
            color="textMuted"
            mb="1.75rem"
          >
            {title}
          </Text>

          <Text
            fontFamily="body"
            fontSize="1.05rem"
            lineHeight={1.8}
            color="#b8b5ae"
            maxW="500px"
            mb="2.5rem"
          >
            {description}
          </Text>

          <Flex gap="1rem" flexWrap="wrap">
            <Link
              href="#projects"
              display="inline-block"
              py="0.75rem"
              px="2rem"
              bg="amber"
              color="bg"
              fontSize="0.82rem"
              fontWeight={600}
              letterSpacing="0.06em"
              fontFamily="mono"
              textDecoration="none"
              transition="opacity 0.2s, transform 0.15s"
              _hover={{ opacity: 0.88, transform: "translateY(-1px)" }}
            >
              See my work
            </Link>
            <Link
              href="#contact"
              display="inline-block"
              py="0.75rem"
              px="2rem"
              border="1px solid"
              borderColor="rgba(255,255,255,0.14)"
              color="textMuted"
              fontSize="0.82rem"
              letterSpacing="0.06em"
              fontFamily="mono"
              textDecoration="none"
              transition="border-color 0.2s, color 0.2s"
              _hover={{ borderColor: "amber", color: "amber" }}
            >
              Get in touch
            </Link>
          </Flex>
        </Box>

        {/* Right column — tech card */}
        <Box position="relative">
          <Box
            bg="surface"
            border="1px solid"
            borderColor="border"
            p="2rem"
            position="relative"
          >
            {/* Amber top accent line */}
            <Box
              position="absolute"
              top="-1px"
              left="2rem"
              right="2rem"
              h="2px"
              bg="amber"
            />

            <Text
              fontSize="0.68rem"
              letterSpacing="0.14em"
              textTransform="uppercase"
              color="textDim"
              mb="1.5rem"
            >
              // tech stack
            </Text>

            <Flex flexWrap="wrap" gap="0.5rem" mb="1.5rem">
              {FEATURED_SKILLS.map((skill) => (
                <SkillTag key={skill} text={skill} featured />
              ))}
              {OTHER_SKILLS.map((skill) => (
                <SkillTag key={skill} text={skill} />
              ))}
            </Flex>

            <Grid
              templateColumns={{ base: "1fr", sm: "repeat(3, 1fr)" }}
              gap="1px"
              bg="border"
              borderTop="1px solid"
              borderColor="border"
              mt="1.5rem"
            >
              {stats.map((stat) => (
                <Box key={stat.label} bg="surface" py="1rem" px="0.75rem" textAlign="center">
                  <Text
                    fontFamily="heading"
                    fontSize="1.5rem"
                    fontWeight={700}
                    color="amber"
                    display="block"
                  >
                    {stat.value}
                  </Text>
                  <Text
                    fontSize="0.65rem"
                    letterSpacing="0.1em"
                    textTransform="uppercase"
                    color="textDim"
                    mt="0.15rem"
                  >
                    {stat.label}
                  </Text>
                </Box>
              ))}
            </Grid>
          </Box>
        </Box>
      </Grid>
    </Box>
  );
};

export default Home;
