import { Collapse, Flex, Heading, Link, useDisclosure } from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Navbar() {
  const { onOpen, isOpen, onClose, onToggle } = useDisclosure();
  return (
    <Flex
      zIndex={3}
      w={"100%"}
      justify={"center"}
      bg={"#16161d"}
      position={"absolute"}
    >
      <Flex justify={"center"} w={"100%"} position={"relative"}>
        <Flex
          maxW={"1200px"}
          w={"100%"}
          px={"20px"}
          h={"80px"}
          alignItems={"center"}
          bg={"#16161d"}
          color={"white"}
          justify={"space-between"}
        >
          <Heading fontSize={"32px"}>
            <Flex>
              <Flex
                bg="linear-gradient(to right,rgb(255, 64, 83), #bf081a)"
                bgClip="text"
              >
                Tho
              </Flex>
              mas
            </Flex>
          </Heading>
          <Flex
            display={{ base: "none", md: "flex" }}
            gap={"40px"}
            fontSize={"20px"}
          >
            <Link
              cursor={"pointer"}
              _hover={{ color: "#dc143c" }}
              transition={"color 0.1s ease-in-out"}
            >
              Home
            </Link>
            <Link
              href="/#about"
              cursor={"pointer"}
              _hover={{ color: "#dc143c" }}
              transition={"color 0.1s ease-in-out"}
            >
              About
            </Link>
            <Link
              href="/#projects"
              cursor={"pointer"}
              _hover={{ color: "#dc143c" }}
              transition={"color 0.1s ease-in-out"}
            >
              Projects
            </Link>
            <Link
              href="/#contact"
              cursor={"pointer"}
              _hover={{ color: "#dc143c" }}
              transition={"color 0.1s ease-in-out"}
            >
              Contact
            </Link>
          </Flex>
          <Flex
            display={{ base: "flex", md: "none" }}
            cursor={"pointer"}
            onClick={onToggle}
            fontSize={"32px"}
            _hover={{ color: "#dc143c" }}
          >
            <GiHamburgerMenu />
          </Flex>
        </Flex>
        <Collapse in={isOpen}>
          <Flex
            flexDir={"column"}
            display={{ base: "flex", sm: "none" }}
            bg={"#1f1f26"}
            width={"100%"}
            position={"absolute"}
            top={"80px"}
            left={0}
            borderBottom={"1px solid #848484"}
            color={"white"}
          >
            <Link
              style={{ textDecoration: "none" }}
              cursor={"pointer"}
              transition={"color 0.1s ease-in-out"}
            >
              <Flex p={"10px"} _hover={{ bg: "#2b2b30", color: "#dc143c" }}>
                Home
              </Flex>
            </Link>
            <Link
              style={{ textDecoration: "none" }}
              href="/#about"
              cursor={"pointer"}
              transition={"color 0.1s ease-in-out"}
            >
              <Flex p={"10px"} _hover={{ bg: "#2b2b30", color: "#dc143c" }}>
                About
              </Flex>
            </Link>
            <Link
              style={{ textDecoration: "none" }}
              href="/#projects"
              cursor={"pointer"}
              transition={"color 0.1s ease-in-out"}
            >
              <Flex p={"10px"} _hover={{ bg: "#2b2b30", color: "#dc143c" }}>
                Projects
              </Flex>
            </Link>
            <Link
              style={{ textDecoration: "none" }}
              href="/#contact"
              cursor={"pointer"}
              transition={"color 0.1s ease-in-out"}
            >
              <Flex p={"10px"} _hover={{ bg: "#2b2b30", color: "#dc143c" }}>
                Contact
              </Flex>
            </Link>
          </Flex>
        </Collapse>
      </Flex>
    </Flex>
  );
}
