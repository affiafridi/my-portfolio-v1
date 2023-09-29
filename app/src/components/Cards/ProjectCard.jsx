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
import sign from "../../assets/sign.png";
import myWork from "../../assets/my-works.png";
import me from "../../assets/logo.png";
import arrow from "../../assets/icons/arrow.svg";
import { BiLinkExternal } from "react-icons/bi";

function ProjectCard() {
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
        className="firstRowLeft"
        flexDir={{ base: "column", md: "column" }}
        alignItems={{ base: "center", md: "start", lg: "start" }}
        gap={{ base: 5, md: 10, lg: 5, xl: 5 }}
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
          src={me}
          bg={"blue.500"}
          objectFit={"cover"}
          borderRadius={"20px"}
          width={'full'}
        />
        <Flex justifyContent={'space-between'} width={'full'} alignItems={"center"}>
          <Box display={"flex"} flexDir={"column"} gap={1} >
            <Text
              fontSize={{ base: "14px", md: "13px", lg: "13px", xl: "13px" }}
              color={smallTextColor}
            >
              SHOWCASE
            </Text>
            <Heading
              fontSize={{ base: "16px", md: "19px", lg: "19px", xl: "19px" }}
              fontWeight={"500"}
              color={headingColor}
            >
              Projects
            </Heading>
          </Box>
          <Box>
          <BiLinkExternal fontSize={'22px'}/>
          </Box>
        </Flex>
      </Flex>
    </>
  );
}

export default ProjectCard;
