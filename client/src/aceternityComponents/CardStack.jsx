import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Button, Flex, Heading, IconButton, Image } from "@chakra-ui/react";
import testImage2 from "../assets/projectImages/Digipas Admin/Add Parcel Box Page.png";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";

let interval;

export const CardStack = ({ items, offset, scaleFactor }) => {
  const [isCooldown, setIsCooldown] = useState(false);
  const MotionFlex = motion(Flex);
  const switchCooldownTime = 200;
  const CARD_OFFSET = offset || 15;
  const SCALE_FACTOR = scaleFactor || 0.06;
  const [cards, setCards] = useState(items);
  const intervalRef = useRef(null);

  // useEffect(() => {
  //   startFlipping();

  //   return () => clearInterval(intervalRef.current);
  // }, []);
  const startFlipping = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      switchCard("right");
    }, 6000);
  };

  const switchCard = (direction) => {
    if (isCooldown) return;
    setCards((prevCards) => {
      const newCards = [...prevCards];
      if (direction === "right") {
        newCards.unshift(newCards.pop()); // last to front
      } else if (direction === "left") {
        newCards.push(newCards.shift()); // first to end
      }
      return newCards;
    });
    setIsCooldown(true);
    setTimeout(() => {
      setIsCooldown(false); // reset cooldown after delay
    }, switchCooldownTime);
  };

  const handleCardSwitch = (direction) => {
    clearInterval(intervalRef.current); // reset interval
    switchCard(direction); // do the switch
    // startFlipping(); // restart timer
  };

  return (
    <Flex flexDir={"column"} position={"relative"}>
      <motion.div
        style={{ width: "600px" }}
        className="flex-col"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        // overflow="hidden"
        // border={"4px solid #848484"}
      >
        <Flex className="relative w-full" h={"337px"}>
          {cards.map((card, index) => {
            return (
              <motion.div
                key={card.id}
                className="absolute w-full h-full dark:bg-black bg-white  rounded-3xl p-4 shadow-xl border-[10px] border-solid border-[#848484] dark:border-white/[0.1]  shadow-black/[0.1] dark:shadow-white/[0.05] flex flex-col justify-between ..."
                style={{
                  border: "2px solid #848484",
                  // boxShadow: "0px 0px 3px rgba(50,50,93,0.5)",
                  transformOrigin: "top center",
                }}
                animate={{
                  top: index * -CARD_OFFSET,
                  scale: 1 - index * SCALE_FACTOR, // decrease scale for cards that are behind
                  zIndex: cards.length - index, //  decrease z-index for the cards that are behind
                }}
              >
                <Image
                  w={"100%"}
                  h={"100%"}
                  borderRadius={"20px"}
                  src={card.image}
                />
              </motion.div>
            );
          })}
        </Flex>
      </motion.div>

      <Flex
        className="reveal2"
        position={"absolute"}
        justify={"space-between"}
        w={"100%"}
        bottom={"-45px"}
        left={0}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={cards[0].pageName} // important: unique key to detect changes
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <Flex fontWeight={700} color="#848484" fontSize="24px">
              {cards[0].pageName}
            </Flex>
          </motion.div>
        </AnimatePresence>
        {/* <Flex fontWeight={700} color={"#848484"} fontSize={"24px"}>
          {cards[0].pageName}
        </Flex> */}

        <Flex color={"#848484"} gap={"4px"} fontSize={"32px"}>
          <IconButton
            minW={"auto"}
            h={"auto"}
            fontSize={"32px"}
            bg={"transparent"}
            color={"inherit"}
            cursor={"pointer"}
            transition={"0.1s ease-in-out"}
            _hover={{ color: "black" }}
            onClick={() => {
              handleCardSwitch("left");
            }}
          >
            <IoIosArrowDropleftCircle />
          </IconButton>
          <IconButton
            w={"auto"}
            h={"auto"}
            fontSize={"32px"}
            bg={"transparent"}
            color={"inherit"}
            cursor={"pointer"}
            transition={"0.1s ease-in-out"}
            _hover={{ color: "black" }}
            onClick={() => {
              handleCardSwitch("right");
            }}
          >
            <IoIosArrowDroprightCircle />
          </IconButton>
        </Flex>
      </Flex>
    </Flex>
  );
};
