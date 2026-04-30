import { Text } from "@chakra-ui/react";

interface SkillTagProps {
  text: string;
  featured?: boolean;
}

export const SkillTag = ({ text, featured = false }: SkillTagProps) => (
  <Text
    fontSize="0.72rem"
    py="0.3rem"
    px="0.75rem"
    border="1px solid"
    borderColor={featured ? "rgba(239,159,39,0.35)" : "border"}
    color={featured ? "amber" : "textMuted"}
    bg={featured ? "rgba(239,159,39,0.12)" : "bg2"}
    letterSpacing="0.04em"
    transition="border-color 0.2s, color 0.2s"
    _hover={{
      borderColor: "amber",
      color: "amber",
    }}
  >
    {text}
  </Text>
);