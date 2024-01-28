import { motion } from "framer-motion";

function TypeWriter({ text, duration }: { text?: string; duration?: number }) {
  const content = text?.split(" ") || "Welcome".split("");

  return (
    <div className="text-3xl font-medium sm:text-clip md:text-justify space-x-2 text-orange-100">
      {content.map((el, i) => (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: duration || 2,
            delay: i / 10,
          }}
          key={i}
        >
          {el}{" "}
        </motion.span>
      ))}
    </div>
  );
}

export default TypeWriter;
