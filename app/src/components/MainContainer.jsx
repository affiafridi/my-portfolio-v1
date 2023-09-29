import React, { Children } from "react";
import { Container } from "@chakra-ui/react";
import { keyframes } from "@chakra-ui/react";

const cardAnimation = keyframes`
    from {
      opacity: 0
    }

    to {
      opacity: 1
    }
  `;

function MainContainer(props) {
  const myCardAnimation = `${cardAnimation} 2s`

  return (
    <>
      <Container maxWidth={"full"}  py={"80px"} animation={myCardAnimation}>
        <Container maxWidth={["container.sm", "container.md", "container.lg", "container.xl"]} px={{base: '', md: '2', lg: '3'}}>
          {props.children}
        </Container>
      </Container>
    </>
  );
}

export default MainContainer;
