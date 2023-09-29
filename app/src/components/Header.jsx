import React from "react";
import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Heading,
  Link,
  Text,
  useColorMode,
  useColorModeValue,
  useDisclosure,
  useMediaQuery,
  
} from "@chakra-ui/react";

import { Link as ReachLink } from "react-router-dom"
import DrawerComp from "./DrawerComp";
import MenuComp from "./MenuComp";
import DarkModeSwitch from "./DarkModeSwitch";


function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isSmallThan992] = useMediaQuery("(min-width: 992px)");
  
  const headingColor = useColorModeValue('1A202C', 'whiteAlpha.800')
  const LinktextColor = useColorModeValue('1A202C', 'whiteAlpha.800')
  const smallTextColor = useColorModeValue('gray.500', 'gray.500')
  const buttonBg = useColorModeValue('#EDF2F7', 'gray.700')
  const buttonTextColor = useColorModeValue('', 'whiteAlpha.800')

  return (
    <Box py={[0, 3, 5, 6]}>
      <Container maxWidth={["container.sm", "container.md", "container.lg", "container.xl"]} px={{base: '5', md: '7', lg: '5'}} pt={4}>
        {
          <Flex
            flexDir={"row"}
            justifyContent={["space-between"]}
            alignItems={"center"}
          >
            <Link as={ReachLink} to='/' _hover={{ textDecor: "none" }}>
              <Heading fontSize={[25, 25, 25, 28, 32]} color={headingColor}>&#60;	AFFI. &#47;&#62;</Heading>
            </Link>
            {isSmallThan992 ? (
              <>
                {/*  Navigation Menu Start */}
                <HStack fontSize={[10, 10, 14, 16, 16]} spacing={[3, 4, 5, 10]}  fontWeight={500} color={LinktextColor}>
                  <Link as={ReachLink} to='about' display={'flex'} gap={2} _hover={{ textDecoration: "none", color: 'gray.400' }}><Text color={smallTextColor}>01.</Text>About</Link>
                  <Link as={ReachLink} to='work' display={'flex'} gap={2} _hover={{ textDecoration: "none", color: 'gray.400' }}><Text color={smallTextColor}>02.</Text>Work</Link>
                  <Link as={ReachLink} to='/pricing' display={'flex'} gap={2} _hover={{ textDecoration: "none", color: 'gray.400' }}><Text color={smallTextColor}>03.</Text>Pricing</Link>
                  <Link as={ReachLink} to='contact' display={'flex'} gap={2} _hover={{ textDecoration: "none", color: 'gray.400' }}><Text color={smallTextColor}>04.</Text>Contact</Link>
                </HStack>
                {/* Navigation Menu End */}

                <Box display={'flex'} alignItems={'center'} gap={3}>
                  <DarkModeSwitch />
                  <Button
                    sx={{ color: {buttonTextColor}, fontSize: "14px" }}
                    bg={buttonBg}
                    py={6}
                    px={8}
                    borderRadius={20}
                    to={'contact'}
                    as={ReachLink}
                  >
                    Let's Talk
                  </Button>
                </Box>
              </>
            ) : (
              <>
              <Flex gap={2}>
                <DarkModeSwitch />
                <MenuComp />
                {/* <DrawerComp isOpen={isOpen} onOpen={onOpen} onClose={onClose} /> */}
              </Flex>
              </>
            )}
          </Flex>
        }
      </Container>
    </Box>
  );
}

export default Header;
