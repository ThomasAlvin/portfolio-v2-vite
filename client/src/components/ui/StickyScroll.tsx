"use client";
import { useEffect, useRef, useState, ReactNode } from "react";
import { useMotionValueEvent, useScroll } from "motion/react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Link,
  Tooltip,
} from "@chakra-ui/react";
import { CardStack } from "../../aceternityComponents/CardStack";
import { getSkillIcon } from "../../utils/getSkillIcon";
import { FaGithub, FaGlobe } from "react-icons/fa";
const MotionFlex = motion(Flex);

export const StickyScroll = ({
  myProjects,
  contentClassName,
}: {
  myProjects: {
    id: string | number;
    title: string;
    techStacks: string[];
    description: string;
    projectType: string;
    projectImages: {
      id: number;
      image: string;
      pageName: string;
    }[];
    route: string;
    githubLink: string;
    demoLink: string;
    content?: ReactNode | any;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = useState(0);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    // uncomment line 22 and comment line 23 if you DONT want the overflow container and want to have it change on the entire page scroll
    target: ref,
    // container: ref,
    offset: ["start start", "end start"],
  });
  const revealFromLeft = {
    hidden: {
      opacity: 0,
      x: -40,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };
  const cardLength = myProjects.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = myProjects.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0,
    );
    setActiveCard(closestBreakpointIndex);
  });

  const backgroundColors = [
    "#1f1f26", // slate-900
    "#1f1f26", // black
    "#1f1f26", // neutral-900
  ];
  const linearGradients = [
    "linear-gradient(to bottom right, #06b6d4, #10b981)", // cyan-500 to emerald-500
    "linear-gradient(to bottom right, #ec4899, #6366f1)", // pink-500 to indigo-500
    "linear-gradient(to bottom right, #f97316, #eab308)", // orange-500 to yellow-500
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(
    linearGradients[0],
  );

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard]);

  return (
    <motion.div
      // style={{ backgroundImage: `url(${CubeBackground})` }}
      ref={ref}
      className="relative flex w-full justify-center space-x-10 py-10"
    >
      <Flex w={"1200px"} gap={"20px"} flexDir={{ base: "column", lg: "row" }}>
        <div className="div relative flex w-full items-start justify-center px-4 py-10">
          <Flex
            w={"100%"}
            maxW={"600px"}
            flexDir={"column"}
            gap={{ base: "150px", lg: "180px" }}
          >
            {myProjects.map((item, index) => (
              <Flex flexDir={"column"} gap={"50px"}>
                <Center alignItems={"center"} w={"100%"}>
                  <Flex
                    alignItems={"center"}
                    flexDir={{ base: "column", lg: "row" }}
                    w={"100%"}
                    gap={{ base: "60px", lg: "40px" }}
                  >
                    <Flex
                      flex={1}
                      w={"100%"}
                      flexDir={"column"}
                      position={"relative"}
                      gap={"20px"}
                    >
                      <CardStack items={item.projectImages} />
                    </Flex>
                  </Flex>
                </Center>
                <Flex
                  display={{ base: "flex", lg: "none" }}
                  flex={1}
                  maxW={"800px"}
                  flexDir={"column"}
                  justify={"space-between"}
                >
                  <Flex flexDir={"column"} gap={{ base: "10px", lg: "20px" }}>
                    <Flex flexDir={"column"}>
                      <Heading
                        bg="linear-gradient(to right,rgb(255, 64, 83), #bf081a)"
                        bgClip={"text"}
                        fontSize={{ base: "16px", sm: "20px", md: "24px" }}
                        color={"#dc143c"}
                        _hover={item.demoLink ? { color: "#940d28" } : {}}
                      >
                        {item.demoLink ? (
                          <Link
                            isExternal
                            _hover={{ textDecor: "none" }}
                            href={item.demoLink}
                          >
                            {item.title}
                          </Link>
                        ) : (
                          item.title
                        )}
                      </Heading>
                      <Flex
                        color={"#848484"}
                        fontSize={{ base: "12px", sm: "14px", md: "16px" }}
                      >
                        {item.projectType} Project
                      </Flex>
                    </Flex>
                    <Flex gap={"10px"} flexWrap={"wrap"}>
                      {item.techStacks.map((val) => (
                        <Tooltip label={val} placement="top" hasArrow>
                          <Flex
                            whiteSpace={"nowrap"}
                            bg={"white"}
                            boxShadow={"0px 0px 3px rgba(50,50,93,0.5)"}
                            borderRadius={"10px"}
                            color={"#373740"}
                            fontSize={"24px"}
                            p={"4px"}
                            w={"32px"}
                            h={"32px"}
                            justify={"center"}
                            alignItems={"center"}
                          >
                            {getSkillIcon(val)}
                          </Flex>
                        </Tooltip>
                      ))}
                    </Flex>
                    <Flex
                      color={"black"}
                      fontSize={{ base: "12px", sm: "14px", md: "16px" }}
                    >
                      {item.description}
                    </Flex>
                    <Flex gap={"10px"}>
                      {item.githubLink && (
                        <Flex
                          className="reveal3"
                          gap={"10px"}
                          alignItems={"center"}
                        >
                          <Tooltip
                            label={"Check on Github"}
                            placement="top"
                            hasArrow
                          >
                            <Link isExternal href={item.githubLink}>
                              <Flex
                                p={"5px"}
                                boxShadow={"0px 0px 3px rgba(50,50,93,0.5)"}
                                borderRadius={"full"}
                                _hover={{ bg: "#ededed" }}
                                bg={"white"}
                                color={"black"}
                                fontSize={"24px"}
                              >
                                <FaGithub />
                              </Flex>
                            </Link>
                          </Tooltip>
                        </Flex>
                      )}
                      {item.demoLink && (
                        <Flex
                          className="reveal3"
                          gap={"10px"}
                          alignItems={"center"}
                        >
                          <Tooltip
                            label={"Live Project"}
                            placement="top"
                            hasArrow
                          >
                            <Link isExternal href={item.demoLink}>
                              <Flex
                                p={"7px"}
                                boxShadow={"0px 0px 3px rgba(50,50,93,0.5)"}
                                borderRadius={"full"}
                                _hover={{ bg: "#ededed" }}
                                bg={"white"}
                                color={"black"}
                                fontSize={"20px"}
                              >
                                <FaGlobe />
                              </Flex>
                            </Link>
                          </Tooltip>
                        </Flex>
                      )}
                    </Flex>
                  </Flex>
                </Flex>
              </Flex>
            ))}
          </Flex>
        </div>

        <Flex
          display={{ base: "none", lg: "flex" }}
          h={"fit-content"}
          position={"sticky"}
          top={"120px"}
          right={0}
          color={"white"}
        >
          <MotionFlex
            key={activeCard}
            flex={1}
            maxW={"800px"}
            flexDir={"column"}
            variants={revealFromLeft}
            initial="hidden"
            animate="visible"
            justify={"space-between"}
          >
            <Flex flexDir={"column"} gap={"20px"}>
              <Flex flexDir={"column"}>
                <Heading
                  bg="linear-gradient(to right,rgb(255, 64, 83), #bf081a)"
                  bgClip={"text"}
                  fontSize={{ base: "16px", sm: "24px" }}
                  color={"#dc143c"}
                  _hover={
                    myProjects[activeCard].demoLink ? { color: "#940d28" } : {}
                  }
                >
                  {myProjects[activeCard].demoLink ? (
                    <Link
                      isExternal
                      _hover={{ textDecor: "none" }}
                      href={myProjects[activeCard].demoLink}
                    >
                      {myProjects[activeCard].title}
                    </Link>
                  ) : (
                    myProjects[activeCard].title
                  )}
                </Heading>
                <Flex color={"#848484"}>
                  {myProjects[activeCard].projectType} Project
                </Flex>
              </Flex>
              <Flex gap={"10px"} flexWrap={"wrap"}>
                {myProjects[activeCard].techStacks.map((val) => (
                  <Tooltip label={val} placement="top" hasArrow>
                    <Flex
                      whiteSpace={"nowrap"}
                      bg={"white"}
                      boxShadow={"0px 0px 3px rgba(50,50,93,0.5)"}
                      borderRadius={"10px"}
                      color={"#373740"}
                      fontSize={"24px"}
                      p={"4px"}
                      w={"32px"}
                      h={"32px"}
                      justify={"center"}
                      alignItems={"center"}
                    >
                      {getSkillIcon(val)}
                    </Flex>
                  </Tooltip>
                ))}
              </Flex>
              <Flex color={"black"}>{myProjects[activeCard].description}</Flex>
              <Flex gap={"10px"}>
                {myProjects[activeCard].githubLink && (
                  <Flex className="reveal3" gap={"10px"} alignItems={"center"}>
                    <Tooltip label={"Check on Github"} placement="top" hasArrow>
                      <Link isExternal href={myProjects[activeCard].githubLink}>
                        <Flex
                          p={"5px"}
                          boxShadow={"0px 0px 3px rgba(50,50,93,0.5)"}
                          borderRadius={"full"}
                          _hover={{ bg: "#ededed" }}
                          bg={"white"}
                          color={"black"}
                          fontSize={"24px"}
                        >
                          <FaGithub />
                        </Flex>
                      </Link>
                    </Tooltip>
                  </Flex>
                )}
                {myProjects[activeCard].demoLink && (
                  <Flex className="reveal3" gap={"10px"} alignItems={"center"}>
                    <Tooltip label={"Live Project"} placement="top" hasArrow>
                      <Link isExternal href={myProjects[activeCard].demoLink}>
                        <Flex
                          p={"7px"}
                          boxShadow={"0px 0px 3px rgba(50,50,93,0.5)"}
                          borderRadius={"full"}
                          _hover={{ bg: "#ededed" }}
                          bg={"white"}
                          color={"black"}
                          fontSize={"20px"}
                        >
                          <FaGlobe />
                        </Flex>
                      </Link>
                    </Tooltip>
                  </Flex>
                )}
              </Flex>
            </Flex>
          </MotionFlex>
        </Flex>
      </Flex>
    </motion.div>
  );
};
