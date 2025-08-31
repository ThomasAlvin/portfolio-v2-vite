import { Flex } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function MainLayout({ children, noFooter }) {
  return (
    <Flex flexDir={"column"}>
      <Navbar />
      {children}
      {noFooter ? "" : <Footer />}
    </Flex>
  );
}
