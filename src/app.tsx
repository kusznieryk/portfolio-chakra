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
    <Box minH="100vh">
      <NavBar itemsDetails={items} />
      <Container p={{ base: "5vh 4vw", lg: "0 4vw" }} maxW="container.lg">
        <Flex id="home" reff={refH}>
          <Home />
        </Flex>
        <Flex id="about" reff={refA}>
          <About />
        </Flex>
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
