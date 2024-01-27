import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, y: -200, x: 0 },
  enter: { opacity: 1, y: 0, x: 0 },
};

export default function Entry({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      variants={variants}
      initial={variants.hidden}
      animate={variants.enter}
      defaultValue={0}
      transition={{ type: "spring", duration:"1" }}
    >
      {children}
    </motion.div>
  );
}
