import { Button, Flex, Grid, GridItem, Heading } from "@chakra-ui/react";
import { InfiniteMovingCards } from "../aceternityComponents/InfiniteMovingCards ";
import { MacbookScroll } from "../aceternityComponents/Macbook";
import CubeBackground from "../assets/images/cube-background-white-grey.png";
import ParticleBackground from "../components/ParticleBackground";

export default function CurrentProjectsSection() {
  const currentProjectDetails = {
    title: "LOTO Management System",
    techStacks: [
      "React",
      "Chakra UI",
      "Javascript",
      "HTML",
      "CSS",
      "Laravel",
      "PHP",
      "Firebase",
      "MySQL",
    ],
    description:
      "LOTO Management System is a full-featured web application designed to streamline and secure the Lockout/Tagout (LOTO) safety process used in industrial environments. This system ensures compliance with safety regulations by guiding users through a standardized, multi-step procedure for isolating hazardous energy during maintenance and servicing operations.",
  };
  return (
    <Flex
      background={"#1f1f26"}
      color={"white"}
      // backgroundImage={`${CubeBackground}`}
      zIndex={2}
      position={"relative"}
      w={"100%"}
      justify={"center"}
      flexDir={"column"}
      alignItems={"center"}
      py={"60px"}
      gap={"40px"}
    >
      {" "}
      <ParticleBackground id={"1"} particles={200} hasLink={false} />
      <Flex
        gap={"60px"}
        flexDir={"column"}
        justify={"center"}
        alignItems={"center"}
      >
        <Flex
          justify={"center"}
          width={"fit-content"}
          position={"relative"}
          flexDir={"column"}
          alignItems={"center"}
        >
          <Flex className="reveal">
            <Heading fontSize={"48px"}>Current Project</Heading>
          </Flex>
          <Flex
            pos={"absolute"}
            bottom={"-5px"}
            w={"120px"}
            h={"5px"}
            bg="linear-gradient(to right,rgb(255, 64, 83), #bf081a)"
            className="revealUnderlineLeft"
          />
        </Flex>
        <Flex h={"870px"} justify={"center"}>
          <MacbookScroll title={"My Latest Project"} />
        </Flex>
      </Flex>
      <Flex
        w={"768px"}
        className="reveal3"
        // justify={"center"}
        gap={"30px"}
        // alignItems={"center"}
        flexDir={"column"}
      >
        <Heading
          bg="linear-gradient(to right,rgb(255, 64, 83), #bf081a)"
          bgClip={"text"}
          fontSize={"32px"}
          color={"#dc143c"}
        >
          {currentProjectDetails.title}
        </Heading>
        <Flex gap={"10px"}>
          {currentProjectDetails.techStacks.map((val) => (
            <Flex
              bg={"#373740"}
              borderRadius={"10px"}
              color={"#ededed"}
              fontSize={"14px"}
              px={"10px"}
              py={"2px"}
            >
              {val}
            </Flex>
          ))}
        </Flex>
        <Flex color={"#ededed"}>{currentProjectDetails.description}</Flex>
        {/* <Flex className="reveal3" gap={"10px"} alignItems={"center"}>
          <Button
            className="animated-fillColor-dark"
            h={"auto"}
            px={"28px"}
            py={"10px"}
            borderRadius={"50px"}
            fontSize={"18px"}
          >
            View Project
          </Button>
        </Flex> */}
      </Flex>
    </Flex>
  );
}
