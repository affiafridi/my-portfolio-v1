import React from "react";
import {
  Box,
  Container,
  Flex,
  Heading,
  Image,
  Text,
  HStack,
  Link as ChakraLink,
  Mark,
  TableContainer,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import {Link as ReactRouterLink} from 'react-router-dom'
import { BiLinkExternal } from "react-icons/bi";

function HomeCredentials() {
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
      <Flex
        className="firstRowRight__secondLeft"
        flexDir={"column"}
        alignContent={"center"}
        flex={1}
        borderRadius={"30px"}
        p={{ base: "20px", md: "10", lg: "5", xl: "5" }}
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
        <Box display={"flex"} justifyContent={"center"} fontSize={"80px"}>
          👨🏻‍💻
        </Box>
        <Flex justifyContent={"space-around"} alignItems={"center"}>
          <Box display={"flex"} flexDir={"column"} gap={1}>
            <Text
              fontSize={{ base: "14px", md: "13px", lg: "13px", xl: "13px" }}
              color={smallTextColor}
            >
              MORE ABOUT ME
            </Text>
            <Heading
              fontSize={{ base: "20px", md: "19px", lg: "19px", xl: "19px" }}
              fontWeight={"500"}
              color={headingColor}
            >
              Credentials
            </Heading>
          </Box>
          <ChakraLink to={"/credentials"} as={ReactRouterLink}>
            <Box>
            <BiLinkExternal fontSize={'22px'}/>
            </Box>
          </ChakraLink>
        </Flex>
      </Flex>
      {/* ========================================================================================= */}
    </>
  );
}

export default HomeCredentials;
