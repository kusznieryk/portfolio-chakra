import react  from "react";
import {Text} from "@chakra-ui/react";

export const Badge = ({text}:{text:string}) => (
  <Text backgroundColor={"rgba(97, 218, 251, 0.1)"} color={"--chakra-colors-brand-100"} border={" 1px solid rgba(97, 218, 251, 0.3)"} rounded={"20px"}
        p={"0.4rem 1rem"} fontSize={"0.9rem"} transition={"var(--chakra-ui-transition)"} > {text}</Text>
);
