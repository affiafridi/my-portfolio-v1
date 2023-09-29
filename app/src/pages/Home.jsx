import React from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import "../index.css";
import {
  Box,
  Flex,
  Heading,
  Image,
  Text,
  Link as ChakraLink,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import me from "../assets/frontPic.png";

// My Components
import HomeCredentials from "../components/Cards/HomeCredentials";
import HomeProjects from "../components/Cards/HomeProjects";
import ProfilesCard from "../components/Cards/ProfilesCard";
import HomeServicesCard from "../components/Cards/HomeServicesCard";
import ExperianceCard from "../components/Cards/ExperianceCard";
import BottomHeading from "../components/Cards/BottomHeading";
import MainContainer from "../components/MainContainer";
import { BiLinkAlt, BiLinkExternal } from "react-icons/bi";
import ScrollingText from "../components/ScrollingText";

function Home({ children }) {
  const { color, colorMode } = useColorMode();
  const bgGradient = useColorModeValue(
    "linear(to-br, gray.100 -40%, gray.200 100%)",
    "linear(to-br, gray.600 -40%, gray.700 30%, gray.900 100%)"
  );
  const imageBg = useColorModeValue(
    "radial-gradient(circle at center, #858c99 , #151c3c)",
    "radial-gradient(circle at center, #e0ecff , #757b8a)"
  )
  const headingColor = useColorModeValue("1A202C", "whiteAlpha.800");
  const smallTextColor = useColorModeValue("gray.600", "whiteAlpha.700");
  const borderColor = useColorModeValue("gray.200", "gray.700");
  const cardIconBg = useColorModeValue("gray.700", "");

  return (
    <div>
      <MainContainer>
        {/* ===================== First Row Start ======================== */}

        <Box
          className="firstRow"
          display={"flex"}
          flexDir={{ base: "column", md: "column", lg: "row", xl: "row" }}
          gap={5}
        >
          <Flex
            className="firstRowLeft"
            flexDir={{ base: "column", md: "column", lg: 'column', xl: 'row' }}
            alignItems={{ base: "center", md: "start", lg: "start" }}
            flex={1}
            gap={{ base: 5, md: 10, lg: 10, xl: 10 }}
            p={{ base: 8, md: 10, lg: 10, xl: 10 }}
            borderRadius={"30px"}
            bgGradient={bgGradient}
            border={"1px"}
            borderColor={borderColor}
            _hover={{
              borderColor: "gray.500",
              transitionDuration: "0.3s",
              transitionTimingFunction: "ease-in-out",
              transform: "translateY(-10px)",
            }}
          >
            <Box
              className="firstRow__innerLeft"
              flex={{ base: 1, md: 1, lg: 1.5, xl: 1 }}
            >
              <Image
                src={me}
                bg={imageBg}
                objectFit={"contain"}
                borderRadius={"20px"}
                width={{
                  base: "250px",
                  md: "250px",
                  lg: "200px",
                  xl: "200px",
                }}
              />
            </Box>
            <Box
              className="firstRow__innerRight"
              flex={2}
              justifyContent={"space-around"}
              display={"flex"}
              flexDirection={"column"}
              gap={10}
            >
              <Box
                display={"flex"}
                flexDir={"column"}
                alignItems={{ base: "center", md: "start", lg: "start" }}
                gap={2}
              >
                <Text
                  color={smallTextColor}
                  fontSize={{
                    base: "14",
                    md: "14px",
                    lg: "16px",
                    xl: "16px",
                  }}
                >
                  A WEB DEVELOPER
                </Text>
                <Heading
                  color={headingColor}
                  fontSize={{
                    base: "25",
                    md: "38px",
                    lg: "30px",
                    xl: "36px",
                  }}
                >
                  AFFI AFRIDI
                </Heading>
                <Text
                  color={smallTextColor}
                  textAlign={{ base: "center", md: "start", lg: "start" }}
                  fontWeight={"400"}
                >
                  I'm Web Developer from Pakistan, Shaping the virtual world
                  with code.
                </Text>
              </Box>
              <Flex justifyContent={"end"}>
                <ChakraLink to={"/about"} as={ReactRouterLink}>
                  <BiLinkExternal fontSize={"22px"} />
                </ChakraLink>
              </Flex>
            </Box>
          </Flex>
          <Flex className="firstRowRight" flexDir={"column"} flex={1} gap={5}>
            <Flex
              className="firstRowRight__top"
              flexDir={"column"}
              alignContent={"center"}
            >
              <Box
                overflow={"hidden"}
                py={5}
                px={5}
                maxW={"full"}
                borderRadius={"30px"}
                bgGradient={bgGradient}
                border={"1px"}
                borderColor={borderColor}
              >
                <ScrollingText />
              </Box>
            </Flex>
            <Flex
              className="firstRowRight__second"
              flexDir={{
                base: "column",
                sm: "row",
                md: "row",
                lg: "row",
                xl: "row",
              }}
              gap={5}
            >
              <HomeCredentials />
              <HomeProjects />
            </Flex>
          </Flex>
        </Box>
        {/* ================ First Row End =====================*/}

        {/* ================== Second Row Start ====================*/}
        <Flex
          className="secondRow"
          flexDir={{ base: "column", md: "row", lg: "row", xl: "row" }}
          gap={5}
          mt={5}
        >
          {/* Mobile flex direction for first two divs */}

          <Flex
            className="secondRowLeft"
            gap={{ base: 10, md: 2 }}
            flex={1}
            flexDir={"column"}
            alignContent={"center"}
            borderRadius={"30px"}
            p={5}
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
            {/* <Image src={gFonts} align={"center"} alignSelf={"center"} /> */}
            <Box display={"flex"} justifyContent={"center"} fontSize={"80px"}>
              📦
            </Box>
            <Flex
              justifyContent={"space-around"}
              alignContent={"center"}
              alignItems={"center"}
            >
              <Box display={"flex"} flexDir={"column"} gap={1}>
                <Text
                  fontSize={{
                    base: "14px",
                    md: "13px",
                    lg: "13px",
                    xl: "13px",
                  }}
                  color={smallTextColor}
                >
                  PACKAGES IN DETAILS
                </Text>
                <Heading
                  fontSize={{
                    base: "20px",
                    md: "19px",
                    lg: "19px",
                    xl: "19px",
                  }}
                  fontWeight={"500"}
                  color={headingColor}
                >
                  Packages
                </Heading>
              </Box>
              <ChakraLink to={"/pricing"} as={ReactRouterLink}>
                <Box>
                  <BiLinkExternal fontSize={"22px"} />
                </Box>
              </ChakraLink>
            </Flex>
          </Flex>

          <HomeServicesCard />
          <ProfilesCard />
        </Flex>
        {/* ==================== Second Row End =================== */}

        {/* ==================== Third Row Start =================== */}
        <Flex
          className="thirdRow"
          flexDir={{ base: "column", md: "column", lg: "row" }}
          mt={5}
          gap={5}
        >
          <ExperianceCard />
          <BottomHeading />
        </Flex>
        {/* ==================== Third Row End =================== */}
      </MainContainer>
    </div>
  );
}

export default Home;
