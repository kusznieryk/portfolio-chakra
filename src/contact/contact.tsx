import {
  Box,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  Heading,
  Icon,
  Input,
  Text,
  Textarea,
  Button,
  VStack,
  HStack,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";
import { useState } from "react";
import { Mail, Phone, MapPin} from "lucide-react";

// Underline component for the heading
const Underline = () => (
    <Box
        height="4px"
        width="80px"
        bgGradient="linear(to-r, teal.400, blue.500)"
        borderRadius="full"
        mt={2}
        mb={8}
    />
);

// ContactItem component for each contact info item
const ContactItem = ({ icon, title, content }: { icon: React.ElementType, title: string, content: string }) => {
  const bgCard = "var(--chakra-colors-bg-card)";
  const bgHover = "rgba(97, 218, 251, 0.1)";

  return (
      <Flex
          alignItems="center"
          p={4}
          bg={bgCard}
          borderRadius="md"
          transition="all 0.3s ease"
          _hover={{
            transform: "translateX(10px)",
            bg: bgHover
          }}
      >
        <Box color="teal.400" mr={4}>
          <Icon as={icon} boxSize={6} />
        </Box>
        <Box>
          <Text fontWeight="medium" fontSize="lg">{title}</Text>
          <Text color={useColorModeValue("gray.600", "gray.300")}>{content}</Text>
        </Box>
      </Flex>
  );
};

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const bgCard = "var(--chakra-colors-bg-card)";
  const inputBg = "var(--chakra-colors-bg-input)";
  const borderColor = useColorModeValue("gray.200", "gray.600");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

  };

  return (
      <Box
          as="section"
          id="contact"
          py={{ base: 10, md: 20 }}
          px={{ base: 2, md: 4 }}
          minH="100vh"
          display="flex"
          flexDirection="column"
          justifyContent="center"
      >
        <Container maxW={{ base: "container.sm", lg: "container.xl" }}>

            <Heading as="h2" size="xl" fontSize={{ base: "2xl", md: "4xl" }}>
              Get In Touch
              <Underline />
            </Heading>

          <Grid
              templateColumns={{ base: "1fr", lg: "1fr 1fr" }}
              gap={{ base: 4, lg: 16 }}
          >
            {/* Contact Information */}
            <VStack spacing={6} align="stretch">
              <ContactItem
                  icon={Mail}
                  title="Email"
                  content="contact@ekusz.com"
              />
              <ContactItem
                  icon={Phone}
                  title="Phone"
                  content="+54 9 2214 88-4401"
              />
              <ContactItem
                  icon={MapPin}
                  title="Location"
                  content="Buenos Aires, Argentina"
              />
              <Link href="https://github.com/kusznieryk">
              <ContactItem
                  icon={Github}
                  title="GitHub"
                  content="github.com/kusznieryk"
              />
              </Link>
              <Link href="https://www.linkedin.com/in/kusznieryk/">
              <ContactItem
                  icon={Linkedin}
                  title="LinkedIn"
                  content="linkedin.com/in/kusznieryk"
              />
              </Link>
            </VStack>

            {/* Contact Form */}
            <Box
                as="form"
                action="https://getform.io/f/93e97d25-680a-4a31-b3d3-35f472dd10b0"
                method="POST"
                bg={bgCard}
                p={{ base: 4, md: 8 }}
                borderRadius="xl"
                boxShadow="lg"
            >
              <VStack spacing={4}>
                <FormControl isRequired>
                  <FormLabel htmlFor="name" fontSize={{ base: "sm", md: "md" }}>Full Name</FormLabel>
                  <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      bg={inputBg}
                      borderColor={borderColor}
                      _focus={{ borderColor: "teal.400" }}
                      fontSize={{ base: "sm", md: "md" }}
                  />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel htmlFor="email" fontSize={{ base: "sm", md: "md" }}>Email</FormLabel>
                  <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Your email"
                      bg={inputBg}
                      borderColor={borderColor}
                      _focus={{ borderColor: "teal.400" }}
                      fontSize={{ base: "sm", md: "md" }}
                  />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel htmlFor="subject" fontSize={{ base: "sm", md: "md" }}>Reason of contact</FormLabel>
                  <Textarea
                      id="subject"
                      name="subject"
                      placeholder="I would like to talk to you about..."
                      bg={inputBg}
                      borderColor={borderColor}
                      _focus={{ borderColor: "teal.400" }}
                      minH="100px"
                      fontSize={{ base: "sm", md: "md" }}
                  />
                </FormControl>

                <Button
                    type="submit"
                    w="full"
                    mt={4}
                    py={{ base: 4, md: 6 }}
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
                  Send Message
                </Button>
              </VStack>
            </Box>
          </Grid>
        </Container>
      </Box>
  );
};

export default ContactForm;