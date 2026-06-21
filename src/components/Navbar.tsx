import React from "react";
import { Box, Flex, Text, Button, HStack, Link } from "@chakra-ui/react";
import { NAV_LINKS } from "../data/siteData";
import { MobileMenu } from "./MobileMenu";

const Navbar: React.FC = () => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Box
      as="nav"
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={1000}
      bg="rgba(12,13,15,0.85)"
      backdropFilter="blur(12px)"
      borderBottom="1px solid rgba(255,255,255,0.07)"
    >
      <Flex
        maxW="container.xl"
        mx="auto"
        align="center"
        justify="space-between"
        px={{ base: 4, md: 6, lg: 8 }}
        h="64px"
      >
        <Link
          href="#home"
          onClick={(e: React.MouseEvent<HTMLAnchorElement>) => handleClick(e, "#home")}
          fontSize="2xl"
          fontWeight="bold"
          fontFamily="heading"
          color="text"
          _hover={{ textDecoration: "none" }}
          letterSpacing="-0.02em"
        >
          ek<Text as="span" color="amber">.</Text>
        </Link>

        <HStack spacing={8} display={{ base: "none", md: "flex" }}>
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={(e: React.MouseEvent<HTMLAnchorElement>) => handleClick(e, link.href)}
              color="textMuted"
              fontSize="sm"
              fontWeight="medium"
              fontFamily="heading"
              letterSpacing="0.02em"
              textTransform="uppercase"
              _hover={{ color: "text", textDecoration: "none" }}
              transition="color 0.2s"
            >
              {link.label}
            </Link>
          ))}
        </HStack>

        <HStack spacing={4}>
          <Button
            as="a"
            href="https://drive.google.com/drive/u/0/folders/1h7xmJJYWdGN3nJGiBxHoefqUGAURgTJ4"
            target="_blank"
            rel="noopener noreferrer"
            variant="outline"
            borderColor="amber"
            color="amber"
            size="sm"
            fontFamily="heading"
            fontWeight="semibold"
            letterSpacing="0.02em"
            _hover={{ bg: "amber", color: "bg" }}
            _active={{ bg: "amber", color: "bg" }}
            transition="all 0.2s"
            display={{ base: "none", md: "inline-flex" }}
          >
            View CV →
          </Button>
          <Box display={{ base: "block", md: "none" }}>
            <MobileMenu />
          </Box>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Navbar;