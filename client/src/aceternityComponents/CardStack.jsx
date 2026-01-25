import { Flex, IconButton, Image } from "@chakra-ui/react";
import { AnimatePresence, motion } from "motion/react";
import { useRef, useState } from "react";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";

let interval;

export const CardStack = ({ items, offset, scaleFactor }) => {
  const [isCooldown, setIsCooldown] = useState(false);
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
    <Flex
      flexDir={"column"}
      alignItems={"center"}
      justify={"center"}
      w={"100%"}
      position={"relative"}
    >
      <motion.div
        style={{ maxWidth: "600px", width: "100%" }}
        className="flex-col"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        // overflow="hidden"
        // border={"4px solid #848484"}
      >
        <Flex className="relative w-full" h={{ base: "250px", sm: "337px" }}>
          {cards.map((card, index) => {
            return (
              <motion.div
                key={card.id}
                className="absolute flex h-full w-full flex-col justify-between rounded-3xl border-[10px] border-solid border-[#848484] bg-white p-4 shadow-xl shadow-black/[0.1] dark:border-white/[0.1] dark:bg-black dark:shadow-white/[0.05] ..."
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
        alignItems={"center"}
        w={"100%"}
        bottom={{ base: "-35px", md: "-45px" }}
        left={{ base: "auto", lg: 0 }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={cards[0].pageName} // important: unique key to detect changes
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <Flex
              fontWeight={700}
              color="#848484"
              fontSize={{ base: "16px", sm: "20px", md: "24px" }}
            >
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
            fontSize={{ base: "24px", sm: "28px", md: "32px" }}
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
            fontSize={{ base: "24px", sm: "28px", md: "32px" }}
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
