import { Box, Flex, Icon } from "@chakra-ui/react";

export default function GlowingIcon({
  icon,
  color,
  top = "auto",
  left = "auto",
  right = "auto",
  bottom = "auto",
}) {
  return (
    <Flex
      role="group"
      _hover={{ color: color }}
      transition={"0.2s ease-in-out"}
      position={"absolute"}
      top={top}
      right={right}
      left={left}
      bottom={bottom}
      color={"#545454"}
      fontSize={{ base: "40px", sm: "60px" }}
    >
      <Box
        _groupHover={{ opacity: 1 }}
        opacity={0}
        transition={"0.2s ease-in-out"}
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        w="60px"
        h="60px"
        bg={color}
        borderRadius="full"
        filter="blur(50px)"
        zIndex={0}
      />
      <Icon as={icon}></Icon>
    </Flex>
  );
}
