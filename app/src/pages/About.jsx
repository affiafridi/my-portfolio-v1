import MainContainer from "../components/MainContainer";
import { Link as ReachLink } from "react-router-dom";
import {
  Box,
  Flex,
  Heading,
  Image,
  Text,
  Link,
  useColorModeValue,
  Mark,
  useColorMode,
} from "@chakra-ui/react";
import me from "../assets/midPic.png";
import star from "../assets/icons/star-2.png";
import icon from "../assets/icons/icon2.png";
import gFonts from "../assets/gfonts.png";

// My Components
import ProfilesCard from "../components/Cards/ProfilesCard";
import BottomHeading from "../components/Cards/BottomHeading";
import HomeCredentials from "../components/Cards/HomeCredentials";

function About({ children }) {
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

  return (
    <>
      <MainContainer>
        {/* ===================== First Row Start ======================== */}

        <Box
          className="firstRowLeft"
          display={"flex"}
          flexDir={{ base: "column", md: "column", lg: "row", xl: "row" }}
          gap={7}
        >
          <Flex
            className="firstRowLeft"
            flexDir={{ base: "column", md: "row" }}
            alignItems={{ base: "center", md: "start", lg: "start" }}
            gap={{ base: 5, md: 10, lg: 10, xl: 10 }}
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
          >
            <Image
              ml={"auto"}
              mr={"auto"}
              src={me}
              bg={imageBg}
              objectFit={"cover"}
              borderRadius={"20px"}
              width={{
                base: "250px",
                md: "300px",
                lg: "300px",
                xl: "300px",
              }}
            />
          </Flex>
          <Flex className="firstRowRight" flexDir={"column"} flex={2} gap={1}>
            <Flex
              className="firstRowRight__top"
              flexDir={"column"}
              alignContent={"center"}
            >
              <Box pb={3} px={5} maxW={"full"}>
                <Box
                  display={"flex"}
                  gap={5}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  {/* <img src={star} width={"full"} /> */}
                  <Box fontSize={{ base: "25px", md: "35px", lg: "35px" }}>
                    👨🏻‍💻
                  </Box>
                  <Heading fontSize={{ base: "25px", md: "35px", lg: "40px" }}>
                    SELF-SUMMARY
                  </Heading>
                  {/* <img src={star} alt="" /> */}
                  <Box fontSize={{ base: "25px", md: "35px", lg: "35px" }}>
                    👨🏻‍🎓
                  </Box>
                </Box>
              </Box>
            </Flex>

            <Flex
              className="firstRowRight__bottom"
              flexDir={"column"}
              flex={1}
              justifyContent={"center"}
              position={"relative"}
              p={6}
              mt={{ base: "5", md: "0", lg: "0" }}
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
              <Flex flexDir={"column"} mt={"3.5rem"}>
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
                  textAlign={"start"}
                  fontWeight={"500"}
                >
                  A web developer with specialize in HTML, CSS, Bootstrap,
                  JavaScript, Chakra UI, Tailwind CSS, React JS and MUl, and
                  have proficent experience in WordPress designing and static
                  theme development. With my extensive knowledge and skills in
                  web development, I have successfully delivered projects from
                  simple static websites to dynamic complex web applications and
                  dashboards.
                </Text>
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
        >
          <Flex
            className="secondRow__left"
            flexDir={"column"}
            flex={1}
            gap={{ base: 5, md: 5, lg: 5, xl: 5 }}
            py={{ base: 8, md: 5, lg: 7, xl: 7 }}
            px={{ base: 8, md: 5, lg: 6, xl: 6 }}
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
              <Heading
                fontSize={{ base: "18px", md: "14px", lg: "14px", xl: "14px" }}
                fontWeight={"500"}
                color={headingColor}
              >
                EXPERIENCE
              </Heading>
            </Box>
            <Box display={"flex"} flexDir={"column"} gap={1}>
              <Text
                pb={1}
                fontSize={{
                  base: "14px",
                  md: "15px",
                  lg: "15px",
                  xl: "15px",
                }}
                color={smallTextColor}
              >
                04 Augest - Present
              </Text>
              <Heading
                fontSize={{ base: "18px", md: "15px", lg: "16px", xl: "16px" }}
                fontWeight={"500"}
                color={headingColor}
              >
                WordPress Developer -{" "}
                <Mark
                  fontSize={{
                    base: "18px",
                    md: "15px",
                    lg: "16px",
                    xl: "16px",
                  }}
                  color={colorMode === "light" ? "gray.800" : "whiteAlpha.900"}
                  fontWeight={400}
                >
                  Remotely
                </Mark>
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
                Dr. Wien - United Arab Emirates
              </Text>
            </Box>
            <Box display={"flex"} flexDir={"column"} gap={1}>
              <Text
                pb={1}
                fontSize={{
                  base: "14px",
                  md: "15px",
                  lg: "15px",
                  xl: "15px",
                }}
                color={smallTextColor}
              >
                Dec 2022 - Jun 2023
              </Text>
              <Heading
                fontSize={{ base: "18px", md: "15px", lg: "16px", xl: "16px" }}
                fontWeight={"500"}
                color={headingColor}
              >
                Frontend Web Developer
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
                Khyber Pukhtunkhwa Information Technology (KPIT BOARD)
              </Text>
            </Box>
          </Flex>

          <Flex
            className="secondRow__right"
            flexDir={"column"}
            flex={1}
            gap={{ base: 5, md: 5, lg: 5, xl: 5 }}
            py={{ base: 8, md: 5, lg: 7, xl: 7 }}
            px={{ base: 8, md: 5, lg: 6, xl: 6 }}
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
              <Heading
                fontSize={{ base: "18px", md: "14px", lg: "14px", xl: "14px" }}
                fontWeight={"500"}
                color={headingColor}
              >
                EDUCATION
              </Heading>
            </Box>
            <Box display={"flex"} flexDir={"column"} gap={1}>
              <Text
                pb={1}
                fontSize={{
                  base: "14px",
                  md: "15px",
                  lg: "15px",
                  xl: "15px",
                }}
                color={smallTextColor}
              >
                Nov 2017 - Nov 2021
              </Text>
              <Heading
                fontSize={{ base: "18px", md: "15px", lg: "16px", xl: "16px" }}
                fontWeight={"500"}
                color={headingColor}
              >
                Bachelor Degree in Computer Science
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
                The University of Agriculture Peshawar
              </Text>
            </Box>
            <Box display={"flex"} flexDir={"column"} gap={1}>
              <Text
                pb={1}
                fontSize={{
                  base: "14px",
                  md: "15px",
                  lg: "15px",
                  xl: "15px",
                }}
                color={smallTextColor}
              >
                2017
              </Text>
              <Heading
                fontSize={{ base: "18px", md: "15px", lg: "16px", xl: "16px" }}
                fontWeight={"500"}
                color={headingColor}
              >
                Diploma of Information Technology
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
                Capital Degree College Peshawar
              </Text>
            </Box>
          </Flex>
        </Flex>
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

export default About;
