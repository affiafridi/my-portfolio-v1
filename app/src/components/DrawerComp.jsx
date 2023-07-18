import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Input,
  IconButton,
  VStack,
  Link,
  Heading,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

function DrawerComp({ isOpen, onOpen, onClose }) {
  return (
    <div>
      <IconButton
        colorScheme="black"
        icon={<HamburgerIcon color="white" boxSize={7} />}
        onClick={onOpen}
      />
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bg="black">
          <DrawerCloseButton color="white" />

          <DrawerBody sx={{ paddingTop: "80px" }}>
            {/*  Navigation Menu Start */}
            <VStack spacing={10} color={"whiteAlpha.900"}>
              <Link _hover={{ textDecoration: "none" }}>Home</Link>
              <Link _hover={{ textDecoration: "none" }}>About</Link>
              <Link _hover={{ textDecoration: "none" }}>Work</Link>
              <Link _hover={{ textDecoration: "none" }}>Contact</Link>
            </VStack>
            {/* Navigation Menu End */}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  );
}

export default DrawerComp;
