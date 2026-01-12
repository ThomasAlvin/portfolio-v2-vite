import { Flex, Icon, Tooltip } from "@chakra-ui/react";

export default function LiftedIcon({ icon, label, bgColor }) {
  return (
    <Tooltip gutter={12} label={label} hasArrow>
      <Flex
        cursor="pointer"
        transition="transform 0.3s ease"
        _hover={{ transform: "scale(1.2)" }}
      >
        <Icon as={icon} />
      </Flex>
    </Tooltip>
  );
}
