import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, y: 200, x: 0 },
  enter: { opacity: 1, y: 0, x: 0 },
};

export default function Entry({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      variants={variants}
      initial={variants.hidden}
      whileInView={variants.enter}
      className="grid  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:p-1 md:p-4  grid-cols-4 w-full h-full"
      transition={{duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}
