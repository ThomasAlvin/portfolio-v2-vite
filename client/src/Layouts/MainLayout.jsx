import { Flex } from "@chakra-ui/react";
import Footer from "../components/Footer";
import MainLayoutNavbar from "../components/MainLayoutNavbar";

export default function MainLayout({
  children,
  noFooter,
  onActive,
  navItems,
  activeSection,
}) {
  return (
    <Flex
      flexDir={"column"}
      position={"relative"}
      w={"100%"}
      bg={"#16161d"}
      className="relative w-full"
    >
      {/* <Navbar /> */}
      <MainLayoutNavbar activeSection={activeSection} navItems={navItems} />

      {children}
      {noFooter ? "" : <Footer onActive={onActive} />}
    </Flex>
  );
}
