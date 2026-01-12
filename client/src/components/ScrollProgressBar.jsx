// ScrollProgressBar.jsx
import { Box, Progress } from "@chakra-ui/react";
import { useEffect, useState } from "react";

function ScrollProgressBar() {
  const [scrollPercent, setScrollPercent] = useState(0);

  const handleScroll = () => {
    // console.log(window.scrollY);
    // console.log(document.documentElement.scrollHeight);
    // console.log(window.innerHeight);

    const scrollTop = window.scrollY;
    const docHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrollProgress = (scrollTop / docHeight) * 100;
    setScrollPercent(scrollProgress);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // cleanup listener on unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box position="fixed" top="0" left="0" width="100%" zIndex="9999">
      {/* <Center h={"90vh"} my={"5vh"} flexDir={"column"} position={"relative"}>
        <Flex
          h={scrollPercent + "%"}
          bg={"purple"}
          w={"4px"}
          position={"absolute"}
          right={"60px"}
          top={"0px"}
        ></Flex>
      </Center> */}
      <Progress
        value={scrollPercent}
        size="xs"
        colorScheme="red"
        hasStripe
        isAnimated
      />
    </Box>
  );
}

export default ScrollProgressBar;
