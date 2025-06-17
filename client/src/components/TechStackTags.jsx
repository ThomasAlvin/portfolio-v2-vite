import { Flex, Tooltip } from "@chakra-ui/react";

export default function TechStackTags({ label, children }) {
  return (
    <Tooltip label={label} hasArrow placement={"top"}>
      <Flex
        cursor={"default"}
        bg={"#edf2f7"}
        border={"1px solid #848484"}
        color={"black"}
        px={"10px"}
        py={"2px"}
        borderRadius={"5px"}
      >
        {children}
      </Flex>
    </Tooltip>
  );
}
