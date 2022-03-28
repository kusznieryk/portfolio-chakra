import {
  Tabs,
  TabList,
  TabPanel,
  TabPanels,
  Tab,
  Fade,
} from "@chakra-ui/react";
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
        <TabPanel key={i}>
          <Fade in={true} unmountOnExit={true}>
            <Project details={el} />
          </Fade>
        </TabPanel>
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
    <Tabs
      isLazy
      isFitted
      index={index}
      paddingBottom="20vh"
      position="relative"
    >
      <Button right="initial" onclick={subIndex} text={"<"} />
      <TabPanels>{elements}</TabPanels>
      <Button right="0" onclick={addIndex} text={">"} />
      <TabList>{list}</TabList>
    </Tabs>
  );
};

export default projects;
