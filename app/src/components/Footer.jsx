import React from 'react'
import {Link as ReachLink} from 'react-router-dom'
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

function Footer() {
  const headingColor = useColorModeValue("1A202C", "whiteAlpha.800");
  const smallTextColor = useColorModeValue("gray.600", "whiteAlpha.700");
  const borderColor = useColorModeValue("gray.200", "gray.700");

  return (
    <>
    <Flex
            pt={{base: '20px', md: '60px', lg: '60px'}}
            flexDir={"column"}
            alignContent={"center"}
            alignItems={"center"}
            gap={7}
            pb={'80px'}
          >
            <Box>
              <Link as={ReachLink} to='/' _hover={{ textDecor: "none" }}>
                <Heading
                  fontSize={[28, 35, 40, 40, 40]}
                  color={headingColor}
                >
                  AFFI.
                </Heading>
              </Link>
            </Box>
            <Box>
              <HStack
                fontSize={[14, 15, 15, 16, 16]}
                spacing={[3, 4, 5, 10]}
                fontWeight={500}
                color={smallTextColor}
              >
                <Link
                  as={ReachLink} to='/'
                  display={"flex"}
                  gap={2}
                  _hover={{ textDecoration: "none", color: "gray.400" }}
                >
                  HOME
                </Link>
                <Link
                  as={ReachLink} to='about'
                  display={"flex"}
                  gap={2}
                  _hover={{ textDecoration: "none", color: "gray.400" }}
                >
                  ABOUT
                </Link>
                <Link
                  as={ReachLink} to='work'
                  display={"flex"}
                  gap={2}
                  _hover={{ textDecoration: "none", color: "gray.400" }}
                >
                  WORK
                </Link>
                <Link
                  as={ReachLink} to='/contact'
                  display={"flex"}
                  gap={2}
                  _hover={{ textDecoration: "none", color: "gray.400" }}
                >
                  CONTACT
                </Link>
              </HStack>
            </Box>
            <Box display={"flex"} flexDir={"column"} gap={2}>
              <Text
                fontSize={{base: "12px", md: "13px", lg: "13px" }}
                color={smallTextColor}
                textAlign={"center"}
              >
                Made with ❤️ by AFFI
              </Text>
              <Text
                fontSize={{base: "12px", md: "13px", lg: "13px" }}
                color={smallTextColor }
                textAlign={"center"}
              >
                2023 © All rights reserved
              </Text>
            </Box>
          </Flex>
    </>
  )
}

export default Footer