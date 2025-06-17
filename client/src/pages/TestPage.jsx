import { Flex } from "@chakra-ui/react";
import ParticleBackground from "../components/ParticleBackground";
import CursorHighlightBackground from "../components/test";

export default function TestPage() {
  return (
    <Flex
      h="100vh"
      w="100vw"
      bg="black"
      position="relative"
      zIndex={1} // Ensure content appears above both background layers
    >
      <ParticleBackground />
      <CursorHighlightBackground />
      <Flex zIndex={2}>sdsa</Flex>
    </Flex>
  );
}
