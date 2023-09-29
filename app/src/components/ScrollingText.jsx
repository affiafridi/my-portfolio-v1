import { Box, Text, Mark } from "@chakra-ui/react";
import React from "react";

function ScrollingText() {
  return (
    <>
      <Box
      width={'100%'}
        whiteSpace="nowrap"
        animation="scrollText 12s linear infinite"
      >
        <Text fontSize="14px">
          ON <b>FREELANCE BASIS</b>, I'M OPEN TO WEB PROJECT
          COLLABORATIONS.
        </Text>
      </Box>
    </>
  );
}

export default ScrollingText;
