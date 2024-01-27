import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface linkProps {
  name: string;
  href: string;
}

const links: linkProps[] = [
  { name: "Home", href: "/" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  let [activeTab, setActiveTab] = useState(links[0].href);

  let [colorChange, setColorChange] = useState(false);

  useEffect(() => {
    const changeNavbarColor = () => {
      if (window.scrollY >= 8) {
        setColorChange(true);
      } else {
        setColorChange(false);
      }
    };

    window.addEventListener("scroll", changeNavbarColor);

    return () => {
      window.removeEventListener("scroll", changeNavbarColor);
    };
  }, []);

  return (
    <motion.div
      className={`${
        colorChange ? "transition ease-in duration-0.5 bg-black/75" : "bg-none"
      } flex justify-center w-full absolute items-center p-4 space-x-1`}
    >
      {links.map((link) => (
        <Link
          key={link.href}
          onClick={() => setActiveTab(link.href)}
          className={`${
            activeTab === link.href ? "" : "hover:text-white/60"
          } relative rounded-full px-3 py-1.5 text-md font-medium text-white outline-sky-400 transition focus-visible:outline-2`}
          style={{
            WebkitTapHighlightColor: "transparent",
          }}
          href={link.href}
        >
          {activeTab === link.href && (
            <motion.span
              layoutId="bubble"
              className="absolute inset-0 z-10 bg-orange-100 mix-blend-difference"
              style={{ borderRadius: 9999 }}
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
          {link.name}
        </Link>
      ))}
    </motion.div>
  );
}
