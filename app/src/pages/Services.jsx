import React from "react";
import MainContainer from "../components/MainContainer";
import { Link as ReachLink } from "react-router-dom";
import {
  Box,
  Flex,
  Heading,
  Image,
  Text,
  Link as ChakraLink,
  useColorMode,
  Mark,
  useColorModeValue,
} from "@chakra-ui/react";
import me from "../assets/logo.png";
import star from "../assets/icons/star-2.png";
import icon from "../assets/icons/icon2.png";
import gFonts from "../assets/gfonts.png";
import { GrMail } from "react-icons/gr";
import { TbSourceCode } from "react-icons/tb";
import { LiaLaptopCodeSolid } from "react-icons/lia";
import { BiLinkExternal, BiLogoWordpress } from "react-icons/bi";

// My Components
import ProfilesCard from "../components/Cards/ProfilesCard";
import BottomHeading from "../components/Cards/BottomHeading";
import HomeCredentials from "../components/Cards/HomeCredentials";

function Services({ children }) {
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
      <MainContainer>
        {/* ===================== First Row Start ======================== */}
        <Box
          className="firstRowLeft"
          display={"flex"}
          flexDir={{ base: "column", md: "column", lg: "row", xl: "row" }}
          gap={7}
          position={"sticky"}
          alignItems={"start"}
        >
          <Flex
            className="firstRowLeft"
            flexDir={{ base: "column", md: "column" }}
            alignItems={"center"}
            gap={{ base: 5, md: 10, lg: 10, xl: "5rem" }}
            flex={0.5}
            px={10}
            py={"5rem"}
            borderRadius={"30px"}
            bgGradient={bgGradient}
            border={"1px"}
            borderColor={borderColor}
            top={20}
            width={{ base: "full", md: "100%", lg: "auto", xl: "auto" }}
          >
            <Flex flexDir={"column"} gap={"150px"}>
              <Flex gap={7}>
                <Box display={"flex"} alignItems={"center"}>
                  <TbSourceCode fontSize={"40px"} />
                </Box>
                <Box
                  display={"flex"}
                  flex={1}
                  flexDir={"column"}
                  justifyContent={"center"}
                >
                  <Heading
                    fontSize={{
                      base: "18px",
                      md: "14px",
                      lg: "14px",
                      xl: "14px",
                    }}
                    fontWeight={"500"}
                    color={headingColor}
                  >
                    WEB DESIGNING
                  </Heading>
                </Box>
              </Flex>
              <Flex gap={7}>
                <Box display={"flex"} alignItems={"center"}>
                  <LiaLaptopCodeSolid fontSize={"40px"} />
                </Box>
                <Box
                  display={"flex"}
                  flex={1}
                  flexDir={"column"}
                  justifyContent={"center"}
                >
                  <Heading
                    fontSize={{
                      base: "18px",
                      md: "14px",
                      lg: "14px",
                      xl: "14px",
                    }}
                    fontWeight={"500"}
                    color={headingColor}
                  >
                    WEB DEVELOPMENT
                  </Heading>
                </Box>
              </Flex>
              <Flex gap={7}>
                <Box display={"flex"} alignItems={"center"}>
                  <BiLogoWordpress fontSize={"40px"} />
                </Box>
                <Box
                  display={"flex"}
                  flex={1}
                  flexDir={"column"}
                  justifyContent={"center"}
                >
                  <Heading
                    fontSize={{
                      base: "18px",
                      md: "14px",
                      lg: "14px",
                      xl: "14px",
                    }}
                    fontWeight={"500"}
                    color={headingColor}
                  >
                    WORDPRESS
                  </Heading>
                </Box>
              </Flex>
            </Flex>
          </Flex>
          <Flex
            className="firstRowRight"
            flexDir={"column"}
            flex={2}
            gap={1}
            alignSelf={{
              base: "center",
              md: "start",
              lg: "start",
              xl: "start",
            }}
            width={"full"}
          >
            <Flex
              className="firstRowRight__top"
              flexDir={"column"}
              alignContent={"center"}
            >
              <Box pb={3} px={5} maxW={"full"}>
                <Box
                  display={"flex"}
                  gap={5}
                  py={{ base: 6, md: "0", lg: "0", xl: "0" }}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  {/* <img src={star} width={"full"} /> */}
                  <Box fontSize={{ base: "25px", md: "35px", lg: "35px" }}>
                    👨🏻‍💻
                  </Box>
                  <Heading fontSize={{ base: "25px", md: "35px", lg: "40px" }}>
                    MY-SERVICES
                  </Heading>
                  {/* <img src={star} alt="" /> */}
                  <Box fontSize={{ base: "25px", md: "35px", lg: "35px" }}>
                    💻
                  </Box>
                </Box>
              </Box>
            </Flex>

            <Flex
              className="thirdRowLeft"
              p={6}
              gap={5}
              borderRadius={"30px"}
              bgGradient={bgGradient}
              border={"1px"}
              borderColor={borderColor}
            >
              <Flex
                gap={5}
                width={"full"}
                flexDir={{ base: "column", md: "row", lg: "row" }}
                wrap={"wrap"}
              >
                <Flex
                  className="thirdRowLeft__left"
                  width={{ base: "full", md: "48%", lg: "48%" }}
                  // width={'48%'}
                  flexDir={"column"}
                  alignItems={"start"}
                  gap={3}
                  px={8}
                  py={8}
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
                  <Heading
                    fontSize="32px"
                    fontWeight={"500"}
                    color={headingColor}
                  >
                    01
                  </Heading>
                  <Heading
                    fontSize={{
                      base: "18px",
                      md: "14px",
                      lg: "14px",
                      xl: "14px",
                    }}
                    fontWeight={"500"}
                    color={headingColor}
                  >
                    WEB DESIGNING
                  </Heading>
                  <Text
                    fontSize={{
                      base: "14px",
                      md: "13px",
                      lg: "13px",
                      xl: "13px",
                    }}
                    color={smallTextColor}
                  >
                    Sit amet luctussd fav venenatis, lectus magna fringilla inis
                    urna, porttitor asna rhoncus dolor purus non enim aberitin
                    praesent in elementum sahas facilisis leo, vel fringilla est
                    etisam dignissim.
                  </Text>
                </Flex>
                <Flex
                  className="thirdRowLeft__left"
                  width={{ base: "full", md: "48%", lg: "48%" }}
                  // width={'48%'}
                  flexDir={"column"}
                  alignItems={"start"}
                  gap={3}
                  px={8}
                  py={8}
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
                  <Heading
                    fontSize="32px"
                    fontWeight={"500"}
                    color={headingColor}
                  >
                    02
                  </Heading>
                  <Heading
                    fontSize={{
                      base: "18px",
                      md: "14px",
                      lg: "14px",
                      xl: "14px",
                    }}
                    fontWeight={"500"}
                    color={headingColor}
                  >
                    WEB DEVELOPMENT
                  </Heading>
                  <Text
                    fontSize={{
                      base: "14px",
                      md: "13px",
                      lg: "13px",
                      xl: "13px",
                    }}
                    color={smallTextColor}
                  >
                    Sit amet luctussd fav venenatis, lectus magna fringilla inis
                    urna, porttitor asna rhoncus dolor purus non enim aberitin
                    praesent in elementum sahas facilisis leo, vel fringilla est
                    etisam dignissim.
                  </Text>
                </Flex>
                <Flex
                  className="thirdRowLeft__left"
                  width={{ base: "full", md: "48%", lg: "48%" }}
                  // width={'48%'}
                  flexDir={"column"}
                  alignItems={"start"}
                  gap={3}
                  px={8}
                  py={8}
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
                  <Heading
                    fontSize="32px"
                    fontWeight={"500"}
                    color={headingColor}
                  >
                    03
                  </Heading>
                  <Heading
                    fontSize={{
                      base: "18px",
                      md: "14px",
                      lg: "14px",
                      xl: "14px",
                    }}
                    fontWeight={"500"}
                    color={headingColor}
                  >
                    WORDPRESS
                  </Heading>
                  <Text
                    fontSize={{
                      base: "14px",
                      md: "13px",
                      lg: "13px",
                      xl: "13px",
                    }}
                    color={smallTextColor}
                  >
                    Sit amet luctussd fav venenatis, lectus magna fringilla inis
                    urna, porttitor asna rhoncus dolor purus non enim aberitin
                    praesent in elementum sahas facilisis leo, vel fringilla est
                    etisam dignissim.
                  </Text>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </Box>
        {/* ================ First Row End =====================*/}

        {/* ==================== Second Row Start =================== */}
        <Flex
          className="secondRow"
          flexDir={{ base: "column", md: "column", lg: "row" }}
          mt={7}
          gap={7}
        ></Flex>
        {/* ==================== Second Row End =================== */}

        {/* ==================== Third Row End =================== */}
        <Flex
          className="thirdRow"
          flexDir={{ base: "column", md: "column", lg: "row", xl: "row" }}
          gap={7}
          mt={7}
        >
          {/* Mobile flex direction for first two divs */}
          <Flex flex={1}>
            <ProfilesCard />
          </Flex>
          <Flex flex={2}>
            <BottomHeading />
          </Flex>
          <Flex flex={1}>
            <HomeCredentials />
          </Flex>
        </Flex>
        {/* ==================== Third Row End =================== */}
      </MainContainer>
    </>
  );
}

export default Services;
