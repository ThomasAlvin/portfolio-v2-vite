import { Flex } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";

export default function Counter() {
  const [startCounting, setStartCounting] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStartCounting(true);
          observer.unobserve(counterRef.current); // Stop observing after animation
        }
      },
      { threshold: 0.5 }, // Trigger when 50% is visible
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <Flex textAlign={"center"} fontSize={"36px"}>
      <Flex ref={counterRef}>
        {startCounting ? (
          <CountUp start={0} end={800} duration={2} separator="," />
        ) : (
          "0"
        )}
        +
      </Flex>
    </Flex>
  );
}
