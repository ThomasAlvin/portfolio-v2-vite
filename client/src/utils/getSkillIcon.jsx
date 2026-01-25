import { Flex, Tooltip } from "@chakra-ui/react";
import {
  FaReact,
  FaPhp,
  FaLaravel,
  FaStripe,
  FaHtml5,
  FaCss3,
  FaBootstrap,
  FaNodeJs,
} from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { IoLogoJavascript } from "react-icons/io";
import { SiChakraui, SiExpress, SiTailwindcss } from "react-icons/si";

export function getSkillIcon(skill) {
  switch (skill) {
    case "React":
      return <FaReact className="text-blue-400" />;
    case "Laravel":
      return <FaLaravel className="text-red-500" />;
    case "PHP":
      return <FaPhp className="text-purple-600" />;
    case "Stripe":
      return <FaStripe className="text-indigo-500" />;
    case "TailwindCSS":
      return <SiTailwindcss className="text-teal-400" />;
    case "HTML":
      return <FaHtml5 className="text-orange-600" />;
    case "Chakra UI":
      return <SiChakraui className="text-cyan-500" />;
    case "Javascript":
      return <IoLogoJavascript className="text-yellow-400" />;
    case "CSS":
      return <FaCss3 className="text-blue-600" />;
    case "MySQL":
      return <GrMysql className="text-blue-800" />;
    case "Tailwind CSS":
      return <SiTailwindcss className="text-cyan-500" />;
    case "Bootstrap":
      return <FaBootstrap className="text-purple-500" />;
    case "Node.js":
      return <FaNodeJs className="text-green-600" />;
    case "Express.js":
      return <SiExpress className="text-yellow-400" />;
    default:
      return <span>{""}</span>; // fallback
  }
}
