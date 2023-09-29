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
} from "@chakra-ui/react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import {Link as ReactRouterLink} from 'react-router-dom'
import { BiLinkExternal } from "react-icons/bi";

function ProfilesCard() {
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
        className="secondRowRight"
        flex={1}
        gap={{ base: 10, md: 2 }}
        flexDir={"column"}
        justifyContent={"space-between"}
        borderRadius={"30px"}
        p={5}
        pt={12}
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
        <Flex justifyContent={"center"} gap={5} p={5}>
          <FaFacebookF size={"2rem"} border={"1px"} />
          <FaLinkedinIn size={"2.2rem"} />
        </Flex>
        <Flex justifyContent={"space-around"} alignItems={"center"}>
          <Box display={"flex"} flexDir={"column"} gap={1}>
            <Text
              fontSize={{ base: "14px", md: "13px", lg: "13px", xl: "13px" }}
              color={smallTextColor}
            >
              LET'S CONNECT
            </Text>
            <Heading
              fontSize={{ base: "20px", md: "19px", lg: "19px", xl: "19px" }}
              fontWeight={"500"}
              color={headingColor}
            >
              Profiles
            </Heading>
          </Box>
          <ChakraLink to={'/contact'} as={ReactRouterLink}>
            <Box>
              <BiLinkExternal fontSize={"22px"} />
            </Box>
          </ChakraLink>
        </Flex>
      </Flex>
    </>
  );
}

export default ProfilesCard;
