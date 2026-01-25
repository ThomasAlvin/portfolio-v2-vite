import {
  Box,
  Button,
  Center,
  Flex,
  Grid,
  GridItem,
  Heading,
  Icon,
  Image,
  Link as ChakraLink,
} from "@chakra-ui/react";
import MainLayout from "../Layouts/MainLayout";
import FotoDiri from "../assets/images/Foto-diri-cropped3.webp";
import FotoDiri2 from "../assets/images/Foto-diri-standing-zoomed2-removebg.webp";
import CubeBackground from "../assets/images/cube-background-white-grey.webp";
import lotoDemoDashboardPage from "../assets/projectImages/LOTO Management System Demo/dashboard-page.webp";
import lotoDemoMemberListPage from "../assets/projectImages/LOTO Management System Demo/member-list-page.webp";
import lotoDemoCreateWorkFlowPanel from "../assets/projectImages/LOTO Management System Demo/create-work-flow-panel.webp";
import lotoDemoReportDetailsPage from "../assets/projectImages/LOTO Management System Demo/report-details-page.webp";
import digipasAdminDashboardPage from "../assets/projectImages/Digipas Admin/Dashboard Page.webp";
import digipasAdminEditProductsPage16x9 from "../assets/projectImages/Digipas Admin/Edit Products Page 16x9.webp";
import digipasAdminOrderDetailsPage from "../assets/projectImages/Digipas Admin/Order Details Page.webp";
import digipasAdminOrdersPage from "../assets/projectImages/Digipas Admin/Orders Page.webp";
import digipasStoreCheckoutPage16x9 from "../assets/projectImages/Digipas Store/Checkout Page 16x9.webp";
import digipasStoreMyCartPage16x9 from "../assets/projectImages/Digipas Store/My Cart Page 16x9.webp";
import digipasStoreMyOrdersPage from "../assets/projectImages/Digipas Store/My Orders Page.webp";
import digipasStoreProductDetailsPage16x9 from "../assets/projectImages/Digipas Store/Product Details Page 16x9.webp";
import gramediaBookStoreCartPage from "../assets/projectImages/Gramedia Book Store Copy/bookstore-cartpage.webp";
import gramediaBookStoreHomePage from "../assets/projectImages/Gramedia Book Store Copy/bookstore-homepage.webp";
import gramediaBookStoreProductDetailPage from "../assets/projectImages/Gramedia Book Store Copy/bookstore-productdetail.webp";
import gramediaBookStoreProfilePage from "../assets/projectImages/Gramedia Book Store Copy/bookstore-profilepage.webp";

import { motion, useAnimation, useInView } from "framer-motion";
import { memo, useEffect, useMemo, useRef, useState } from "react";
import { BiGlassesAlt } from "react-icons/bi";
import { BsMortarboardFill } from "react-icons/bs";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLaptop,
  FaLaravel,
  FaLinkedin,
  FaReact,
} from "react-icons/fa";
import { Link } from "react-router-dom";

import { GrMysql } from "react-icons/gr";
import { IoLogoGameControllerB, IoMdDownload } from "react-icons/io";
import { IoBriefcaseSharp, IoLogoJavascript } from "react-icons/io5";
import { MdSettings } from "react-icons/md";
import { RiPhpFill, RiTailwindCssFill } from "react-icons/ri";
import { SiChakraui } from "react-icons/si";
import { TbBulb } from "react-icons/tb";
import ScrollReveal from "scrollreveal";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { CardStack } from "../aceternityComponents/CardStack";
import ContainerTextFlip from "../aceternityComponents/ContainerTextFlip";
import { MacbookScroll } from "../aceternityComponents/Macbook";
import Counter from "../components/Counter";
import GlowingIcon from "../components/GlowingIcon";
import HomeSectionNavigator from "../components/HomeSectionNavigator";
import LiftedIcon from "../components/LiftedIcon";
import ParticleBackground from "../components/ParticleBackground";
import ScrollProgressBar from "../components/ScrollProgressBar";
import TechStackTags from "../components/TechStackTags";
import educationArray from "../const/educationArray";
import professionalExperienceArray from "../const/professionalExperienceArray";
import renderTextSegments from "../utils/renderTextSegments";
import { StickyScroll } from "@/components/ui/StickyScroll";
import { getSkillIcon } from "../utils/getSkillIcon";
const MotionFlex = motion(Flex);
export default function HomePage() {
  const [loadedHeroImageCount, setLoadedHeroImageCount] = useState(0);
  const allHeroImageLoaded = loadedHeroImageCount >= 2;
  const [activeSection, setActiveSection] = useState("home");

  const navItems = useMemo(
    () => [
      {
        name: "Home",
        link: "/#home",
        id: "home",
      },
      {
        name: "About",
        link: "/#about",
        id: "about",
      },
      {
        name: "Projects",
        link: "/#projects",
        id: "projects",
      },
      {
        name: "Contact",
        link: "/#contact",
        id: "contact",
      },
    ],
    [],
  );
  function handleImageLoad() {
    setLoadedHeroImageCount((prev) => prev + 1);
  }
  useEffect(() => {
    ScrollReveal().reveal(".reveal", {
      origin: "bottom",
      distance: "100px",
      duration: 1000,
      delay: 200,
      easing: "ease-in-out",
      reset: false, // Change to true if you want the animation to replay on scroll up
    });
    ScrollReveal().reveal(".reveal2", {
      origin: "bottom",
      distance: "50px",
      duration: 1000,
      delay: 200,
      easing: "ease-in-out",
      reset: false, // Change to true if you want the animation to replay on scroll up
    });
    ScrollReveal().reveal(".reveal3", {
      origin: "bottom",
      distance: "20px",
      duration: 1000,
      delay: 200,
      easing: "ease-in-out",
      reset: false, // Change to true if you want the animation to replay on scroll up
    });
    ScrollReveal().reveal(".revealLeft", {
      origin: "left",
      distance: "200px",
      duration: 1000,
      delay: 200,
      easing: "ease-in-out",
      reset: false, // Change to true if you want the animation to replay on scroll up
    });
    ScrollReveal().reveal(".revealLeft-500", {
      origin: "left",
      distance: "200px",
      duration: 1000,
      delay: 500,
      easing: "ease-in-out",
      reset: false, // Change to true if you want the animation to replay on scroll up
    });
    ScrollReveal().reveal(".revealLeft-1000", {
      origin: "left",
      distance: "200px",
      duration: 1000,
      delay: 1000,
      easing: "ease-in-out",
      reset: false, // Change to true if you want the animation to replay on scroll up
    });
    ScrollReveal().reveal(".revealUnderlineRight", {
      origin: "right",
      distance: "1000px",
      duration: 400,
      delay: 0,
      easing: "ease-in-out",
      reset: false, // Change to true if you want the animation to replay on scroll up
    });
    ScrollReveal().reveal(".revealUnderlineLeft", {
      origin: "left",
      distance: "1000px",
      duration: 400,
      delay: 0,
      easing: "ease-in-out",
      reset: false, // Change to true if you want the animation to replay on scroll up
    });
  }, []);

  console.log("homePage");
  return (
    // return allHeroImageLoaded ? (
    <MainLayout
      onActive={setActiveSection}
      navItems={navItems}
      activeSection={activeSection}
    >
      <ScrollProgressBar />
      <Flex flexDir={"column"}>
        {/* 1st Section */}
        <HomeSection onActive={setActiveSection} id={"home"} />

        {/* 2nd Section */}
        <AboutSection onActive={setActiveSection} id={"about"} />

        {/* 3rd Section */}
        <SkillSection onActive={setActiveSection} id={"about"} />
        {/* 4th Section */}
        {/* <MetricSection /> */}

        {/* 5th Section */}
        <CurrentProjectSection onActive={setActiveSection} id={"projects"} />
        {/* 6th Section */}
        <MyProjectsSection onActive={setActiveSection} id={"projects"} />
      </Flex>
      <HomeSectionNavigator />
    </MainLayout>
    // ) : (
    //   <Flex w={"100vw"} h={"100vh"} justify={"center"} alignItems={"center"}>
    //     <Flex display={"none"}>
    //       <Image onLoad={handleImageLoad} src={FotoDiri}></Image>
    //       <Image onLoad={handleImageLoad} src={FotoDiri2}></Image>
    //     </Flex>
    //     <Flex>
    //       <Spinner size={"xl"} color="#dc143c" />
    //     </Flex>
    //   </Flex>
    // );
  );
}
const HomeSection = memo(({ id, onActive }) => {
  const socialMediaIcons = [
    {
      label: "Facebook",
      icon: FaFacebook,
      link: "https://www.facebook.com/felix.dancer",
    },
    {
      label: "Instagram",
      icon: FaInstagram,
      link: "https://www.instagram.com/thomas.a.y/",
    },
    {
      label: "LinkedIn",
      icon: FaLinkedin,
      link: "https://www.linkedin.com/in/thomas-alvin-yeo-4b1189251/",
    },
    { label: "Github", icon: FaGithub, link: "https://github.com/ThomasAlvin" },
  ];
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.6 });

  useEffect(() => {
    if (isInView) {
      onActive(id);
    }
  }, [isInView, id, onActive]);
  return (
    <Flex
      ref={ref}
      id="home"
      px={"20px"}
      pb={{ base: "40px", md: "0px" }}
      w={"100%"}
      justify={"center"}
      alignItems={"center"}
      flexDir={"column"}
      bg={"#1f1f26"}
      zIndex={2}
      position={"relative"}
    >
      <ParticleBackground id={"0"} hasLink={true} />
      {/* <Flex zIndex={-1} position={"absolute"} bottom={0} w={"100%"}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path
                fill="#27272b"
                fill-opacity="1"
                d="M0,96L40,117.3C80,139,160,181,240,213.3C320,245,400,267,480,234.7C560,203,640,117,720,90.7C800,64,880,96,960,133.3C1040,171,1120,213,1200,229.3C1280,245,1360,235,1400,229.3L1440,224L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
              ></path>
            </svg>
          </Flex> */}
      <Flex
        color={"white"}
        maxW={"1200px"}
        w={"100%"}
        pt={"100px"}
        justify={"center"}
      >
        <Flex
          pt={{ base: "30px", md: "60px" }}
          alignItems={{ base: "center", md: "stretch" }}
          flexDir={{ base: "column-reverse", md: "row" }}
          gap={{ base: "20px", md: "0px" }}
        >
          <Flex w={{ base: "100%", md: "50%" }} pt={"30px"} flexDir={"column"}>
            <Flex className="reveal">
              <Flex
                position="relative"
                bg="linear-gradient(to right,rgb(255, 64, 83), #bf081a)"
                color="white"
                justify={"center"}
                py={"12px"}
                px={"24px"}
                textAlign="center"
                boxShadow="lg"
                _after={{
                  content: '""',
                  position: "absolute",
                  top: "100%", // Position the triangle below the bubble
                  left: "50%", // Center it horizontally
                  transform: "translateX(-50%)", // Adjust position to align
                  borderLeft: "8px solid transparent",
                  borderRight: "8px solid transparent",
                  borderTop: "12px solid #dc143c",
                }}
              >
                Hello! my name is
              </Flex>
            </Flex>
            <Flex
              width={"fit-content"}
              position={"relative"}
              flexDir={"column"}
            >
              <Flex className="reveal" pt={"10px"}>
                <Heading fontSize={{ base: "32px", md: "48px" }}>
                  Thomas Alvin Yeo
                </Heading>
              </Flex>
              <Flex
                pos={"absolute"}
                bottom={"-5px"}
                w={"120px"}
                h={"5px"}
                bg="linear-gradient(to right,rgb(255, 64, 83), #bf081a)"
                className="revealUnderlineRight"
              />
            </Flex>
            <Flex className="reveal2" pt={"20px"}>
              Hello! I'm Thomas Alvin Yeo, a creative Fullstack Developer based
              in Batam City, Indonesia. With a passion for building seamless
              digital experiences, I specialize in crafting modern,
              high-performance web applications using React and Laravel.
            </Flex>
            <Flex
              gap={{ base: "20px", md: "0px" }}
              alignItems={{ base: "center", md: "stretch" }}
              flexDir={{ base: "row", md: "column" }}
            >
              <Flex
                className="reveal3"
                pt={"20px"}
                gap={"10px"}
                alignItems={"center"}
              >
                <a href="/Thomas-Alvin-Yeo-CV.pdf">
                  <Button
                    className="animated-fillColor-dark"
                    h={"auto"}
                    px={{ base: "16px", md: "20px" }}
                    py={{ base: "8px", md: "10px" }}
                    borderRadius={"50px"}
                    fontSize={{ base: "16px", md: "18px" }}
                  >
                    <Flex alignItems={"center"} gap={"5px"}>
                      <Flex>Resume</Flex>
                      <Flex fontSize={"20px"}>
                        <IoMdDownload />
                      </Flex>
                    </Flex>
                  </Button>
                </a>
              </Flex>
              <Flex
                className="reveal3"
                gap={{ base: "20px", sm: "40px" }}
                pt={"20px"}
                fontSize={"28px"}
              >
                {socialMediaIcons.map((val) => (
                  <ChakraLink href={val.link} target="_blank">
                    <LiftedIcon label={val.label} icon={val.icon} />
                  </ChakraLink>
                ))}
              </Flex>
            </Flex>
          </Flex>
          <Flex
            position={"relative"}
            w={{ base: "100%", md: "50%" }}
            pt={"60px"}
          >
            <Image
              objectFit={"cover"}
              pt={"20px"}
              px={{ base: "50px", md: "100px" }}
              // minH={"450px"}
              w={"100%"}
              bg={"#16161d"}
              clipPath={"ellipse(40% 50% at 50% 50%)"}
              src={FotoDiri}
            ></Image>
            <GlowingIcon
              top={"15%"}
              right={"18%"}
              color={"#0fd5f7"}
              icon={FaReact}
            />
            <GlowingIcon
              top={"48%"}
              right={"7%"}
              color={"#41c4ba"}
              icon={SiChakraui}
            />{" "}
            <GlowingIcon
              top={"82%"}
              right={"0%"}
              color={"#f72c1f"}
              icon={FaLaravel}
            />
            <GlowingIcon
              top={"-5%"}
              right={"45%"}
              color={"#efd81d"}
              icon={IoLogoJavascript}
            />
            <GlowingIcon
              top={"82%"}
              left={"0%"}
              color={"#005d88"}
              icon={GrMysql}
            />
            <GlowingIcon
              top={"48%"}
              left={"7%"}
              color={"#00b3d1"}
              icon={RiTailwindCssFill}
            />
            <GlowingIcon
              top={"15%"}
              left={"18%"}
              color={"#7377ad"}
              icon={RiPhpFill}
            />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
});
const AboutSection = memo(({ id, onActive }) => {
  const controls = useAnimation();
  const section2Ref = useRef(null);
  const isInViewInitial = useInView(section2Ref, { amount: 0.5 }); // run only once
  console.log("aboutSection");

  useEffect(() => {
    if (isInViewInitial) {
      console.log("its in view??");
      controls.start("visible");
    }
  }, [isInViewInitial, controls]);
  const bubbleVariants = {
    hidden: {
      scale: 0,
      opacity: 0,
      x: 0,
      y: 0,
    },
    visible: (custom) => ({
      scale: 1,
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        delay: custom === 0 ? 1 : 1 + custom * 0.6, // delay for staggering
        type: "spring",
        stiffness: 400,
        damping: 15,
      },
    }),
  };
  const fotoDiri2Icon = [
    {
      icon: BiGlassesAlt,
      top: "9%",
      bottom: "auto",
      left: "auto",
      right: "9%",
    },
    {
      icon: IoLogoGameControllerB,
      top: "40%",
      bottom: "auto",
      left: "-6%",
      right: "auto",
    },
    {
      icon: TbBulb,
      top: "89%",
      bottom: "auto",
      left: "auto",
      right: "21%",
    },
  ];
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.6 });

  useEffect(() => {
    if (isInView) {
      onActive(id);
    }
  }, [isInView, id, onActive]);
  return (
    <Flex
      ref={ref}
      id="about"
      px={"20px"}
      w={"100%"}
      justify={"center"}
      alignItems={"center"}
      flexDir={"column"}
      bg={"white"}
      position={"relative"}
      backgroundImage={`${CubeBackground}`}
      bgSize="auto"
      bgPosition="top left"
    >
      <Flex
        color={"black"}
        px={"20px"}
        maxW={"1200px"}
        w={"100%"}
        flexDir={"column"}
      >
        <Flex
          py={"60px"}
          flexDir={{ base: "column", md: "row" }}
          gap={{ base: "50px", md: "0px" }}
          alignItems={"center"}
        >
          <Flex
            ref={section2Ref}
            className="revealLeft"
            w={{ base: "100%", md: "50%" }}
            px={{ base: "20px", md: "60px" }}
          >
            <Flex
              position={"relative"}
              bg={"#e8e8e8"}
              pl={"20px"}
              borderTopRightRadius={"full"}
              borderBottomRadius={"full"}
              // border={"20px solid #c0091b"}
              // borderRadius={"10px"}
            >
              <Image
                p={"20px"}
                borderTopLeftRadius={"10px"}
                borderTopRightRadius={"full"}
                borderBottomRadius={"full"}
                w={"100%"}
                src={FotoDiri2}
              ></Image>
              <Flex color={"white"}>
                {fotoDiri2Icon.map((val, index) => (
                  <MotionFlex
                    key={index}
                    custom={index} // Used for stagger delay
                    initial="hidden"
                    animate={controls}
                    variants={bubbleVariants}
                    borderRadius="full"
                    w={"12%"}
                    aspectRatio={1}
                    bg="linear-gradient(to right,rgb(255, 64, 83), #bf081a)"
                    position="absolute"
                    top={val.top}
                    right={val.right}
                    left={val.left}
                    bottom={val.bottom}
                    alignItems="center"
                    justify="center"
                    // fontSize={"100%"}
                  >
                    <Box w={"60%"} aspectRatio={1}>
                      <Icon w="100%" h="100%" as={val.icon} />
                    </Box>
                  </MotionFlex>
                ))}
              </Flex>
            </Flex>
          </Flex>
          <Flex w={{ base: "100%", md: "50%" }} flexDir={"column"}>
            <Flex
              width={"fit-content"}
              position={"relative"}
              flexDir={"column"}
            >
              <Flex className="reveal">
                <Heading fontSize={{ base: "32px", md: "48px" }}>
                  A bit about me
                </Heading>
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
            <Flex
              pt={"20px"}
              className="reveal2"
              flexDir={"column"}
              gap={"20px"}
            >
              <Flex>
                I am a passionate Fullstack Web Developer, with 1 year of
                experience in creating custom websites and building scalable web
                applications. Proficient in React and Laravel, i am also
                committed to staying up-to-date when it comes to technologies
                and trends in the programming industry. i approach each project
                with enthusiasm, creativity, and a focus on delivering
                high-quality end product.
              </Flex>
              <Flex>
                Beyond coding, I love playing badminton to stay active and enjoy
                unwinding with video games, which fuel my creativity and
                problem-solving skills.
              </Flex>
            </Flex>
            <Flex
              className="reveal3"
              pt={"20px"}
              gap={"10px"}
              alignItems={"center"}
            >
              {/* <Button
                    className="animated-fillColor-dark"
                    h={"auto"}
                    px={"28px"}
                    py={"10px"}
                    borderRadius={"50px"}
                    fontSize={"18px"}
                  >
                    More about me
                  </Button> */}
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
});
const SkillSection = memo(({ id, onActive }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.6 });

  useEffect(() => {
    if (isInView) {
      onActive(id);
    }
  }, [isInView, id, onActive]);
  console.log("skillSection");
  return (
    <Flex
      ref={ref}
      w={"100%"}
      borderTop={"1px solid #bababa"}
      justify={"center"}
      alignItems={"center"}
      flexDir={"column"}
      bg={"#f8f9fa"}
      position={"relative"}
    >
      <Flex zIndex={0} position={"absolute"} bottom={0} w={"100%"}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#ededed"
            fill-opacity="1"
            d="M0,96L40,117.3C80,139,160,181,240,213.3C320,245,400,267,480,234.7C560,203,640,117,720,90.7C800,64,880,96,960,133.3C1040,171,1120,213,1200,229.3C1280,245,1360,235,1400,229.3L1440,224L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
          ></path>
        </svg>
      </Flex>
      <Flex
        px={"20px"}
        py={{ base: "40px", md: "80px" }}
        color={"black"}
        maxW={"1200px"}
        w={"100%"}
        flexDir={"column"}
        gap={"40px"}
      >
        <Flex
          fontSize={{ base: "28px", md: "40px" }}
          flexDir={{ base: "column", md: "row" }}
          alignItems={{ base: "start", md: "center" }}
          className="reveal"
        >
          <Heading fontSize={{ base: "28px", md: "30px" }}>
            I am a&nbsp;
          </Heading>
          <ContainerTextFlip
            words={[
              "Frontend Developer",
              "Backend Developer",
              "Novice UI/UX Designer",
            ]}
          />
        </Flex>
        <Grid
          templateColumns={{
            base: "repeat(1,1fr)",
            sm: "repeat(auto-fit,minmax(350px,1fr))",
          }}
          rowGap={"40px"}
          columnGap={"20px"}
        >
          <GridItem w={"100%"} display={"flex"} justifyContent={"center"}>
            <Flex
              w={{ base: "auto", md: "100%" }}
              maxW={{ base: "450px", sm: "auto" }}
              className="reveal2"
              flexDir={"column"}
              gap={"20px"}
            >
              <Flex
                bg={"white"}
                flexDir={"column"}
                gap={"10px"}
                border={"2px solid #bababa"}
                p={"10px"}
              >
                <Flex fontSize={"48px"} color={"#01d1f7"}>
                  <FaReact />
                </Flex>
                <Heading fontSize={"20px"}>Frontend Developer</Heading>
                <Flex gap={"10px"}>
                  <Flex
                    alignItems={"center"}
                    color={"#848484"}
                    flexDir={"column"}
                    gap={"5px"}
                  >
                    <Flex>{"<h3>"}</Flex>
                    <Flex w={"1px"} h={"100%"} bg={"#bababa"}></Flex>
                    <Flex>{"</h3>"}</Flex>
                  </Flex>
                  <Flex py={"24px"}>
                    Frontend Developer with a strong foundation in React,
                    Tailwind and other frontend libraries, focused on building
                    responsive, dynamic, and accessible web applications.
                  </Flex>
                </Flex>
              </Flex>
              <Flex flexWrap={"wrap"} gap={"10px"}>
                <TechStackTags label={"9.0/10.0"}>Javascript</TechStackTags>
                <TechStackTags label={"8.6/10.0"}>HTML</TechStackTags>
                <TechStackTags label={"8.0/10.0"}>CSS</TechStackTags>
                <TechStackTags label={"9.0/10.0"}>React</TechStackTags>
                <TechStackTags label={"8.5/10.0"}>Vite</TechStackTags>
                <TechStackTags label={"9.1/10.0"}>Chakra UI</TechStackTags>
                <TechStackTags label={"7.6/10.0"}>Tailwind</TechStackTags>
                <TechStackTags label={"7.0/10.0"}>Daisy UI</TechStackTags>
                <TechStackTags label={"8.5/10.0"}>Bootstrap</TechStackTags>
              </Flex>
            </Flex>
          </GridItem>
          <GridItem w={"100%"} display={"flex"} justifyContent={"center"}>
            <Flex
              w={{ base: "auto", md: "100%" }}
              maxW={{ base: "450px", sm: "auto" }}
              className="reveal2"
              flexDir={"column"}
              gap={"20px"}
            >
              <Flex
                bg={"white"}
                border={"2px solid #bababa"}
                p={"10px"}
                flexDir={"column"}
                gap={"10px"}
              >
                <Flex fontSize={"48px"} color={"#f72a1c"}>
                  <FaLaravel />
                </Flex>
                <Heading fontSize={"20px"}>Backend Developer</Heading>
                <Flex gap={"10px"}>
                  <Flex
                    alignItems={"center"}
                    color={"#848484"}
                    flexDir={"column"}
                    gap={"5px"}
                  >
                    <Flex>{"<h3>"}</Flex>
                    <Flex w={"1px"} h={"100%"} bg={"#bababa"}></Flex>
                    <Flex>{"</h3>"}</Flex>
                  </Flex>
                  <Flex py={"24px"}>
                    Backend Developer skilled in PHP, Laravel, MySQL, and etc. I
                    build scalable and secure APIs, optimize databases, and
                    develop high-performance server-side applications.
                  </Flex>
                </Flex>
              </Flex>
              <Flex flexWrap={"wrap"} gap={"10px"}>
                <TechStackTags label={"8.5/10.0"}>PHP</TechStackTags>
                <TechStackTags label={"9.0/10.0"}>Laravel</TechStackTags>
                <TechStackTags label={"9.0/10.0"}>MySQL</TechStackTags>
                <TechStackTags label={"8.2/10.0"}>Node.js</TechStackTags>
                <TechStackTags label={"7.8/10.0"}>Express.js</TechStackTags>
                <TechStackTags label={"6.0/10.0"}>Firebase</TechStackTags>
              </Flex>
            </Flex>
          </GridItem>
          <GridItem w={"100%"} display={"flex"} justifyContent={"center"}>
            <Flex
              w={{ base: "auto", md: "100%" }}
              maxW={{ base: "450px", sm: "auto" }}
              className="reveal2"
              flexDir={"column"}
              gap={"20px"}
            >
              <Flex
                bg={"white"}
                border={"2px solid #bababa"}
                p={"10px"}
                flexDir={"column"}
                gap={"10px"}
              >
                <Flex fontSize={"48px"} color={"#848484"}>
                  <FaLaptop />
                </Flex>
                <Heading fontSize={"20px"}>Novice UI/UX Designer</Heading>
                <Flex gap={"10px"}>
                  <Flex
                    alignItems={"center"}
                    color={"#848484"}
                    flexDir={"column"}
                    gap={"5px"}
                  >
                    <Flex>{"<h3>"}</Flex>
                    <Flex w={"1px"} h={"100%"} bg={"#bababa"}></Flex>
                    <Flex>{"</h3>"}</Flex>
                  </Flex>
                  <Flex py={"24px"}>
                    Novice UI/UX Designer passionate about creating intuitive
                    and appealing experiences. I focus on user-centered design,
                    accessibility, and enhance usability and engagement.
                  </Flex>
                </Flex>
              </Flex>
              <Flex flexWrap={"wrap"} gap={"10px"}>
                <TechStackTags label={"6.0/10.0"}>Figma</TechStackTags>
                <TechStackTags label={"5.0/10.0"}>Canva</TechStackTags>
              </Flex>
            </Flex>
          </GridItem>
        </Grid>
        <Flex zIndex={1} flexDir={{ base: "column", md: "row" }} gap={"50px"}>
          <Flex w={{ base: "100%", md: "50%" }} flexDir={"column"} gap={"20px"}>
            <Heading fontSize={"20px"}>
              <Flex alignItems={"center"} gap={"10px"}>
                <IoBriefcaseSharp />
                Professional Experience
              </Flex>
            </Heading>
            <Flex gap={"10px"}>
              <Flex flexDir={"column"} alignItems={"center"}>
                <Flex
                  borderRadius={"full"}
                  bgColor={"#dc143c"}
                  minW={"16px"}
                  minH={"16px"}
                ></Flex>
                <Flex
                  borderRadius={"full"}
                  borderRight={"2px solid #dc143c"}
                  h={"100%"}
                ></Flex>
              </Flex>
              {professionalExperienceArray.map((exp) => (
                <Flex flexDir={"column"} gap={"20px"}>
                  <Flex
                    p={"10px"}
                    bg={"white"}
                    boxShadow={"0px 0px 3px rgba(50,50,93,0.5)"}
                    flexDir={"column"}
                    gap={"0px"}
                  >
                    <Flex fontSize={"16px"} fontWeight={700}>
                      {exp.workPlace}
                    </Flex>
                    <Flex color={"#dc143c"} fontWeight={700}>
                      {exp.jobTitle}
                    </Flex>
                    <Flex
                      color={"#848484"}
                      whiteSpace="normal"
                      flexWrap={"wrap"}
                    >
                      <span>{renderTextSegments(exp.description)}</span>
                    </Flex>
                  </Flex>
                  <Flex flexWrap={"wrap"} gap={"10px"}>
                    {exp.techStacks.map((tech) => (
                      <TechStackTags label={tech.rate}>
                        {tech.title}
                      </TechStackTags>
                    ))}
                  </Flex>
                </Flex>
              ))}
            </Flex>
          </Flex>
          <Flex w={{ base: "100%", md: "50%" }} flexDir={"column"} gap={"20px"}>
            <Heading fontSize={"20px"}>
              <Flex alignItems={"center"} gap={"10px"}>
                <BsMortarboardFill />
                Education
              </Flex>
            </Heading>
            <Flex gap={"10px"}>
              <Flex flexDir={"column"} alignItems={"center"}>
                <Flex
                  borderRadius={"full"}
                  bgColor={"#dc143c"}
                  minW={"16px"}
                  minH={"16px"}
                ></Flex>
                <Flex
                  borderRadius={"full"}
                  borderRight={"2px solid #dc143c"}
                  h={"100%"}
                ></Flex>
              </Flex>

              {educationArray.map((exp) => (
                <Flex flexDir={"column"} gap={"20px"}>
                  <Flex
                    p={"10px"}
                    bg={"white"}
                    boxShadow={"0px 0px 3px rgba(50,50,93,0.5)"}
                    flexDir={"column"}
                    gap={"0px"}
                  >
                    <Flex fontSize={"16px"} fontWeight={700}>
                      {exp.workPlace}
                    </Flex>
                    <Flex color={"#dc143c"} fontWeight={700}>
                      {exp.jobTitle}
                    </Flex>
                    <Flex
                      color={"#848484"}
                      whiteSpace="normal"
                      flexWrap={"wrap"}
                    >
                      <span>{renderTextSegments(exp.description)}</span>
                    </Flex>
                  </Flex>
                  <Flex flexWrap={"wrap"} gap={"10px"}>
                    {exp.techStacks.map((tech) => (
                      <TechStackTags label={tech.rate}>
                        {tech.title}
                      </TechStackTags>
                    ))}
                  </Flex>
                </Flex>
              ))}
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
});
const MetricSection = memo(({ id, onActive }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.6 });

  useEffect(() => {
    if (isInView) {
      onActive(id);
    }
  }, [isInView, id, onActive]);
  return (
    <Flex
      ref={ref}
      w={"100%"}
      borderTop={"1px solid #bababa"}
      justify={"center"}
      alignItems={"center"}
      backgroundImage={`${CubeBackground}`}
      flexDir={"column"}
    >
      <Flex
        py={"80px"}
        color={"black"}
        maxW={"1200px"}
        w={"100%"}
        flexDir={"column"}
        gap={"40px"}
      >
        <Flex gap={"20px"} justify={"space-between"}>
          <Flex w={"33%"} className="reveal2" flexDir={"column"} gap={"20px"}>
            <Flex gap={"20px"} alignItems={"center"} p={"10px"}>
              <Flex
                p={"8px"}
                borderRadius={"10px"}
                border={"2px solid #bababa"}
                fontSize={"48px"}
              >
                <FaUserTie />
              </Flex>
              <Flex flexDir={"column"}>
                <Heading fontSize={"32px"}>
                  <Counter />
                </Heading>
                <Flex fontSize={"28px"}>
                  <Flex>Happy Clients</Flex>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
          <Flex w={"33%"} className="reveal2" flexDir={"column"} gap={"20px"}>
            <Flex gap={"20px"} alignItems={"center"} p={"10px"}>
              <Flex
                p={"8px"}
                borderRadius={"10px"}
                border={"2px solid #bababa"}
                fontSize={"48px"}
              >
                <MdSettings />
              </Flex>
              <Flex flexDir={"column"}>
                <Heading fontSize={"32px"}>
                  <Counter />
                </Heading>
                <Flex fontSize={"28px"}>
                  <Flex>Projects Completed</Flex>
                </Flex>
              </Flex>
            </Flex>
          </Flex>{" "}
          <Flex w={"33%"} className="reveal2" flexDir={"column"} gap={"20px"}>
            <Flex gap={"20px"} alignItems={"center"} p={"10px"}>
              <Flex
                p={"10px"}
                borderRadius={"10px"}
                border={"2px solid #bababa"}
                fontSize={"44px"}
              >
                <FaRegCalendarAlt />
              </Flex>
              <Flex flexDir={"column"}>
                <Heading fontSize={"32px"}>
                  <Counter />
                </Heading>
                <Flex fontSize={"28px"}>
                  <Flex>Years of Experience</Flex>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
});
const CurrentProjectSection = memo(({ id, onActive }) => {
  const currentProjectDetails = {
    title: "LOTO Management System",
    techStacks: [
      "React",
      "Chakra UI",
      "Javascript",
      "HTML",
      "CSS",
      "Laravel",
      "PHP",
      "Firebase",
      "MySQL",
    ],
    description:
      "LOTO Management System is a full-featured web application designed to streamline and secure the Lockout/Tagout (LOTO) safety process used in industrial environments. This system ensures compliance with safety regulations by guiding users through a standardized, multi-step procedure for isolating hazardous energy during maintenance and servicing operations.",
  };
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.6 });

  useEffect(() => {
    if (isInView) {
      onActive(id);
    }
  }, [isInView, id, onActive]);
  return (
    <Flex
      background={"#1f1f26"}
      color={"white"}
      // backgroundImage={`${CubeBackground}`}
      zIndex={2}
      position={"relative"}
      w={"100%"}
      justify={"center"}
      flexDir={"column"}
      alignItems={"center"}
      py={"60px"}
      gap={"40px"}
    >
      {" "}
      <ParticleBackground id={"1"} particles={200} hasLink={false} />
      <Flex
        ref={ref}
        gap={{ base: "0px", sm: "60px" }}
        flexDir={"column"}
        justify={"center"}
        alignItems={"center"}
      >
        <Flex
          justify={"center"}
          width={"fit-content"}
          position={"relative"}
          flexDir={"column"}
          alignItems={"center"}
        >
          <Flex className="reveal">
            <Heading fontSize={{ base: "40px", sm: "48px" }}>
              Current Project
            </Heading>
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
        <Flex
          pb={{ base: "30px", sm: "150px", md: "350px" }}
          justify={"center"}
          maxW={"200px"}
        >
          <MacbookScroll title={"My Latest Project"} />
        </Flex>
      </Flex>
      <Flex
        maxW={"768px"}
        px={{ base: "20px", md: "0px" }}
        className="reveal3"
        // justify={"center"}
        gap={"30px"}
        // alignItems={"center"}
        flexDir={"column"}
      >
        <Heading
          bg="linear-gradient(to right,rgb(255, 64, 83), #bf081a)"
          bgClip={"text"}
          fontSize={{ base: "28px", sm: "32px" }}
          color={"#dc143c"}
        >
          {currentProjectDetails.title}
        </Heading>
        <Flex gap={"10px"} flexWrap={"wrap"}>
          {currentProjectDetails.techStacks.map((val) => (
            <Flex
              bg={"#373740"}
              borderRadius={"10px"}
              color={"#ededed"}
              fontSize={"14px"}
              px={"10px"}
              py={"2px"}
            >
              {val}
            </Flex>
          ))}
        </Flex>
        <Flex color={"#ededed"}>{currentProjectDetails.description}</Flex>
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
  );
});
const MyProjectsSection = memo(({ id, onActive }) => {
  const content = [
    {
      title: "Collaborative Editing",
      description:
        "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
      content: (
        <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
          Collaborative Editing
        </div>
      ),
    },
    {
      title: "Real time changes",
      description:
        "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
      content: (
        <div className="flex h-full w-full items-center justify-center text-white">
          <img
            src="/linear.webp"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
      ),
    },
    {
      title: "Version control",
      description:
        "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
      content: (
        <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] text-white">
          Version control
        </div>
      ),
    },
    {
      title: "Running out of content",
      description:
        "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
      content: (
        <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
          Running out of content
        </div>
      ),
    },
  ];
  const myProjects = [
    {
      id: 1,
      title: "LOTO Workflow Management System Demo",
      projectType: "Personal",
      techStacks: [
        "React",
        "Chakra UI",
        "HTML",
        "CSS",
        "Javascript",
        "Laravel",
        "PHP",
        "MySQL",
      ],
      description:
        "LOTO Management System is a full-featured web application designed to streamline and secure the Lockout/Tagout (LOTO) safety process used in industrial environments. This system ensures compliance with safety regulations by guiding users through a standardized, multi-step procedure for isolating hazardous energy during maintenance and servicing operations.",
      projectImages: [
        {
          id: 1,
          image: lotoDemoDashboardPage,
          pageName: "Dashboard Page",
        },
        {
          id: 2,
          image: lotoDemoReportDetailsPage,
          pageName: "Report Details Page",
        },

        {
          id: 3,
          image: lotoDemoCreateWorkFlowPanel,
          pageName: "Create Work Flow Panel",
        },
        {
          id: 4,
          image: lotoDemoMemberListPage,
          pageName: "Member List Page",
        },
      ],
      route: "gramedia",
      githubLink: "https://github.com/ThomasAlvin/loto-workflow-demo",
      demoLink: "https://loto-workflow-demo.netlify.app/",
    },
    {
      id: 2,
      title: "E-Commerce Admin Panel",
      projectType: "Group",
      techStacks: [
        "React",
        "HTML",
        "CSS",
        "Javascript",
        "Bootstrap",
        "Laravel",
        "PHP",
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
      route: "digipas-e-commerce",
    },
    {
      id: 3,
      title: "E-Commerce with Stripe",
      projectType: "Group",
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
      route: "digipas-admin-panel",
    },
    {
      id: 4,
      title: "Gramedia Book Store Copy",
      projectType: "Group",
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
      ],
      route: "gramedia",
    },
  ];
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.6 });

  useEffect(() => {
    if (isInView) {
      onActive(id);
    }
  }, [isInView, id, onActive]);
  return (
    <>
      <Flex
        id="projects"
        color={"black"}
        backgroundImage={`${CubeBackground}`}
        zIndex={2}
        position={"relative"}
        w={"100%"}
        flexDir={"column"}
        pt={"60px"}
        pb={"60px"}
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
          gap={"40px"}
        >
          <Flex
            ref={ref}
            justify={"center"}
            width={"fit-content"}
            position={"relative"}
            flexDir={"column"}
            alignItems={"center"}
          >
            <Flex className="reveal">
              <Heading fontSize={{ base: "40px", sm: "48px" }}>
                My Projects
              </Heading>
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
          <StickyScroll myProjects={myProjects} />
        </Flex>
      </Flex>
    </>
  );
});
