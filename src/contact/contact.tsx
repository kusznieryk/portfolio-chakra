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
} from "@chakra-ui/react";
import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

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
const ContactItem = ({ icon, title, content }) => {
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

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

  };

  return (
      <Box
          as="section"
          id="contact"
          py={20}
          px={4}
          minH="100vh"
          display="flex"
          flexDirection="column"
          justifyContent="center"
      >
        <Container maxW="container.xl">

            <Heading as="h2" size="xl">
              Get In Touch
              <Underline />
            </Heading>

          <Grid
              templateColumns={{ base: "1fr", lg: "1fr 1fr" }}
              gap={{ base: 8, lg: 16 }}
          >
            {/* Contact Information */}
            <VStack spacing={6} align="stretch">
              <ContactItem
                  icon={Mail}
                  title="Email"
                  content="eduardo@example.com"
              />
              <ContactItem
                  icon={Phone}
                  title="Phone"
                  content="+1 (123) 456-7890"
              />
              <ContactItem
                  icon={MapPin}
                  title="Location"
                  content="Buenos Aires, Argentina"
              />
            </VStack>

            {/* Contact Form */}
            <Box
                as="form"
                onSubmit={handleSubmit}
                bg={bgCard}
                p={8}
                borderRadius="xl"
                boxShadow="lg"
            >
              <VStack spacing={4}>
                <FormControl isRequired>
                  <FormLabel htmlFor="name">Full Name</FormLabel>
                  <Input
                      id="name"
                      placeholder="Your name"
                      bg={inputBg}
                      borderColor={borderColor}
                      _focus={{ borderColor: "teal.400" }}
                      value={formData.name}
                      onChange={handleChange}
                  />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel htmlFor="email">Email</FormLabel>
                  <Input
                      id="email"
                      type="email"
                      placeholder="Your email"
                      bg={inputBg}
                      borderColor={borderColor}
                      _focus={{ borderColor: "teal.400" }}
                      value={formData.email}
                      onChange={handleChange}
                  />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel htmlFor="message">Message</FormLabel>
                  <Textarea
                      id="message"
                      placeholder="I would like to talk to you about..."
                      bg={inputBg}
                      borderColor={borderColor}
                      _focus={{ borderColor: "teal.400" }}
                      minH="150px"
                      value={formData.message}
                      onChange={handleChange}
                  />
                </FormControl>

                <Button
                    type="submit"
                    w="full"
                    mt={4}
                    bgGradient="linear(to-r, teal.400, blue.500)"
                    color="white"
                    _hover={{
                      transform: "translateY(-3px)",
                      boxShadow: "0 5px 15px rgba(66, 153, 225, 0.4)",
                    }}
                    _active={{
                      bgGradient: "linear(to-r, teal.500, blue.600)",
                    }}
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