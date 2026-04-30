import { Box, Divider } from "@chakra-ui/react";
import React from "react";

import Navbar from "./components/Navbar";
import ScrollProgress from "./components/ScrollProgress";
import CustomCursor from "./components/CustomCursor";
import RevealWrapper from "./components/RevealWrapper";
import Home from "./home";
import About from "./about";
import Experience from "./experience";
import Projects from "./projects/projects";
import Contact from "./contact/contact";
import Footer from "./footer";

const app = () => {
  return (
    <Box overflowX="hidden" bg="#0c0d0f" minH="100vh">
      <ScrollProgress />
      <Navbar />
      <CustomCursor />
      <Box as="main" w="100%" pt="64px" id="home-container">
        <Box id="home" minH={{ base: "auto", md: "100vh" }} px={{ base: 0, md: 8 }} w="100%" display="flex" alignItems="center">
          <RevealWrapper w="100%">
            <Home />
          </RevealWrapper>
        </Box>

        <Box id="about" minH={{ base: "auto", md: "100vh" }} px={{ base: 4, md: 8 }} py={{ base: 16, md: 16 }}>
          <RevealWrapper>
            <About />
          </RevealWrapper>
        </Box>

        <Divider borderColor="border" />

        <Box id="experience" minH={{ base: "auto", md: "100vh" }} px={{ base: 4, md: 8 }} py={{ base: 16, md: 16 }}>
          <RevealWrapper>
            <Experience />
          </RevealWrapper>
        </Box>

        <Divider borderColor="border" />

        <Box id="projects" minH={{ base: "auto", md: "100vh" }} px={{ base: 4, md: 8 }} py={{ base: 16, md: 16 }}>
          <RevealWrapper>
            <Projects />
          </RevealWrapper>
        </Box>

        <Divider borderColor="border" />

        <Box id="contact" minH={{ base: "auto", md: "100vh" }} px={{ base: 4, md: 8 }} py={{ base: 16, md: 16 }}>
          <RevealWrapper>
            <Contact />
          </RevealWrapper>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default app;
