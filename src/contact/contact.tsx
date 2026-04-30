import {
  Box,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Heading,
  HStack,
  Icon,
  Input,
  Link,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { Mail, Github, Linkedin, Phone } from "lucide-react";
import { CONTACT_LINKS } from "../data/siteData";

// Map icon string from CONTACT_LINKS to lucide-react components
const iconMap: Record<string, React.ElementType> = {
  email: Mail,
  github: Github,
  linkedin: Linkedin,
  phone: Phone,
};

const Contact = () => {
  return (
    <Box as="section" id="contact-section" py={{ base: 12, md: 20 }}>
      <Container maxW="container.xl">
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
            Contact
          </Text>
        </HStack>

        <Heading
          fontFamily="heading"
          fontSize={{ base: "3xl", md: "5xl" }}
          fontWeight="bold"
          color="text"
          mb={{ base: 4, md: 6 }}
        >
          Let&apos;s build something{" "}
          <Text as="span" fontStyle="italic" color="amber">
            great
          </Text>
          .
        </Heading>

        <Text
          fontFamily="body"
          fontSize={{ base: "md", md: "lg" }}
          color="textMuted"
          mb={{ base: 8, md: 12 }}
          maxW="480px"
        >
          Have a project in mind or just want to connect? Reach out through any
          of the channels below or drop me a message directly.
        </Text>

        <Grid
          templateColumns={{ base: "1fr", lg: "1fr 1.4fr" }}
          gap={{ base: 8, lg: 12 }}
        >
          <GridItem>
            <VStack spacing={4} align="stretch">
              {CONTACT_LINKS.map((link) => {
                const IconComponent = iconMap[link.icon];
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    isExternal={link.href.startsWith("http")}
                    _hover={{ textDecoration: "none" }}
                  >
                    <Flex
                      align="center"
                      p={4}
                      bg="surface"
                      border="1px solid"
                      borderColor="border"
                      borderRadius="md"
                      transition="border-color 0.2s, transform 0.2s"
                      _hover={{
                        borderColor: "amber",
                        transform: "translateX(4px)",
                      }}
                    >
                      <Box
                        color="amber"
                        mr={4}
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        w="40px"
                        h="40px"
                        border="1px solid"
                        borderColor="border"
                        borderRadius="md"
                        transition="border-color 0.2s"
                      >
                        {IconComponent && <Icon as={IconComponent} boxSize={5} />}
                      </Box>
                      <Box>
                        <Text
                          fontFamily="heading"
                          fontSize="sm"
                          fontWeight="semibold"
                          color="text"
                        >
                          {link.label}
                        </Text>
                        <Text fontFamily="body" fontSize="sm" color="textMuted">
                          {link.href.startsWith("mailto:")
                            ? link.href.replace("mailto:", "")
                            : link.href.startsWith("tel:")
                              ? link.href.replace("tel:", "")
                              : link.href.replace(/^https?:\/\/(www\.)?/, "")}
                        </Text>
                      </Box>
                    </Flex>
                  </Link>
                );
              })}
            </VStack>
          </GridItem>

          <GridItem>
            <Box
              as="form"
              action="https://getform.io/f/93e97d25-680a-4a31-b3d3-35f472dd10b0"
              method="POST"
              bg="surface"
              border="1px solid"
              borderColor="border"
              borderRadius="lg"
              p={{ base: 6, md: 8 }}
            >
              <VStack spacing={5}>
                <FormControl isRequired>
                  <FormLabel
                    htmlFor="name"
                    fontFamily="heading"
                    fontSize="sm"
                    fontWeight="semibold"
                    color="text"
                  >
                    Name
                  </FormLabel>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your name"
                    bg="bg2"
                    border="1px solid"
                    borderColor="border"
                    color="text"
                    _placeholder={{ color: "textDim" }}
                    _focus={{ borderColor: "amber", boxShadow: "0 0 0 1px var(--chakra-colors-amber)" }}
                    borderRadius="md"
                  />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel
                    htmlFor="email"
                    fontFamily="heading"
                    fontSize="sm"
                    fontWeight="semibold"
                    color="text"
                  >
                    Email
                  </FormLabel>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    bg="bg2"
                    border="1px solid"
                    borderColor="border"
                    color="text"
                    _placeholder={{ color: "textDim" }}
                    _focus={{ borderColor: "amber", boxShadow: "0 0 0 1px var(--chakra-colors-amber)" }}
                    borderRadius="md"
                  />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel
                    htmlFor="message"
                    fontFamily="heading"
                    fontSize="sm"
                    fontWeight="semibold"
                    color="text"
                  >
                    Message
                  </FormLabel>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project..."
                    bg="bg2"
                    border="1px solid"
                    borderColor="border"
                    color="text"
                    _placeholder={{ color: "textDim" }}
                    _focus={{ borderColor: "amber", boxShadow: "0 0 0 1px var(--chakra-colors-amber)" }}
                    borderRadius="md"
                    minH="120px"
                    resize="vertical"
                  />
                </FormControl>

                <Box
                  as="button"
                  type="submit"
                  w="full"
                  py={3}
                  px={6}
                  bg="amber"
                  color="bg"
                  fontFamily="heading"
                  fontWeight="semibold"
                  fontSize="sm"
                  letterSpacing="wider"
                  borderRadius="md"
                  border="1px solid"
                  borderColor="amber"
                  transition="all 0.2s"
                  _hover={{
                    bg: "transparent",
                    color: "amber",
                  }}
                >
                  Send message →
                </Box>
              </VStack>
            </Box>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;