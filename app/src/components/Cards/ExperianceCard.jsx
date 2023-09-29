import React from "react";
import {
  Box,
  Container,
  Flex,
  Heading,
  Image,
  Text,
  HStack,
  Link,
  Mark,
  TableContainer,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";

function ExperianceCard() {
  const bgGradient = useColorModeValue(
    "linear(to-br, gray.100 -40%, gray.200 100%)",
    "linear(to-br, gray.600 -40%, gray.700 30%, gray.900 100%)"
  );
  const innerBgGradient = useColorModeValue(
    "linear(to-br, gray.100 -40%, gray.100 100%)",
    "linear(to-br, gray.600 -40%, gray.700 30%, gray.900 100%)"
  );
  const headingColor = useColorModeValue("1A202C", "whiteAlpha.800");
  const smallTextColor = useColorModeValue("gray.600", "whiteAlpha.700");
  const borderColor = useColorModeValue("gray.200", "gray.700");
  const cardIconBg = useColorModeValue("gray.700", "");

  return (
    <>
      <Flex
        className="thirdRowLeft"
        flex={1}
        p={6}
        gap={5}
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
      >
        <Flex
          gap={5}
          width={"full"}
          flexDir={{ base: "column", md: "row", lg: "row" }}
        >
          <Flex
            className="thirdRowLeft__left"
            width={{ base: "full", md: "33.33%", lg: "33.33%" }}
            flexDir={"column"}
            alignContent={"center"}
            alignItems={"center"}
            gap={3}
            px={10}
            py={10}
            bgGradient={innerBgGradient}
            border={"1px"}
            borderColor={borderColor}
            borderRadius={"30px"}
            _hover={{
              borderColor: "gray.500",
              transitionDuration: "0.2s",
              transitionTimingFunction: "ease-in-out",
            }}
          >
            <Heading fontSize="32px" fontWeight={"500"} color={headingColor}>
              01
            </Heading>
            <Text
              fontSize={{ base: "14px", md: "13px", lg: "13px", xl: "13px" }}
              textAlign={"center"}
              color={smallTextColor}
            >
              YEARS EXPERIENCE
            </Text>
          </Flex>
          <Flex
            className="thirdRowLeft__center"
            width={{ base: "full", md: "33.33%", lg: "33.33%" }}
            flexDir={"column"}
            alignContent={"center"}
            alignItems={"center"}
            gap={3}
            px={10}
            py={10}
            bgGradient={innerBgGradient}
            border={"1px"}
            borderColor={borderColor}
            borderRadius={"30px"}
            _hover={{
              borderColor: "gray.500",
              transitionDuration: "0.3s",
              transitionTimingFunction: "ease-in-out",
            }}
          >
            <Heading fontSize="32px" fontWeight={"500"} color={headingColor}>
              12+
            </Heading>
            <Text
              fontSize={{ base: "14px", md: "13px", lg: "13px", xl: "13px" }}
              textAlign={"center"}
              color={smallTextColor}
            >
              CLIENTS WORLDWIDE
            </Text>
          </Flex>
          <Flex
            className="thirdRowLeft__right"
            width={{ base: "full", md: "33.33%", lg: "33.33%" }}
            flexDir={"column"}
            alignContent={"center"}
            alignItems={"center"}
            gap={3}
            px={10}
            py={10}
            bgGradient={innerBgGradient}
            border={"1px"}
            borderColor={borderColor}
            borderRadius={"30px"}
            _hover={{
              borderColor: "gray.500",
              transitionDuration: "0.3s",
              transitionTimingFunction: "ease-in-out",
            }}
          >
            <Heading fontSize="32px" fontWeight={"500"} color={headingColor}>
              30+
            </Heading>
            <Text
              fontSize={{ base: "14px", md: "13px", lg: "13px", xl: "13px" }}
              textAlign={"center"}
              color={smallTextColor}
            >
              TOTAL PROJECTS
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}

export default ExperianceCard;
