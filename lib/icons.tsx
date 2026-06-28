import {
  LuSun, LuMoon, LuDownload, LuMapPin, LuCode, LuArrowUpRight,
  LuMail, LuPhone, LuGlobe, LuLayers, LuCodeXml, LuDatabase, LuCloud,
} from "react-icons/lu";
import { FaStar, FaGithub, FaLinkedin, FaInstagram, FaStackOverflow } from "react-icons/fa6";

/** Icon set, keyed by the same names used across data.ts and the components.
 * UI glyphs come from Lucide (react-icons/lu); brand marks from Font Awesome.
 * Each is pre-sized so it never balloons in an unconstrained flex context. */
export const icons = {
  sun: <LuSun size={18} aria-hidden />,
  moon: <LuMoon size={17} aria-hidden />,
  download: <LuDownload size={16} aria-hidden />,
  pin: <LuMapPin size={15} aria-hidden />,
  focus: <LuCode size={15} aria-hidden />,
  arrow: <LuArrowUpRight size={15} aria-hidden />,
  star: <FaStar size={11} aria-hidden />,
  mail: <LuMail size={17} aria-hidden />,
  phone: <LuPhone size={16} aria-hidden />,
  github: <FaGithub size={17} aria-hidden />,
  linkedin: <FaLinkedin size={17} aria-hidden />,
  instagram: <FaInstagram size={17} aria-hidden />,
  stack: <FaStackOverflow size={16} aria-hidden />,
  globe: <LuGlobe size={16} aria-hidden />,
  layers: <LuLayers size={18} aria-hidden />,
  api: <LuCodeXml size={18} aria-hidden />,
  db: <LuDatabase size={18} aria-hidden />,
  cloud: <LuCloud size={18} aria-hidden />,
} as const;

export type IconName = keyof typeof icons;
