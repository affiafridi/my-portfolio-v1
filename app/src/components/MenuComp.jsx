import React from "react";
import { Link as ReachLink } from "react-router-dom";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Text,
  Link,
  useColorModeValue,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  AddIcon,
  ExternalLinkIcon,
  RepeatIcon,
  EditIcon,
} from "@chakra-ui/icons";

function MenuComp() {
  const smallTextColor = useColorModeValue("gray.500", "gray.500");

  return (
    <>
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label="Options"
          icon={<HamburgerIcon />}
          variant="outline"
        />
        <MenuList>
          <MenuItem as={ReachLink} to="/">
            <Link
              display={"flex"}
              gap={2}
              _hover={{ textDecoration: "none", color: "gray.400" }}
            >
              <Text color={smallTextColor}>01.</Text>Home
            </Link>
          </MenuItem>
          <MenuItem as={ReachLink} to="/about">
            <Link
              display={"flex"}
              gap={2}
              _hover={{ textDecoration: "none", color: "gray.400" }}
            >
              <Text color={smallTextColor}>02.</Text>About
            </Link>
          </MenuItem>
          <MenuItem as={ReachLink} to="/work">
            <Link
              display={"flex"}
              gap={2}
              _hover={{ textDecoration: "none", color: "gray.400" }}
            >
              <Text color={smallTextColor}>03.</Text>Work
            </Link>
          </MenuItem>
          <MenuItem as={ReachLink} to="/credentials">
            <Link
              display={"flex"}
              gap={2}
              _hover={{ textDecoration: "none", color: "gray.400" }}
            >
              <Text color={smallTextColor}>04.</Text>Credentials
            </Link>
          </MenuItem>
          <MenuItem as={ReachLink} to="/contact">
            <Link
              display={"flex"}
              gap={2}
              _hover={{ textDecoration: "none", color: "gray.400" }}
            >
              <Text color={smallTextColor}>05.</Text>Contact
            </Link>
          </MenuItem>
        </MenuList>
      </Menu>
    </>
  );
}

export default MenuComp;
