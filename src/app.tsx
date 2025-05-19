import { Box, Container } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

import { useInView } from "react-intersection-observer";
import NavBar from "./navbar/navbar";
import Home from "./home";
import About from "./about";
import Flex from "./flex";
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
  const [list, setList] = useState<Array<boolean>>([]);
  const [refH, homeInView] = useInView({
    threshold: 0.5,
    initialInView: true,
  });
  const [refA, aboutInView] = useInView({ threshold: 0.5 });
  const [refP, projectsInView] = useInView({ threshold: 0.5 });
  const [refC, contactInView] = useInView({ threshold: 0.5 });

  useEffect(() => {
    setList([homeInView, aboutInView, projectsInView, contactInView]);
  }, [homeInView, projectsInView, aboutInView, contactInView]);

  useEffect(() => {
    setItems(items.map((e, i) => ({ ...e, active: list[i] })));
  }, [list]);
  return (
    <Box>
      <Container   minH="100vh" ml={"80px"} p={"0 2rem"} maxW={"90vw"} >
        <Box id="home"  ref={refH}
             display="flex"
             alignItems="center"
             position="relative"
             minH="100vh"
             padding={"0 2rem"}>
          <Home />
        </Box>
        <Box id="about"
             minH="100vh"
             padding={"4rem 2rem"}>
          <About />
        </Box>
        <Flex id="projects" reff={refP}>
          <Projects />
        </Flex>
        <Flex id="contact" reff={refC}>
          <Contact />
        </Flex>
        <Footer />{" "}
      </Container>
    </Box>
  );
};

export default app;
