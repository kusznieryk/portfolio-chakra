import React from "react";
import {
  Box,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  VStack,
  Link,
  Button,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import { NAV_LINKS } from "../data/siteData";

const HamburgerIcon: React.FC = () => (
  <Box as="svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </Box>
);

export const MobileMenu: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    onClose();
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <IconButton
        aria-label="Open menu"
        icon={<HamburgerIcon />}
        variant="ghost"
        color="text"
        _hover={{ bg: "whiteAlpha.100" }}
        onClick={onOpen}
      />

      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay bg="blackAlpha.600" backdropFilter="blur(4px)" />
        <DrawerContent
          bg="bg2"
          borderLeft="1px solid rgba(255,255,255,0.07)"
        >
          <DrawerCloseButton color="textMuted" _hover={{ color: "text" }} />
          <DrawerBody pt={12} display="flex" flexDirection="column">
            <VStack spacing={6} align="stretch" flex={1}>
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={(e: React.MouseEvent<HTMLAnchorElement>) => handleClick(e, link.href)}
                  color="textMuted"
                  fontSize="lg"
                  fontWeight="medium"
                  fontFamily="heading"
                  letterSpacing="0.02em"
                  textTransform="uppercase"
                  _hover={{ color: "amber", textDecoration: "none" }}
                  transition="color 0.2s"
                >
                  {link.label}
                </Link>
              ))}
            </VStack>
            <Button
              as="a"
              href="#cv"
              variant="outline"
              borderColor="amber"
              color="amber"
              size="md"
              fontFamily="heading"
              fontWeight="semibold"
              letterSpacing="0.02em"
              _hover={{ bg: "amber", color: "bg" }}
              _active={{ bg: "amber", color: "bg" }}
              transition="all 0.2s"
              w="full"
              mt={8}
            >
              View CV →
            </Button>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};