import { Box, Container } from "@chakra-ui/react";
import React, { useState } from "react";

import Home from "./home";
import About from "./about";
import Projects from "./projects/projects";
import Contact from "./contact/contact";
import Footer from "./footer";
import { itemDetail } from "./types";

const app = () => {
  const [items, setItems] = useState<Array<itemDetail>>([
    {
      text: "home",
      icon: "https://icongr.am/fontawesome/home.svg?size=40&color=FFFFFF",
      active: true,
    },
    {
      text: "about",
      icon: "https://icongr.am/fontawesome/user.svg?size=40&color=FFFFFF",
    },
    {
      text: "projects",
      icon: "https://icongr.am/fontawesome/folder-open.svg?size=40&color=FFFFFF",
    },
    {
      text: "contact",
      icon: "https://icongr.am/fontawesome/envelope.svg?size=40&color=FFFFFF",
    },
  ]);


  return (
    <Box overflowX="hidden">
      <Container minH="100vh" px={{ base: 2, md: 6, lg: 8 }} maxW={{ base: "100vw", md: "container.xl" }} w="100%">
        <Box id="home"
             display="flex"
             alignItems="center"
             position="relative"
             minH="100vh"
             px={{ base: 0, md: 8 }}
             w="100%"
        >
          <Home />
        </Box>
        <Box id="about"
             minH="100vh"
             px={{ base: 2, md: 8 }}
             py={{ base: 8, md: 16 }}>
          <About />
        </Box>
        <Box id="projects"
             minH="100vh"
             px={{ base: 2, md: 8 }}
             py={{ base: 8, md: 16 }}>
          <Projects />
        </Box>
        <Box id="contact"
             minH="100vh"
             px={{ base: 2, md: 8 }}
             py={{ base: 8, md: 16 }}>
          <Contact />
        </Box>
        <Footer />{" "}
      </Container>
    </Box>
  );
};

export default app;
