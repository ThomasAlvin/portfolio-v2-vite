import { Flex, Image } from "@chakra-ui/react";

export default function ProjectCard({ image }) {
  return (
    <Flex
      bg={"#f8f9fa"}
      color={"black"}
      flexDir={"column"}
      boxShadow={"0px 0px 10px rgba(255, 255, 255, 0.5)"}
    >
      <Flex p={"10px"} pb={"0px"}>
        <Image h={"200px"} border={"2px solid #dedede"} src={image}></Image>
      </Flex>
      <Flex px={"20px"} py={"10px"} flexDir={"column"}>
        <Flex fontSize={"24px"}>My UI Design Book</Flex>
        <Flex fontSize={"18px"} color={"#848484"}>
          Web Project
        </Flex>
      </Flex>
    </Flex>
  );
}
