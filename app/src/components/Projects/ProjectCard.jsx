import { useState } from "react";
import {
  Box,
  Container,
  Flex,
  Heading,
  Image,
  Text,
  Link,
  useColorModeValue,
  keyframes,
} from "@chakra-ui/react";
import { BiLinkExternal } from "react-icons/bi";
// Dummy data for demonstration
import { projects } from "../../pages/projectData";

function ProjectCard({ project }) {
  const bgGradient = useColorModeValue(
    "linear(to-br, gray.100 -40%, gray.200 100%)",
    "linear(to-br, gray.600 -40%, gray.700 30%, gray.900 100%)"
  );
  const headingColor = useColorModeValue("1A202C", "whiteAlpha.800");
  const smallTextColor = useColorModeValue("gray.600", "whiteAlpha.700");
  const borderColor = useColorModeValue("gray.200", "gray.700");

  const latestTwoProjects = projects.slice(0, 2);

  return latestTwoProjects.map((project, index) => (
      <Flex
        className="firstRowLeft"
        flexDir={{ base: "column", md: "column" }}
        alignItems={{ base: "center", md: "start", lg: "start" }}
        gap={{ base: 5, md: 10, lg: 5, xl: 5 }}
        p={{ base: 8, md: 5, lg: 5, xl: 5 }}
        borderRadius={"30px"}
        bgGradient={bgGradient}
        border={"1px"}
        borderColor={borderColor}
        _hover={{
          borderColor: "gray.500",
          transitionDuration: "0.3s",
          transitionTimingFunction: "ease-in-out",
          transform: "translateY(-7px)",
        }}
        flex={{ base: "full", sm: "full", md: "40%" }}
        key={project.id}
      >
        <Image
          src={project.image}
          alt={project.projectName}
          bg={"blue.500"}
          objectFit={"cover"}
          borderRadius={"20px"}
          width={"full"}
        />
        <Flex
          justifyContent={"space-between"}
          width={"full"}
          alignItems={"center"}
        >
          <Box display={"flex"} flexDir={"column"} gap={1}>
            <Text
              fontSize={{ base: "14px", md: "13px", lg: "13px", xl: "13px" }}
              color={smallTextColor}
            >
              {project.topTitle}
            </Text>
            <Heading
              fontSize={{ base: "16px", md: "19px", lg: "19px", xl: "19px" }}
              fontWeight={"500"}
              color={headingColor}
            >
              {project.projectName}
            </Heading>
          </Box>
          <Box>
            <Link href={project.url} isExternal>
              <BiLinkExternal fontSize={"22px"} />
            </Link>
          </Box>
        </Flex>
      </Flex>
    ));
}

export default ProjectCard;
