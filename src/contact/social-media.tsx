import React from "react";
import { Link, Image, Center, Stack, Text } from "@chakra-ui/react";

const media = () => (
  <Stack
    flexDirection={{ base: "row", lg: "column" }}
    flex="1"
    alignItems="center"
    justifyContent="center"
  >
    <Center as={Link} href="https://twitter.com/kusznieryk_" isExternal>
      <Image
        src="https://icongr.am/jam/twitter-square.svg?size=96&color=DDDDDD"
        w="96px"
      />
      <Link display={{ base: "none", lg: "initial" }} isExternal>
        @kusznieryk_
      </Link>
    </Center>
    <Center as={Link} href="https://github.com/kusznieryk" isExternal>
      <Image
        src="https://icongr.am/jam/github-square.svg?size=96&color=DDDDDD"
        w="96px"
      />
      <Text display={{ base: "none", lg: "initial" }}> @kusznieryk </Text>
    </Center>
    <Center as={Link} href="https://linkedin.com/in/kusznieryk" isExternal>
      <Image
        src="https://icongr.am/jam/linkedin-square.svg?size=96&color=DDDDDD"
        w="96px"
      />
      <Link display={{ base: "none", lg: "initial" }} isExternal>
        @kusznieryk
      </Link>
    </Center>
  </Stack>
);

export default media;
