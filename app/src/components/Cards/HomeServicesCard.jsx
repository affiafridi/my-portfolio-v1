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
  Tooltip,
} from "@chakra-ui/react";
import arrow from "../../assets/icons/arrow.svg";
import "./homeServiceCard.css";
import { TbSourceCode } from "react-icons/tb";
import { LiaLaptopCodeSolid } from "react-icons/lia";
import { BiLinkExternal, BiLogoWordpress } from "react-icons/bi";
import { Link as ReactRouterLink } from "react-router-dom";

function HomeServicesCard() {
  const bgGradient = useColorModeValue(
    "linear(to-br, gray.100 -40%, gray.200 100%)",
    "linear(to-br, gray.600 -40%, gray.700 30%, gray.900 100%)"
  );
  const bgTooltip = useColorModeValue("gray.800", "gray.200");
  const headingColor = useColorModeValue("1A202C", "whiteAlpha.800");
  const smallTextColor = useColorModeValue("gray.600", "whiteAlpha.700");
  const toolTipTextColor = useColorModeValue("whiteAlpha.900", "gray.600");
  const borderColor = useColorModeValue("gray.200", "gray.700");
  const cardIconBg = useColorModeValue("gray.700", "");

  return (
    <>
      <Flex
        className="secondRowCenter"
        flex={2}
        flexDir={"column"}
        justifyContent={{
          base: "center",
          md: "space-between",
          lg: "space-between",
        }}
        borderRadius={"30px"}
        pt={12}
        pb={5}
        gap={5}
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
          <Flex
            gap={{ base: 10, md: 7, lg: 7, xl: "60px" }}
            justifyContent={"center"}
            p={5}
          >
            <Box fontSize={"40px"}>
              <TbSourceCode />
            </Box>
            <Box fontSize={"40px"}>
              <LiaLaptopCodeSolid />
            </Box>
            <Box fontSize={"40px"}>
              <BiLogoWordpress />
            </Box>
          </Flex>
        </Box>
        <Box>
          <Flex
            justifyContent={"space-around"}
            alignContent={"center"}
            alignItems={"center"}
          >
            <Box display={"flex"} flexDir={"column"} gap={1}>
              <Text
                fontSize={{ base: "14px", md: "13px", lg: "13px", xl: "13px" }}
                color={smallTextColor}
              >
                SPECIALIZATION
              </Text>
              <Heading
                fontSize={{ base: "20px", md: "19px", lg: "19px", xl: "19px" }}
                fontWeight={"500"}
                color={headingColor}
              >
                Services Offering
              </Heading>
            </Box>
            <ChakraLink to={"/services"} as={ReactRouterLink}>
              <Box>
                <BiLinkExternal fontSize={"22px"} />
              </Box>
            </ChakraLink>
          </Flex>
        </Box>
      </Flex>
    </>
  );
}

export default HomeServicesCard;
