import React, {
  useEffect,
  useRef,
  useState,
  createContext,
  useContext,
} from "react";
import {
  IconArrowNarrowLeft,
  IconArrowNarrowRight,
  IconX,
} from "@tabler/icons-react";
import { cn } from "../utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "../hooks/useOutsideClick"; // Ensure you have this hook
import { FaGithub } from "react-icons/fa";
import TextGenerateEffect from "./TextGenerateEffect";

export const CarouselContext = createContext({
  onCardClose: () => { },
  currentIndex: 0,
});

export const Carousel = ({ items, initialScroll = 0 }) => {
  const carouselRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = initialScroll;
      checkScrollability();
    }
  }, [initialScroll]);

  const checkScrollability = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
    }
  };

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  const handleCardClose = (index) => {
    if (carouselRef.current) {
      const cardWidth = isMobile() ? 230 : 384;
      const gap = isMobile() ? 4 : 8;
      const scrollPosition = (cardWidth + gap) * (index + 1);
      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
      setCurrentIndex(index);
    }
  };

  const isMobile = () => {
    return window && window.innerWidth < 768;
  };

  return (
    <CarouselContext.Provider value={{ onCardClose: handleCardClose, currentIndex }}>
      <div className="relative w-full">
        <div
          className="flex w-full overflow-x-scroll overscroll-x-auto py-10 md:py-20 scroll-smooth [scrollbar-width:none]"
          ref={carouselRef}
          onScroll={checkScrollability}
        >
          <div className="flex flex-row justify-start gap-4 pl-4 max-w-7xl mx-auto">
            {items.map((item, index) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 * index, ease: "easeOut" } }}
                key={"card" + index}
                className="last:pr-[5%] md:last:pr-[33%] rounded-3xl"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </div>
        <div className="flex justify-end gap-2 mr-10">
          <button className="relative z-40 h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center disabled:opacity-50" onClick={scrollLeft} disabled={!canScrollLeft}>
            <IconArrowNarrowLeft className="h-6 w-6 text-gray-500" />
          </button>
          <button className="relative z-40 h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center disabled:opacity-50" onClick={scrollRight} disabled={!canScrollRight}>
            <IconArrowNarrowRight className="h-6 w-6 text-gray-500" />
          </button>
        </div>
      </div>
    </CarouselContext.Provider>
  );
};

export const Card = ({ card, index, layout = false }) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);
  const { onCardClose, currentIndex } = useContext(CarouselContext);

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") {
        handleClose();
      }
    }
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useOutsideClick(containerRef, () => handleClose());

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    onCardClose(index);
  };

  return (
    <>
      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 h-screen z-50 overflow-auto">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="bg-black/80 backdrop-blur-lg h-full w-full fixed inset-0" />
            <motion.div ref={containerRef} className="max-w-5xl mx-auto bg-white dark:bg-neutral-900 h-fit z-[60] my-10 p-4 md:p-10 rounded-3xl font-sans relative">
              <button className="sticky top-4 h-8 w-8 right-0 ml-auto bg-black dark:bg-white rounded-full flex items-center justify-center" onClick={handleClose}>
                <IconX className="h-6 w-6 text-neutral-100 dark:text-neutral-900" />
              </button>
              
              <TextGenerateEffect className=" text-4xl font-semibold text-neutral-700 mt-4 dark:text-white" words={card.title}/>
           
              <motion.div className="py-10"
                 initial={{ opacity: 0, y: -50 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 1.5, ease: "easeOut" }}
              >{card.content}</motion.div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    <motion.button 
  onClick={handleOpen} 
  className="relative rounded-3xl bg-white h-130 w-75 md:h-[41rem] md:w-96 overflow-hidden flex flex-col"
>
  
  <BlurImage src={card.src} alt={card.title} className="object-cover absolute z-10 inset-0 " />

 
  <div className="absolute h-full top-0 inset-x-0 bg-gradient-to-b  via-transparent to-transparent z-30 pointer-events-none" />

  
  <div className="absolute bottom-0 left-0 w-full z-20 p-6 ">
   
    <p className="text-black sm:text-xl md:text-3xl font-semibold font-sans ">
      {card.category}
    </p>

   
    <div className="flex flex-row bg items-center gap-4 mt-4 flex-wrap">
      <div className="">
      {card.github && (
        <a 
        href={card.github} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="flex items-center gap-2 text-black hover:text-gray-700 transition"
        >
          <FaGithub className="h-6 w-6 " />
        </a>
      )}
      </div>

      {/* Technologies */}
      <div className=" ">
        {(card.technologies ?? "").split(",").map((tech, index) => (
          <span 
            key={index} 
            className="text-sm md:text-base font-medium text-black dark:text-white bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded-full"
          >
            {tech.trim()}
          </span>
        ))}
      </div>
    </div>
  </div>
</motion.button>
    </>
  );
};

export const BlurImage = ({ src, className, alt, ...rest }) => {
  return <img className={`transition duration-300 ${className}`} src={src} alt={alt ? alt : "Image"} {...rest} />;
};
