import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Heading,
  Link,
  Text,
  useDisclosure,
  useMediaQuery,
} from "@chakra-ui/react";
import React from "react";
import DrawerComp from "./DrawerComp";

function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isSmallThan768] = useMediaQuery("(min-width: 768px)");
  return (
    <Box bg={"#0F0F0F"} py={[0, 3, 5, 6]}>
      <Container maxWidth={["container.sm", "container.md", "container.lg", "container.xl"]}>
        {
          <Flex
            flexDir={"row"}
            justifyContent={["space-between"]}
            alignItems={"center"}
          >
            <Link top={"#"} _hover={{ textDecor: "none" }}>
              <Heading fontSize={[16, 20, 24, 28, 32]} fontFamily={'source code pro'} color={"whiteAlpha.900"}>AFFI.</Heading>
            </Link>
            {isSmallThan768 ? (
              <>
                {/*  Navigation Menu Start */}
                <HStack fontSize={[10, 10, 14, 16, 16]} spacing={[3, 4, 5, 10]} fontFamily={'source code pro'} fontWeight={500} color={"whiteAlpha.900"}>
                  <Link display={'flex'} gap={2} _hover={{ textDecoration: "none", color: 'gray.400' }}><Text color={'gray.400'}>01.</Text>Home</Link>
                  <Link display={'flex'} gap={2} _hover={{ textDecoration: "none", color: 'gray.400' }}><Text color={'gray.400'}>02.</Text>About</Link>
                  <Link display={'flex'} gap={2} _hover={{ textDecoration: "none", color: 'gray.400' }}><Text color={'gray.400'}>03.</Text>Work</Link>
                  <Link display={'flex'} gap={2} _hover={{ textDecoration: "none", color: 'gray.400' }}><Text color={'gray.400'}>04.</Text>Contact</Link>
                </HStack>
                {/* Navigation Menu End */}

                <Box>
                  <Button
                    sx={{ color: "#ffff", fontSize: "14px" }}
                    bg={"#323232"}
                    py={6}
                    px={8}
                    borderRadius={20}
                    _hover={{ bg: "#ffff", color: "#323232" }}
                    fontFamily={'source code pro'}
                  >
                    Let's Talk
                  </Button>
                </Box>
              </>
            ) : (
              <>
                <DrawerComp isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
              </>
            )}
          </Flex>
        }
      </Container>
    </Box>
  );
}

export default Header;
