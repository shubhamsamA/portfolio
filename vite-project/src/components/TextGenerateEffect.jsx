import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "../utils/cn"; // Adjust the import path as needed

const TextGenerateEffect = ({
  words,
  className = "",
  filter = true,
  duration = 1.5,
}) => {
  const [scope, animate] = useAnimate();
  const wordsArray = words.split(" ");

  useEffect(() => {
    if (!scope.current) return;

    animate(
      "span",
      { opacity: 1, filter: filter ? "blur(0px)" : "none" },
      { duration: duration || 1, delay: stagger(0.2) }
    );
  }, [scope, animate, filter, duration]);

  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-4">
        <motion.div
          ref={scope}
        //   className="dark:text-white text-black text-4xl leading-snug tracking-wide"
        >
          {wordsArray.map((word, idx) => (
            <motion.span
              key={word + idx}
              className="dark:text-white text-black opacity-0"
              style={{ filter: filter ? "blur(10px)" : "none" }}
            >
              {word}{" "}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default TextGenerateEffect;
