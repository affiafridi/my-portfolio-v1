import React from "react";
import {
  Box,
  Flex,
  Heading,
  Image,
  Link as ChakraLink,
  Mark,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import {Link as ReactRouterLink} from 'react-router-dom'
import icon from "../../assets/icons/icon2.png";
import { BiLinkExternal } from "react-icons/bi";

function BottomHeading() {
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
        className="thirdRowRight"
        flexDir={"column"}
        flex={1}
        justifyContent={"flex-end"}
        position={"relative"}
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
        <Box>
          <Image src={icon} height={"70"} position={"absolute"} top={0} />
        </Box>
        <Flex mt={{ base: 10 }} alignItems={"center"}>
          <Flex flex={1}>
            <Heading
              color={headingColor}
              fontSize={{ base: "25px", md: "40px", lg: "40px" }}
              fontWeight={"500"}
            >
              Let's <br /> work <Mark color={"blue.400"}> together.</Mark>
            </Heading>
          </Flex>
          <ChakraLink to={"/contact"} as={ReactRouterLink}>
            <Flex
              alignItems={"end"}
              flex={{ base: 0.7, md: "0.8", lg: "none" }}
              flexDir={"column"}
              justifyContent={"center"}
            >
              <BiLinkExternal fontSize={"22px"} />
            </Flex>
          </ChakraLink>
        </Flex>
      </Flex>
    </>
  );
}

export default BottomHeading;
