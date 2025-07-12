import React from "react";
import {
    Box,
    Flex,
    Heading,
    Text,
    Link,
    Image,
    Tag,
    HStack,
    VStack,
    useColorModeValue
} from "@chakra-ui/react";
import { project } from "../types";

// Define the project interface if needed

interface ProjectCardProps {
    details: project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ details }) => {
    const textMuted = useColorModeValue("gray.600", "gray.400");
    const tagBg = useColorModeValue("gray.100", "gray.700");

    return (
        <Box
            bg={"var(--chakra-colors-bg-card)"}
            borderRadius="xl"
            overflow="hidden"
            transition="all 0.3s"
            boxShadow="lg"
            _hover={{
                transform: "translateY(-10px)",
                boxShadow: "xl"
            }}
            width="100%"
        >
            <Box height="200px" overflow="hidden">
                <Image
                    src={details.img}
                    alt={`${details.name} Project Screenshot`}
                    width="100%"
                    height="100%"
                    objectFit="cover"
                    transition="all 0.3s"
                    _groupHover={{ transform: "scale(1.05)" }}
                />
            </Box>

            <VStack padding="6" spacing="4" align="start">
                <Heading as="h3" size="md">
                    {details.name}
                </Heading>

                <Text color={textMuted}>
                    {details.description}
                </Text>
                <HStack spacing="4">
                    {details.live !== "" && details.live !== "/" && (
                        <Link
                            href={details.live}
                            bg="linear-gradient(135deg, blue.400, teal.400)"
                            color="white"
                            px="4"
                            py="2"
                            borderRadius="md"
                            fontWeight="medium"
                            _hover={{
                                transform: "translateY(-3px)",
                                boxShadow: "0 5px 15px rgba(66, 153, 225, 0.4)"
                            }}
                            transition="all 0.3s"
                            target="_blank"
                        >
                            Preview
                        </Link>
                    )}

                    {details.code !== "" && details.code !== "/" && (
                        <Link
                            href={details.code}
                            bg="linear-gradient(135deg, blue.400, teal.400)"
                            color="white"
                            px="4"
                            py="2"
                            borderRadius="md"
                            fontWeight="medium"
                            _hover={{
                                transform: "translateY(-3px)",
                                boxShadow: "0 5px 15px rgba(66, 153, 225, 0.4)"
                            }}
                            transition="all 0.3s"
                            target="_blank"
                        >
                            Code
                        </Link>
                    )}
                </HStack>
            </VStack>
        </Box>
    );
};

export default ProjectCard;