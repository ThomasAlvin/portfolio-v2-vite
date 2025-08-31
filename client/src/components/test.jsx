import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function CursorHighlightBackground() {
  const [position, setPosition] = useState({ x: -9999, y: -9999 });
  const [lightGlimmer, setLightGlimmer] = useState(false);
  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useState(() => {
    setInterval(() => {
      setLightGlimmer((prevState) => !prevState);
    }, 1200);
  }, []);
  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      w="100vw"
      h="100vh"
      zIndex={0} // Make sure this is below the main content, but above your particle background
      pointerEvents="none"
      sx={{
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: `radial-gradient(circle 20px at ${position.x}px ${position.y}px, rgba(255, 255, 255, 1), transparent 80%)`,
          transform: `scale(${lightGlimmer ? 1 : 1.5})`,
          transformOrigin: `${position.x}px ${position.y}px`, // <- THIS fixes it
          transition: "transform 1.2s ease, background 0.05s ease-out",
        },
      }}
    />
  );
}
