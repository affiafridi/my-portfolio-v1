import React from "react";
import { Link as ReachLink } from "react-router-dom";
import {
  Box,
  Flex,
  Heading,
  Image,
  Text,
  Link as ChakraLink,
  useColorMode,
  useColorModeValue,
  useMediaQuery,
  Button,
} from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import me from "../assets/midPic.png";

// My Components
import MainContainer from "../components/MainContainer";
import {
  FaFacebookSquare,
  FaLinkedin,
  FaTwitterSquare,
  FaInstagramSquare,
} from "react-icons/fa";
import {
  BiLogoInstagram,
  BiLogoLinkedin,
  BiLogoTwitter,
  BiLogoFacebook,
} from "react-icons/bi";

function Credentials() {
  const { color, colorMode } = useColorMode();
  const [isSmallThan767] = useMediaQuery("(min-width: 767px)");
  const [isSmallThan600] = useMediaQuery("(min-width: 600px)");

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
          className="firstRow"
          display={"flex"}
          flexDir={{ base: "column", md: "column", lg: "row", xl: "row" }}
          gap={{base: 12, lg: 16, xl: 16}}
          alignItems={{base: 'center', md: 'start', lg: 'start'}}
        >
          <Flex
            className="firstRowLeft"
            flexDir={{ base: "column", md: "column" }}
            alignItems={{ base: "center", md: "start", lg: "start" }}
            gap={{ base: 5, md: 8, lg: 8, xl: 8 }}
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
            position={{base: 'static', lg: 'sticky'}}
            top={20}
            width={{base: 'full', md: '100%', lg: 'auto', xl: 'auto'}}
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
            <Flex
              flexDir={"column"}
              alignItems={"center"}
              width={"full"}
              gap={1}
            >
              <Heading fontSize={"25px"}>AFTAB AFRIDI</Heading>
              <Text>@affiafridi</Text>
            </Flex>
            <Flex
              flexDir={"column"}
              gap={5}
              justifyContent={"center"}
              width={"full"}
            >
              <Flex
                className="socialIcons"
                fontSize={"28px"}
                gap={3}
                justifyContent={"center"}
                width={"full"}
              >
                <ChakraLink href="https://facebook.com/affiafridi" isExternal>
                  <BiLogoFacebook />
                </ChakraLink>
                <ChakraLink href="https://linkedin.com/affi" isExternal>
                  <BiLogoLinkedin />
                </ChakraLink>
                <ChakraLink href="https://twitter.com/affiafridii" isExternal>
                  <BiLogoTwitter />
                </ChakraLink>
                <ChakraLink href="https://instagram.com/affiafridi" isExternal>
                  <BiLogoInstagram />
                </ChakraLink>
              </Flex>
              <ChakraLink to="/contact" as={ReactRouterLink}>
                <Button width={"full"} borderRadius={"20px"} fontSize={"15px"}>
                  Contact Me
                </Button>
              </ChakraLink>
            </Flex>
          </Flex>

          <Flex className="firstRowRight" flexDir={"column"} flex={2} gap={1}>
            <Flex
              className="firstRowRight__top"
              flexDir={"column"}
              flex={1}
              gap={16}
              p={{base: 1, lg: 6}}
              mt={{ base: "1", md: "0", lg: "0" }}
              borderRadius={"30px"}
              // bgGradient={bgGradient}
              // border={"1px"}
              // borderColor={borderColor}
              // _hover={{
              //   borderColor: "gray.500",
              //   transitionDuration: "0.3s",
              //   transitionTimingFunction: "ease-in-out",
              //   transform: "translateY(-7px)",
              // }}
            >
              <Flex className="Cred__aboutSection" flexDir={"column"} gap={6}>
                <Heading
                  fontSize={{
                    base: "18px",
                    md: "18px",
                    lg: "18px",
                    xl: "18px",
                  }}
                  fontWeight={"500"}
                  color={headingColor}
                >
                  ABOUT ME
                </Heading>

                <Text
                  color={smallTextColor}
                  textAlign={"start"}
                  fontWeight={"500"}
                  fontSize={"15px"}
                >
                  I'm Affi, A web developer with a degree in Computer Science
                  from The University Of Agriculture Peshawar. I specialize in
                  HTML, CSS, Bootstrap, JavaScript, Chakra UI, Tailwind CSS,
                  React JS, and MUl, and have experience in WordPress designing
                  and theme development.
                </Text>

                <Text
                  color={smallTextColor}
                  textAlign={"start"}
                  fontWeight={"500"}
                >
                  With my extensive knowledge and skills in web development, I
                  have successfully delivered projects ranging from simple
                  websites to complex web applications. I am passionate about
                  designing visually appealing and user-friendly websites that
                  provide a seamless user experience.
                </Text>
                <Text
                  color={smallTextColor}
                  textAlign={"start"}
                  fontWeight={"500"}
                >
                  My expertise in front-end technologies like HTML, CSS, and
                  JavaScript enables me to create websites that are responsive
                  and optimized for all devices. Additionally, my familiarity
                  with frameworks like Bootstrap, Tailwind CSS, Chakra UI, React
                  JS, and MUl enables me to build scalable and modular code that
                  is easy to maintain and update.
                </Text>
              </Flex>

              <Flex
                className="Cred__experianceSection"
                flexDir={"column"}
                gap={16}
              >
                <Flex flexDir={"column"} gap={6}>
                  <Heading
                    fontSize={{
                      base: "18px",
                      md: "18px",
                      lg: "18px",
                      xl: "18px",
                    }}
                    fontWeight={"500"}
                    color={headingColor}
                  >
                    EXPERIENCE
                  </Heading>
                  <Box display={"flex"} flexDir={"column"} gap={2}>
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
                      04 July - Present
                    </Text>
                    <Heading
                      fontSize={{
                        base: "18px",
                        md: "15px",
                        lg: "16px",
                        xl: "16px",
                      }}
                      fontWeight={"500"}
                      color={"blue.400"}
                    >
                      WordPress Developer - ( Remotely)
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
                      - Betabyte Technology Peshawar
                    </Text>
                    {/* <Text
                      color={smallTextColor}
                      textAlign={"start"}
                      fontWeight={"light"}
                      fontFamily={"monospace"}
                      fontSize={"14px"}
                    >
                      I am a Web Designer based in san francisco. I am a Web
                      Designer based in san francisco.I am a Web Designer based
                      in san francisco.I am a Web Designer based in san
                      francisco.I am a Web Designer based in san francisco.
                    </Text> */}
                  </Box>
                  <Box display={"flex"} flexDir={"column"} gap={2}>
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
                      fontSize={{
                        base: "18px",
                        md: "15px",
                        lg: "16px",
                        xl: "16px",
                      }}
                      fontWeight={"500"}
                      color={"blue.400"}
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
                      - Khyber Pukhtunkhwa Information Technology (KPIT BOARD)
                    </Text>
                  </Box>
                  <Box display={"flex"} flexDir={"column"} gap={2}>
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
                      Nov 2021 - April 2022
                    </Text>
                    <Heading
                      fontSize={{
                        base: "18px",
                        md: "15px",
                        lg: "16px",
                        xl: "16px",
                      }}
                      fontWeight={"500"}
                      color={"blue.400"}
                    >
                      Web Developer
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
                      - At REBEX, Al-Khawarizmi Institude of Computer Science
                      UET, Lahore
                      <br />- Jr. Web Developer
                    </Text>
                  </Box>
                </Flex>
                <Flex flexDir={"column"} gap={6}>
                  <Heading
                    fontSize={{
                      base: "18px",
                      md: "18px",
                      lg: "18px",
                      xl: "18px",
                    }}
                    fontWeight={"500"}
                    color={headingColor}
                  >
                    EDUCATION
                  </Heading>
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
                      fontSize={{
                        base: "18px",
                        md: "15px",
                        lg: "16px",
                        xl: "16px",
                      }}
                      fontWeight={"500"}
                      color={"blue.400"}
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
                      - The University of Agriculture Peshawar
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
                      April - 2017
                    </Text>
                    <Heading
                      fontSize={{
                        base: "18px",
                        md: "15px",
                        lg: "16px",
                        xl: "16px",
                      }}
                      fontWeight={"500"}
                      color={"blue.400"}
                    >
                      FSC Computer Science
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
                      - PEF College Peshawar
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
                      fontSize={{
                        base: "18px",
                        md: "15px",
                        lg: "16px",
                        xl: "16px",
                      }}
                      fontWeight={"500"}
                      color={"blue.400"}
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
                      - Capital Degree College Peshawar
                    </Text>
                  </Box>
                </Flex>
              </Flex>
              <Flex className="Cred__skillsSection" flexDir={"column"} gap={6}>
                <Box>
                  <Heading
                    fontSize={{
                      base: "18px",
                      md: "18px",
                      lg: "18px",
                      xl: "18px",
                    }}
                    fontWeight={"500"}
                    color={headingColor}
                  >
                    SKILLS
                  </Heading>
                </Box>
                <Flex gap={5}>
                  <Flex flex={1} flexDir={"column"} gap={5}>
                    {}
                    <Box>
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
                        95%
                      </Text>
                      <Heading
                        fontSize={{
                          base: "18px",
                          md: "15px",
                          lg: "16px",
                          xl: "16px",
                        }}
                        fontWeight={"500"}
                        color={smallTextColor}
                      >
                        HTML
                      </Heading>
                    </Box>
                    <Box>
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
                        90%
                      </Text>
                      <Heading
                        fontSize={{
                          base: "18px",
                          md: "15px",
                          lg: "16px",
                          xl: "16px",
                        }}
                        fontWeight={"500"}
                        color={smallTextColor}
                      >
                        BOOTSTRAP
                      </Heading>
                    </Box>
                    <Box>
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
                        80%
                      </Text>
                      <Heading
                        fontSize={{
                          base: "18px",
                          md: "15px",
                          lg: "16px",
                          xl: "16px",
                        }}
                        fontWeight={"500"}
                        color={smallTextColor}
                      >
                        REACT JS
                      </Heading>
                    </Box>
                    <Box>
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
                        80%
                      </Text>
                      <Heading
                        fontSize={{
                          base: "18px",
                          md: "15px",
                          lg: "16px",
                          xl: "16px",
                        }}
                        fontWeight={"500"}
                        color={smallTextColor}
                      >
                        MUI
                      </Heading>
                    </Box>
                    <Box>
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
                        95%
                      </Text>
                      <Heading
                        fontSize={{
                          base: "18px",
                          md: "15px",
                          lg: "16px",
                          xl: "16px",
                        }}
                        fontWeight={"500"}
                        color={smallTextColor}
                      >
                        WORDPRESS
                      </Heading>
                    </Box>
                  </Flex>
                  <Flex flex={1} flexDir={"column"} gap={5}>
                    <Box>
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
                        90%
                      </Text>
                      <Heading
                        fontSize={{
                          base: "18px",
                          md: "15px",
                          lg: "16px",
                          xl: "16px",
                        }}
                        fontWeight={"500"}
                        color={smallTextColor}
                      >
                        CSS
                      </Heading>
                    </Box>
                    <Box>
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
                        80%
                      </Text>
                      <Heading
                        fontSize={{
                          base: "18px",
                          md: "15px",
                          lg: "16px",
                          xl: "16px",
                        }}
                        fontWeight={"500"}
                        color={smallTextColor}
                      >
                        JAVASCRIPT
                      </Heading>
                    </Box>
                    <Box>
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
                        85%
                      </Text>
                      <Heading
                        fontSize={{
                          base: "18px",
                          md: "15px",
                          lg: "16px",
                          xl: "16px",
                        }}
                        fontWeight={"500"}
                        color={smallTextColor}
                      >
                        TAILWIND CSS
                      </Heading>
                    </Box>
                    <Box>
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
                        95%
                      </Text>
                      <Heading
                        fontSize={{
                          base: "18px",
                          md: "15px",
                          lg: "16px",
                          xl: "16px",
                        }}
                        fontWeight={"500"}
                        color={smallTextColor}
                      >
                        CHAKRA UI
                      </Heading>
                    </Box>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </Box>
        {/* ================ First Row End =====================*/}
      </MainContainer>
    </>
  );
}

export default Credentials;
