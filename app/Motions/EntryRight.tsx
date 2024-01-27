import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, y: 0, x: 100 },
  enter: { opacity: 1, y: 0, x: 0 },
};

export default function EntryRight({
  children,
  duration,
}: {
  children: React.ReactNode;
  duration?: number;
}) {
  return (
    <motion.div
      variants={variants}
      initial={variants.hidden}
      animate={variants.enter}
      transition={{ type: "spring", duration: duration || 1 }}
    >
      {children}
    </motion.div>
  );
}
