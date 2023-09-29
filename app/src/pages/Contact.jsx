import React, { useRef, useState } from "react";
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
  Mark,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  VStack,
  Alert,
  AlertIcon,
  CloseButton,
} from "@chakra-ui/react";

import { Link as ReactRouterLink } from "react-router-dom";
import me from "../assets/logo.png";
import icon from "../assets/icons/icon2.png";
import { BiLinkExternal } from "react-icons/bi";
import { GrMail } from "react-icons/gr";
import { FaWhatsappSquare } from "react-icons/fa";
import { PiMapPinFill } from "react-icons/pi";
import {
  BiLogoInstagram,
  BiLogoLinkedin,
  BiLogoTwitter,
  BiLogoFacebook,
} from "react-icons/bi";
import emailjs from 'emailjs-com';
// My Components
import MainContainer from "../components/MainContainer";

function Contact() {
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

  const initialFormData = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const [formErrors, setFormErrors] = useState({});
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_vlq8k8r', 'template_aoeiakw', form.current, 'kEpaHkwmyoxlvRpyo')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
    }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    const errors = {};
    e.preventDefault();
    if (!formData.name) errors.name = "Name is required";
    if (!formData.email) errors.email = "Email is required";
    if (!formData.subject) errors.subject = "Subject is required";
    if (!formData.message) errors.message = "Message is required";

    if (Object.keys(errors).length === 0) {
      emailjs
        .send(
          'service_vlq8k8r',
          'template_aoeiakw',
          formData, // Pass the form data
          'kEpaHkwmyoxlvRpyo' // Your EmailJS user ID
        )
        .then((response) => {
          console.log('Email sent:', response);
          // Show a success message to the user
          setIsFormSubmitted(true);
          setFormData(initialFormData); // Reset the form data
        })
        .catch((error) => {
          console.error('Email error:', error);
          // Handle the error, possibly show an error message to the user
        });
    } else {
      setFormErrors(errors);
    }
  };

  return (
    <>
      <MainContainer>
        {/* ===================== First Row Start ======================== */}

        <Box
          className="firstRow"
          display={"flex"}
          flexDir={{ base: "column", md: "row", lg: "row", xl: "row" }}
          gap={{ base: 12, md: 5, lg: 16, xl: 16 }}
          alignItems={{ base: 'stretch', md: "start", lg: "start" }}
        >
          <Flex
            className="firstRowLeft"
            flexDir={{ base: "column", md: "column" }}
            alignItems={{ base: "start", md: "start", lg: "start" }}
            gap={{ base: 5, md: 10, lg: 10, xl: 10 }}
            p={8}
            borderRadius={"30px"}
            bgGradient={bgGradient}
            border={"1px"}
            borderColor={borderColor}
            top={20}
            width={{ base: "full", md: "40%", lg: "auto", xl: "auto" }}
          >
            <Flex flexDir={"column"} gap={4}>
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
                CONTACT INFO
              </Heading>
              <Flex gap={5}>
                <Box display={"flex"} alignItems={"center"}>
                  <GrMail fontSize={"25px"} />
                </Box>
                <Box
                  display={"flex"}
                  flex={1}
                  flexDir={"column"}
                  justifyContent={"center"}
                >
                  <Text
                    color={smallTextColor}
                    textAlign={"start"}
                    fontWeight={"500"}
                    fontSize={"15px"}
                  >
                    affiafridi.dev@gmail.com
                  </Text>
                </Box>
              </Flex>
              <Flex gap={5}>
                <Box display={"flex"} alignItems={"center"}>
                  <FaWhatsappSquare fontSize={"25px"} />
                </Box>
                <Box
                  display={"flex"}
                  flex={1}
                  flexDir={"column"}
                  justifyContent={"center"}
                >
                  <Text
                    color={smallTextColor}
                    textAlign={"start"}
                    fontWeight={"500"}
                    fontSize={"15px"}
                  >
                    +92 340 6560 560
                  </Text>
                </Box>
              </Flex>
              <Flex gap={5}>
                <Box display={"flex"} alignItems={"center"}>
                  <PiMapPinFill fontSize={"25px"} />
                </Box>
                <Box
                  display={"flex"}
                  flex={1}
                  flexDir={"column"}
                  justifyContent={"center"}
                >
                  <Text
                    color={smallTextColor}
                    textAlign={"start"}
                    fontWeight={"500"}
                    fontSize={"15px"}
                  >
                    Peshawar, Pakistan
                  </Text>
                </Box>
              </Flex>
            </Flex>
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
                SOCIAL INFO
              </Heading>
              <Flex
                className="socialIcons"
                fontSize={"28px"}
                gap={5}
                justifyContent={"center"}
                width={"full"}
                mt={5}
              >
                <Link href="https://facebook.com/affiafridi" isExternal>
                  <BiLogoFacebook />
                </Link>
                <Link href="https://linkedin.com/affi" isExternal>
                  <BiLogoLinkedin />
                </Link>
                <Link href="https://twitter.com/affiafridii" isExternal>
                  <BiLogoTwitter />
                </Link>
                <Link href="https://instagram.com/affiafridi" isExternal>
                  <BiLogoInstagram />
                </Link>
              </Flex>
            </Box>
          </Flex>

          {/* ================= Form Section =============================================== */}

          <Flex className="firstRowRight" flexDir={"column"} flex={2} gap={1}>
            <Flex
              className="firstRowRight__top"
              flexDir={"column"}
              flex={1}
              gap={16}
              p={{ base: 1, lg: 6 }}
              mt={{ base: "1", md: "0", lg: "0" }}
              borderRadius={"30px"}
              bgGradient={bgGradient}
              border={"1px"}
              borderColor={borderColor}
            >
              <Flex className="Contact__LeftSection" flexDir={"column"} gap={6}>
                <Flex
                  className="thirdRowRight"
                  flexDir={"column"}
                  flex={1}
                  justifyContent={"flex-end"}
                  position={"relative"}
                  p={6}
                  gap={5}
                  borderRadius={"30px"}
                  borderColor={borderColor}
                >
                  <Flex mt={{ base: 10 }}>
                    <Flex flex={1} flexDir={"column"}>
                      <Heading
                        color={headingColor}
                        fontSize={{ base: "25px", md: "40px", lg: "40px" }}
                        fontWeight={"500"}
                      >
                        Let's work <Mark color={"blue.400"}> together.</Mark>
                      </Heading>
                      {/* ======================= Form Start ==================== */}

                      <Box mt={5}>
                        {isFormSubmitted && (
                          <Alert status="success" mb={4} borderRadius={'4px'}>
                            <AlertIcon />
                            Thanks reaching out!. I'll get back to you as soon as possible.
                            <CloseButton
                              position="absolute"
                              right="8px"
                              top="8px"
                              onClick={() => setIsFormSubmitted(false)}
                            />
                          </Alert>
                        )}
                        <form ref={form} onSubmit={handleSubmit}>
                          <VStack spacing={4} align="start">
                            <FormControl
                              isRequired
                              isInvalid={!!formErrors.name}
                            >
                              <FormLabel>Name</FormLabel>
                              <Input
                                bg={colorMode === 'light' ? 'gray.100' : 'gray.700'}
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                              />
                            </FormControl>
                            <FormControl
                              isRequired
                              isInvalid={!!formErrors.email}
                            >
                              <FormLabel>Email</FormLabel>
                              <Input
                                bg={colorMode === 'light' ? 'gray.100' : 'gray.700'}
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                              />
                            </FormControl>
                            <FormControl
                              isRequired
                              isInvalid={!!formErrors.subject}
                            >
                              <FormLabel>Subject</FormLabel>
                              <Input
                                bg={colorMode === 'light' ? 'gray.100' : 'gray.700'}
                                type="text"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                              />
                            </FormControl>
                            <FormControl
                              isRequired
                              isInvalid={!!formErrors.message}
                            >
                              <FormLabel>Message</FormLabel>
                              <Textarea
                                bg={colorMode === 'light' ? 'gray.100' : 'gray.700'}
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                              />
                            </FormControl>
                            <Button
                              type="submit"
                              borderRadius={"20px"}
                              px={10}
                              fontSize={"15px"}
                              color={"whiteAlpha.900"}
                              bg={"blue.600"}
                            >
                              Submit
                            </Button>
                          </VStack>
                        </form>
                      </Box>

                      {/* ======================= Form End ==================== */}
                    </Flex>
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

export default Contact;
