import { Flex, Tooltip } from "@chakra-ui/react";
import { BsFillTriangleFill } from "react-icons/bs";
import { FaDiamond } from "react-icons/fa6";
import { IoArrowUpCircleOutline } from "react-icons/io5";
import {
  TbHexagonFilled,
  TbPentagonFilled,
  TbSquareFilled,
  TbTriangleFilled,
} from "react-icons/tb";

export default function HomeSectionNavigator() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <Flex
      onClick={handleScrollToTop}
      _hover={{
        bg: "linear-gradient(to right,rgb(237, 44, 64),rgb(145, 2, 16))",
      }}
      aspectRatio={1}
      flexDir={"column"}
      zIndex={3}
      width={"50px"}
      borderRadius={"100%"}
      p={"5px"}
      bg="linear-gradient(to right,rgb(255, 64, 83), #bf081a)"
      position={"fixed"}
      right={"3%"}
      bottom={"5vh"}
      color={"white"}
      gap={"30px"}
      fontSize={"32px"}
      alignItems={"center"}
      justify={"center"}
      cursor={"pointer"}
    >
      <Tooltip label={"Going up?"} gutter={20} placement="top" hasArrow>
        <IoArrowUpCircleOutline />
      </Tooltip>
    </Flex>
  );
}
