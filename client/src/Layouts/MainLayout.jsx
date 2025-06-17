import { Flex } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function MainLayout({ children }) {
  return (
    <Flex flexDir={"column"}>
      <Navbar />
      {children}
      <Footer />
    </Flex>
  );
}
