import React from "react";
import { Link as ReachLink } from "react-router-dom";
import {
  Box,
  Flex,
  Heading,
  Image,
  Text,
  Link,
  useColorMode,
  useColorModeValue,
  useMediaQuery,
} from "@chakra-ui/react";
import { projects } from "../pages/projectData";

// My Components
import MainContainer from "../components/MainContainer";
import Pagination from "../pages/Pagination"
import ProjectCard from "../components/Projects/ProjectCard";

function Works({ children }) {
  const { color, colorMode } = useColorMode();
  const [isSmallThan767] = useMediaQuery("(min-width: 767px)");
  const [isSmallThan600] = useMediaQuery("(min-width: 600px)");

  const bgGradient = useColorModeValue(
    "linear(to-br, gray.100 -40%, gray.200 100%)",
    "linear(to-br, gray.600 -40%, gray.700 30%, gray.900 100%)"
  );
  const headingColor = useColorModeValue("1A202C", "whiteAlpha.800");
  const smallTextColor = useColorModeValue("gray.600", "whiteAlpha.700");
  const borderColor = useColorModeValue("gray.200", "gray.700");
  const cardIconBg = useColorModeValue("gray.700", "");

  return (
    <>
      <MainContainer>
        <Flex gap={7} flexDir={{ base: "column", md: "row", lg: "row" }}>
          {isSmallThan767 ? (
            <div></div>
          ) : (
            <>
              <Flex justifyContent={"center"} gap={{ base: 2, sm: 5 }}>
                <Box fontSize={{ base: "25px", md: "35px", lg: "35px" }}>
                  📁
                </Box>
                <Heading fontSize={{ base: "25px", md: "35px", lg: "40px" }}>
                  ALL-PROJECTS
                </Heading>
                <Box fontSize={{ base: "25px", md: "35px", lg: "35px" }}>
                  💡
                </Box>
              </Flex>
            </>
          )}
          <Flex
            className="workLeft"
            flex={1}
            height={"400px"}
            flexDir={{ base: "column", md: "column", lg: "column" }}
            gap={7}
          >
            <ProjectCard />            
          </Flex>
          <Flex
            className="workRight"
            flex={2}
            gap={7}
            justifyContent={"center"}
          >
            <Flex flexDir={"column"} gap={7}>
              <Box pb={3} px={5} maxW={"full"}>
                <Box
                  display={"flex"}
                  gap={5}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  {/* <img src={star} width={"full"} /> */}
                  {isSmallThan767 ? (
                    <>
                      <Box fontSize={{ base: "25px", md: "35px", lg: "35px" }}>
                        📁
                      </Box>
                      <Heading
                        fontSize={{ base: "25px", md: "35px", lg: "40px" }}
                      >
                        ALL-PROJECTS
                      </Heading>
                      <Box fontSize={{ base: "25px", md: "35px", lg: "35px" }}>
                        💡
                      </Box>
                    </>
                  ) : (
                    <div></div>
                  )}
                  {/* <img src={star} alt="" /> */}
                </Box>
              </Box>
              <Flex
                gap={7}
                wrap={"wrap"}
                justifyContent={"center"}
              >
                <Pagination />
                {/* <ProjectOne />
                <ProjectOne />
                <ProjectOne />
                <ProjectOne /> */}
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </MainContainer>
    </>
  );
}

export default Works;
