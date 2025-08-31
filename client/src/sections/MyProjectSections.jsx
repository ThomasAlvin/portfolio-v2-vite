import {
  Button,
  Center,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
} from "@chakra-ui/react";
import { InfiniteMovingCards } from "../aceternityComponents/InfiniteMovingCards ";
import { MacbookScroll } from "../aceternityComponents/Macbook";
import CubeBackground from "../assets/images/cube-background-white-grey.png";
import ParticleBackground from "../components/ParticleBackground";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

import digipasAdminDashboardPage from "../assets/projectImages/Digipas Admin/Dashboard Page.png";
import digipasAdminEditProductsPage16x9 from "../assets/projectImages/Digipas Admin/Edit Products Page 16x9.png";
import digipasAdminOrderDetailsPage from "../assets/projectImages/Digipas Admin/Order Details Page.png";
import digipasAdminOrdersPage from "../assets/projectImages/Digipas Admin/Orders Page.png";
import digipasAdminProductsPage from "../assets/projectImages/Digipas Admin/Products Page.png";
import digipasStoreCheckoutPage16x9 from "../assets/projectImages/Digipas Store/Checkout Page 16x9.png";
import digipasStoreCheckoutPage from "../assets/projectImages/Digipas Store/Checkout Page.png";
import digipasStoreMyCartPage16x9 from "../assets/projectImages/Digipas Store/My Cart Page 16x9.png";
import digipasStoreMyCartPage from "../assets/projectImages/Digipas Store/My Cart Page.png";
import digipasStoreProductDetailsPage16x9 from "../assets/projectImages/Digipas Store/Product Details Page 16x9.png";
import digipasStoreProductDetailsPage from "../assets/projectImages/Digipas Store/Product Details Page.png";
import digipasStoreMyOrdersPage from "../assets/projectImages/Digipas Store/My Orders Page.png";
import gramediaBookStoreCartPage from "../assets/projectImages/Gramedia Book Store Copy/bookstore-cartpage.png";
import gramediaBookStoreProductDetailPage from "../assets/projectImages/Gramedia Book Store Copy/bookstore-productdetail.png";
import gramediaBookStoreHomePage from "../assets/projectImages/Gramedia Book Store Copy/bookstore-homepage.png";
import gramediaBookStoreProfilePage from "../assets/projectImages/Gramedia Book Store Copy/bookstore-profilepage.png";

import { motion } from "framer-motion";
import { CardStack } from "../aceternityComponents/CardStack";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";

export default function MyProjectsSection() {
  const MotionFlex = motion(Flex);
  const myProjects = [
    {
      title: "E-Commerce Admin Panel",
      techStacks: [
        "React",
        "Chakra UI",
        "Javascript",
        "HTML",
        "CSS",
        "Laravel",
        "PHP",
        "MySQL",
      ],
      description:
        "The Digipas Store Admin Panel is a secure and robust web-based management system developed to oversee and streamline operations of the Digipas e-commerce platform. The panel allows administrators to manage products, users, orders, inventory, and shipping in real time. It integrates seamlessly with Stripe for payment management and EasyPost for shipping logistics. Featuring user role control, search and filter capabilities, and dynamic dashboards.",
      projectImages: [
        {
          id: 1,
          image: digipasAdminDashboardPage,
          pageName: "Dashboard Page",
        },
        {
          id: 2,
          image: digipasAdminEditProductsPage16x9,
          pageName: "Create/Edit Products Page",
        },
        {
          id: 3,
          image: digipasAdminOrdersPage,
          pageName: "Orders Page",
        },
        {
          id: 4,
          image: digipasAdminOrderDetailsPage,
          pageName: "Orders Details Page",
        },
      ],
    },
    {
      id: 2,
      title: "E-Commerce with Stripe & EasyPost",
      techStacks: [
        "Laravel",
        "PHP",
        "HTML",
        "CSS",
        "Javascript",
        "Tailwind CSS",
        "Bootstrap",
        "MySQL",
      ],
      description:
        "Digipas Store is an e-Commerce platform designed to sell Digipas precision measurement tools and accessories. Built with performance, usability, and security in mind, the platform provides a smooth shopping experience for customers while integrating seamlessly with backend systems for order fulfillment and shipping, fully integrated seamlessly with Stripe for payment management and EasyPost for shipping logistics.",
      projectImages: [
        {
          id: 1,
          image: digipasStoreProductDetailsPage16x9,
          pageName: "Product Details Page",
        },
        {
          id: 2,
          image: digipasStoreMyCartPage16x9,
          pageName: "My Cart Page",
        },
        {
          id: 3,
          image: digipasStoreCheckoutPage16x9,
          pageName: "Checkout Page",
        },
        {
          id: 4,
          image: digipasStoreMyOrdersPage,
          pageName: "My Orders Page",
        },
      ],
    },
    {
      id: 3,
      title: "Gramedia Book Store Copy",
      techStacks: [
        "React",
        "Chakra UI",
        "HTML",
        "CSS",
        "Javascript",
        "Express.js",
        "MySQL",
      ],
      description:
        "Gramedia Book Store is an online bookstore tailored for Gramedia’s expansive collection of books, designed to deliver a smooth and intuitive shopping experience for literature enthusiasts. The platform handles everything from discovery to checkout, integrating dynamic product handling, secure payment systems, and streamlined backend operations.",
      projectImages: [
        {
          id: 1,
          image: gramediaBookStoreHomePage,
          pageName: "Home Page",
        },
        {
          id: 2,
          image: gramediaBookStoreCartPage,
          pageName: "Cart Page",
        },

        {
          id: 3,
          image: gramediaBookStoreProductDetailPage,
          pageName: "Product Details Page",
        },
        {
          id: 4,
          image: gramediaBookStoreProfilePage,
          pageName: "Profile Page",
        },
        ,
      ],
    },
  ];
  return (
    <Flex
      id="projects"
      color={"black"}
      backgroundImage={`${CubeBackground}`}
      zIndex={2}
      position={"relative"}
      w={"100%"}
      flexDir={"column"}
      pt={"60px"}
      pb={"120px"}
      justify={"center"}
      alignItems={"center"}
      gap={"40px"}
    >
      <Flex
        color={"black"}
        maxW={"1200px"}
        w={"100%"}
        justify={"center"}
        alignItems={"center"}
        flexDir={"column"}
        gap={"80px"}
      >
        <Flex
          justify={"center"}
          width={"fit-content"}
          position={"relative"}
          flexDir={"column"}
          alignItems={"center"}
        >
          <Flex className="reveal">
            <Heading fontSize={"48px"}>My Projects</Heading>
          </Flex>
          <Flex
            pos={"absolute"}
            bottom={"-5px"}
            w={"120px"}
            h={"5px"}
            bg="linear-gradient(to right,rgb(255, 64, 83), #bf081a)"
            className="revealUnderlineLeft"
          />
        </Flex>
        <Flex w={"100%"} flexDir={"column"} gap={"150px"}>
          {myProjects.map((val) => (
            <Center>
              <Flex w={"100%"} gap={"40px"}>
                <Flex flexDir={"column"} position={"relative"} gap={"20px"}>
                  <CardStack items={val.projectImages} />
                </Flex>
                <Flex flexDir={"column"} justify={"space-between"}>
                  <Flex flexDir={"column"} gap={"20px"}>
                    <Heading
                      className="revealLeft"
                      bg="linear-gradient(to right,rgb(255, 64, 83), #bf081a)"
                      bgClip={"text"}
                      fontSize={"32px"}
                      color={"#dc143c"}
                    >
                      {val.title}
                    </Heading>
                    <Flex gap={"10px"} className="revealLeft-500">
                      {val.techStacks.map((val) => (
                        <Flex
                          whiteSpace={"nowrap"}
                          bg={"#dedede"}
                          borderRadius={"10px"}
                          color={"#373740"}
                          fontSize={"14px"}
                          px={"10px"}
                          py={"2px"}
                        >
                          {val}
                        </Flex>
                      ))}
                    </Flex>
                    <Flex className="revealLeft-1000" color={"black"}>
                      {val.description}
                    </Flex>
                  </Flex>
                  {/* <Flex className="reveal3" gap={"10px"} alignItems={"center"}>
                    <Button
                      className="animated-fillColor-dark"
                      h={"auto"}
                      px={"28px"}
                      py={"10px"}
                      borderRadius={"50px"}
                      fontSize={"18px"}
                    >
                      View Project
                    </Button>
                  </Flex> */}
                </Flex>
              </Flex>
            </Center>
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
}
