import { Flex, Heading, Link } from "@chakra-ui/react";

export default function Navbar() {
  return (
    <Flex
      zIndex={3}
      w={"100%"}
      justify={"center"}
      bg={"#16161d"}
      position={"absolute"}
    >
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
        <Flex gap={"40px"} fontSize={"20px"}>
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
      </Flex>
    </Flex>
  );
}
