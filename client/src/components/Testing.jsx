import { Flex } from "@chakra-ui/react";
import { useState } from "react";
import FlipNumbers from "react-flip-numbers";

const RollingNumber = () => {
  const [number, setNumber] = useState("lol");
  return (
    <Flex
      onClick={() => {
        setNumber("theproject?");
      }}
    >
      lol
      <FlipNumbers
        height={40} // Adjust height of digits
        width={30} // Adjust width of digits
        color="black"
        background="white"
        play // Enables animation
        numbers={number} // Change this dynamically for different numbers
        duration={1} // Animation duration in seconds
      />
    </Flex>
  );
};

export default RollingNumber;
