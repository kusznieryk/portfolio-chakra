import React from 'react'
import { Flex, Text, Link as ChakraLink } from '@chakra-ui/react'
import { FOOTER_DATA } from './data/siteData'

const Footer: React.FC = () => {
  return (
    <Flex
      as="footer"
      direction={{ base: 'column', md: 'row' }}
      justify="space-between"
      align="center"
      py={6}
      px={8}
      borderTop="1px solid"
      borderColor="border"
      color="textMuted"
      fontSize="sm"
      gap={4}
    >
      <Text color="text">{FOOTER_DATA.copyright}</Text>
      <Flex gap={6}>
        {FOOTER_DATA.links.map((link) => (
          <ChakraLink
            key={link.href}
            href={link.href}
            isExternal
            color="textMuted"
            _hover={{ color: 'text' }}
          >
            {link.label}
          </ChakraLink>
        ))}
      </Flex>
    </Flex>
  )
}

export default Footer