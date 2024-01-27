import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useState } from "react";

interface linkProps {
  name: string;
  href: string;
}

const links: linkProps[] = [
  { name: "Home", href:"#home" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  let [activeTab, setActiveTab] = useState(links[0].href);

  console.log(pathname);

  return (
    <div className="flex justify-center items-center p-4 mt-1 space-x-1">
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
    </div>
  );
}
