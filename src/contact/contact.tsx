import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
} from "@chakra-ui/react";
import React from "react";

import Media from "./social-media";
const contact = () => {
  return (
    <Box
      display="flex"
      flexDirection={{ base: "column", lg: "row" }}
      w="80vw"
      alignItems="center"
      justifyContent="space-around"
    >
      <form
        style={{ flex: "1" }}
        action="https://getform.io/f/93e97d25-680a-4a31-b3d3-35f472dd10b0"
        method="POST"
      >
        <FormControl>
          <FormLabel htmlFor="name"> Full Name</FormLabel>
          <Input id="name" name="name" placeholder="Your name" isRequired />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="email"> Email</FormLabel>
          <Input
            id="email"
            name="email"
            placeholder="your@email"
            type="email"
            isRequired
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="subject"> Reason of contact</FormLabel>
          <Textarea
            isRequired
            id="subject"
            name="subject"
            placeholder="I would like to talk to you about..."
          />
        </FormControl>
        <Button
          mt="4"
          type="submit"
          p="4"
          w="100%"
          variant="outline"
          color="200"
          _hover={{ bgColor: "brand.500" }}
        >
          {" "}
          Submit
        </Button>
      </form>
      <Media />
    </Box>
  );
};

export default contact;
