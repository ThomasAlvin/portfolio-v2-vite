import { Flex, Link } from "@chakra-ui/react";
import { useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { AiFillInstagram } from "react-icons/ai";
import { FaGithub, FaLinkedin, FaRegCopyright } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import triangleBackground from "../assets/images/medium-triangles-crimson.webp";

export default function Footer({ onActive }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.6 });

  useEffect(() => {
    if (isInView) {
      onActive("contact");
    }
  }, [isInView, onActive]);
  return (
    <Flex
      ref={ref}
      id="contact"
      w={"100%"}
      color={"white"}
      backgroundImage={`${triangleBackground}`}
      bgSize="auto"
      bgPosition="top left"
      flexDir={"column"}
      justify={"center"}
      py={"50px"}
    >
      <Flex w={"100%"} justify={"center"}>
        <Flex maxW={"1200px"} gap={"30px"} flexDir={"column"}>
          <Flex
            px={"30px"}
            flexDir={{ base: "column", md: "row" }}
            gap={{ base: "30px", sm: "0px" }}
          >
            <Flex
              w={{ base: "100%", md: "50%" }}
              flexDir={"column"}
              gap={"30px"}
            >
              <Flex fontWeight={700} fontSize={"20px"}>
                Connect With Me
              </Flex>
              <Flex flexDir={"column"} gap={"10px"}>
                <Flex alignItems={"center"} gap={"10px"}>
                  <Flex fontSize={"24px"}>
                    <IoIosMail />
                  </Flex>
                  <Flex>thomasalvinyeo@gmail.com</Flex>
                </Flex>
                <Flex alignItems={"center"} gap={"10px"}>
                  <Flex fontSize={"24px"}>
                    <FaLinkedin />
                  </Flex>
                  <Link
                    href={
                      "https://www.linkedin.com/in/thomas-alvin-yeo-4b1189251/"
                    }
                    target="_blank"
                  >
                    linkedin.com/in/thomas-alvin-yeo-4b1189251/
                  </Link>
                </Flex>
                <Flex alignItems={"center"} gap={"10px"}>
                  <Flex fontSize={"24px"}>
                    <FaGithub />
                  </Flex>
                  <Link
                    href={"https://www.github.com/ThomasAlvin"}
                    target="_blank"
                  >
                    github.com/ThomasAlvin
                  </Link>
                </Flex>
                <Flex alignItems={"center"} gap={"10px"}>
                  <Flex fontSize={"24px"}>
                    <AiFillInstagram />
                  </Flex>
                  <Link
                    href={"https://www.instagram.com/thomas.a.y/"}
                    target="_blank"
                  >
                    instagram.com/thomas.a.y/
                  </Link>
                </Flex>
              </Flex>
            </Flex>
            <Flex flexDir={"column"} w={{ base: "100%", md: "50%" }}>
              <Flex fontWeight={700} fontSize={"20px"}>
                Thomas Alvin Yeo
              </Flex>
              <Flex>
                Full Stack Web Developer passionate about creating interactive
                web applications and experiences. Reach out to me for innovative
                web solutions.
              </Flex>
            </Flex>
          </Flex>
          <Flex h={"1px"} bg={"white"}></Flex>
          <Flex
            px={"30px"}
            fontWeight={700}
            fontSize={"16px"}
            justify={{ base: "start", sm: "center" }}
            gap={"5px"}
            alignItems={"center"}
          >
            <Flex flexDir={{ base: "column", sm: "row" }}>
              <Flex gap={"5px"} alignItems={"center"}>
                <Flex>
                  <FaRegCopyright />
                </Flex>
                <Flex>Copyright 2024.&nbsp;</Flex>
              </Flex>
              <Flex>Made by Thomas Alvin Yeo</Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
