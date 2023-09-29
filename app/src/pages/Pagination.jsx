import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  ChakraProvider,
  Flex,
  Image,
  Text,
  Heading,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";
import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";
import { BiLinkExternal } from "react-icons/bi";

// Dummy data for demonstration
import { projects } from "../pages/projectData";

function Pagination() {
  const bgGradient = useColorModeValue(
    "linear(to-br, gray.100 -40%, gray.200 100%)",
    "linear(to-br, gray.600 -40%, gray.700 30%, gray.900 100%)"
  );
  const headingColor = useColorModeValue("1A202C", "whiteAlpha.800");
  const smallTextColor = useColorModeValue("gray.600", "whiteAlpha.700");
  const borderColor = useColorModeValue("gray.200", "gray.700");

  const [currentPage, setCurrentPage] = useState(1);
  const reverseProjects = projects.reverse();
  const [data, setData] = useState([]);
  const itemsPerPage = 4; // Number of items to display per page

  useEffect(() => {
    const startIndex = ((currentPage - 1 ) * itemsPerPage) + 2;
    const endIndex = startIndex + itemsPerPage
    const currentPageData = reverseProjects.slice(startIndex, endIndex);
    setData(currentPageData);
  }, [currentPage])

  useEffect(() => {
    const startIndex = 2;
    const endIndex = startIndex + itemsPerPage;
    const currentPageData = reverseProjects.slice(startIndex, endIndex);
    setData(currentPageData);
  }, []);

  const totalPages = Math.ceil((reverseProjects.length - 2) / itemsPerPage);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);

  };

  const renderProjects = () => {

    return (
      data &&
      data.map((project, index) => (
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
          flex={{ base: "full", sm: "full", md: "40%" }}
          key={project.id}
        >
          <Image
            src={project.image}
            alt={project.projectName}
            bg={"blue.500"}
            objectFit={"cover"}
            borderRadius={"20px"}
            width={"full"}
          />
          <Flex
            justifyContent={"space-between"}
            width={"full"}
            alignItems={"center"}
          >
            <Box display={"flex"} flexDir={"column"} gap={1}>
              <Text
                fontSize={{ base: "14px", md: "13px", lg: "13px", xl: "13px" }}
                color={smallTextColor}
              >
                {project.topTitle}
              </Text>
              <Heading
                fontSize={{ base: "16px", md: "19px", lg: "19px", xl: "19px" }}
                fontWeight={"500"}
                color={headingColor}
              >
                {project.projectName}
              </Heading>
            </Box>
            <Box>
              <Link href={project.url} isExternal>
                <BiLinkExternal fontSize={"22px"} />
              </Link>
            </Box>
          </Flex>
        </Flex>
      ))
    );
  };

  const renderPaginationButtons = () => {
    return Array.from({ length: totalPages }, (_, index) => (
      <Button
        key={index}
        onClick={() => handlePageChange(index + 1)}
        colorScheme={currentPage === index + 1 ? "blue" : "gray"}
        ml={2}
      >
        {index + 1}
      </Button>
    ));
  };

  return (
    <Box>
      <Flex gap={7} wrap={"wrap"} justifyContent={"center"}>
        {renderProjects()}
      </Flex>
      <Flex justify="center" align="center" my={8}>
        <Flex>
          <Button
            leftIcon={<BiSolidLeftArrow />}
            onClick={() => handlePageChange(currentPage - 1)}
            isDisabled={currentPage === 1}
          ></Button>
          <Box>
            <Flex>{renderPaginationButtons()}</Flex>
          </Box>
          <Button
            rightIcon={<BiSolidRightArrow />}
            onClick={() => handlePageChange(currentPage + 1)}
            isDisabled={currentPage === totalPages}
            ml={2}
          ></Button>
        </Flex>
      </Flex>
    </Box>
  );
}

export default Pagination;
