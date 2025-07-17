import {
  Tabs,
  TabList,
  TabPanel,
  TabPanels,
  Tab,
  Fade, Heading,
    Box
} from "@chakra-ui/react";
import Underline from "../underline";
import React, { ReactElement, useEffect, useState } from "react";

import { project } from "../types";
import Project from "./project";
import Button from "./button";

const projects = () => {
  const [projects, setProjects] = useState<Array<project>>([]);
  const [index, setIndex] = useState<number>(0);
  const [elements, setElements] = useState<Array<ReactElement>>([]);
  const [list, setList] = useState<Array<ReactElement>>([]);
  const projectsURL =
    "https://gist.githubusercontent.com/kusznieryk/ab892e5b8448402cc79ef0a0ea54d6e8/raw/";

  useEffect(() => {
    fetch(projectsURL)
      .then((r) => r.json())
      .then((r) => setProjects(r));
  }, []);

  useEffect(() => {
    setList(
      projects.map((el, i) => (
        <Tab key={i} onClick={changeIndex}>
          {i + 1}
        </Tab>
      ))
    );
  }, [projects]);

  useEffect(() => {
    setElements(
      projects.map((el, i) => (

            <Project details={el} key={i}/>
      ))
    );
  }, [projects]);

  const changeIndex = ({ target }: React.FormEvent<EventTarget>) => {
    const tar = target as unknown as HTMLElement;
    setIndex(Number(tar.dataset.index));
  };
  const addIndex = () => {
    if (index == elements.length - 1) setIndex(0);
    else setIndex(index + 1);
  };
  const subIndex = () => {
    if (index == 0) setIndex(elements.length - 1);
    else setIndex(index - 1);
  };
  return (
      <Box color={"var(--chakra-colors-brand-300)"} display={"flex"} flexDirection={"column"}>
        <Heading pl={{ base: 4, md: "200px" }} pt={{ base: 4, md: "20px" }} fontSize={{ base: "2xl", md: "4xl" }}>
          My Projects
          <Underline />
        </Heading>
        <Box display={"grid"} gridTemplateColumns={{ base: "1fr", md: "repeat(auto-fill, minmax(320px,1fr))" }} gap={{ base: 4, md: "2rem" }} mt={{ base: 4, md: "3rem" }} alignItems={"center"} justifyContent={"space-between"} px={{ base: 2, md: 8 }}>
          {elements}
        </Box>
      </Box>
  );
};

export default projects;
