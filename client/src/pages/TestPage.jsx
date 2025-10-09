import { Flex } from "@chakra-ui/react";
import ParticleBackground from "../components/ParticleBackground";
import CursorHighlightBackground from "../components/test";
import { motion } from "framer-motion";
export default function TestPage() {
  return (
    <Flex
      h="100vh"
      w="100vw"
      bg="#f8f9fa"
      position="relative"
      zIndex={1} // Ensure content appears above both background layers
    >
      <div className="flex justify-center items-center h-screen bg-sky-100">
        <motion.svg
          width="250"
          height="200"
          viewBox="0 0 250 200"
          xmlns="http://www.w3.org/2000/svg"
          initial={{ x: -200 }}
          animate={{ x: 400 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        >
          {/* Cat body */}
          <ellipse cx="120" cy="110" rx="60" ry="25" fill="black" />

          {/* Head (oval instead of circle) */}
          <ellipse cx="190" cy="95" rx="25" ry="22" fill="black" />

          {/* Left ear */}
          <polygon points="170,75 180,55 185,80" fill="black" />

          {/* Right ear */}
          <polygon points="200,55 210,75 195,80" fill="black" />

          {/* Eyes */}
          <circle cx="182" cy="95" r="3" fill="white" />
          <circle cx="198" cy="95" r="3" fill="white" />

          {/* Nose */}
          <polygon points="190,103 186,108 194,108" fill="pink" />

          {/* Whiskers */}
          <line
            x1="170"
            y1="103"
            x2="150"
            y2="100"
            stroke="white"
            strokeWidth="2"
          />
          <line
            x1="170"
            y1="108"
            x2="150"
            y2="110"
            stroke="white"
            strokeWidth="2"
          />
          <line
            x1="210"
            y1="103"
            x2="230"
            y2="100"
            stroke="white"
            strokeWidth="2"
          />
          <line
            x1="210"
            y1="108"
            x2="230"
            y2="110"
            stroke="white"
            strokeWidth="2"
          />

          {/* Tail */}
          <motion.rect
            x="70"
            y="60"
            width="10"
            height="40"
            fill="black"
            animate={{ rotate: [10, -10, 10] }}
            transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
            style={{ originX: "55px", originY: "95px" }}
          />

          {/* Front leg */}
          <motion.line
            x1="80"
            y1="120"
            x2="80"
            y2="160"
            stroke="black"
            strokeWidth="8"
            animate={{ rotate: [50, -20, 50] }}
            transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
            style={{ originX: "0px", originY: "10px" }}
          />
          <motion.line
            x1="100"
            y1="120"
            x2="100"
            y2="160"
            stroke="black"
            strokeWidth="8"
            animate={{ rotate: [20, -50, 20] }}
            transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
            style={{ originX: "0px", originY: "10px" }}
          />
          {/* Back leg */}
          <motion.line
            x1="140"
            y1="120"
            x2="140"
            y2="160"
            stroke="black"
            strokeWidth="8"
            animate={{ rotate: [50, -20, 50] }}
            transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
            style={{ originX: "0px", originY: "10px" }}
          />
          <motion.line
            x1="160"
            y1="120"
            x2="160"
            y2="160"
            stroke="black"
            strokeWidth="8"
            animate={{ rotate: [20, -50, 20] }}
            transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
            style={{ originX: "0px", originY: "10px" }}
          />
        </motion.svg>
      </div>
      {/* <CursorHighlightBackground /> */}
      <Flex zIndex={2}>sdsa</Flex>
    </Flex>
  );
}
