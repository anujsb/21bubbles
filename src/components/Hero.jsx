import { useRef, useEffect } from "react";
import { useMotionValue, motion, useSpring, useTransform } from "framer-motion";
import Typed from "typed.js";
import { useCursorVariants } from "./canvas/CursorVariants";
import { useMousePosition } from "./canvas/MousePosition";

const Hero = () => {
  const {
    cursorText,
    setCursorText,
    cursorVariant,
    setCursorVariant,
    getVariantProperties,
  } = useCursorVariants();
  const { ref, mouseXPosition, mouseYPosition } = useMousePosition();

  const spring = {
    type: "spring",
    stiffness: 500,
    damping: 28,
  };

  const projectEnter = () => {
    setCursorText("");
    setCursorVariant("project");
  };

  const projectLeave = () => {
    setCursorText("");
    setCursorVariant("default");
  };

  const typedRef = useRef(null);

  useEffect(() => {
    if (typedRef.current) {
      const options = {
        strings: ["Websites.", "Chatbots.", "Automation."],
        typeSpeed: 50, // typing speed in milliseconds
        backSpeed: 50, // backspacing speed in milliseconds
        loop: true, // loop the animation
      };

      const typed = new Typed(typedRef.current, options);

      // Cleanup on unmount
      return () => {
        typed.destroy();
      };
    }
  }, []);

  return (
    <div className="" ref={ref}>
      <motion.div
        variants={getVariantProperties(mouseXPosition, mouseYPosition)}
        className="circle title"
        animate={cursorVariant}
        transition={spring}
      >
        <span className="cursorText">{cursorText}</span>
        <h1></h1>
      </motion.div>
      <div className="">
        {" "}
        {/* useless */}
        <div className=" lg:mx-20 md:mx-20 sm:mx-5 my-28">
          {" "}
          {/* sometexts */}
          <h1
            className=" title lg:text-left md:text-left sm:text-center lg:text-9xl md:text-9xl "
            onMouseEnter={projectEnter}
            onMouseLeave={projectLeave}
          >
            sometext
          </h1>
          <h1
            className="md:mx-10 lg:mx-10 sm:mx-0 w-min title text-left lg:text-9xl md:text-9xl"
            onMouseEnter={projectEnter}
            onMouseLeave={projectLeave}
          >
            <span ref={typedRef}></span>
          </h1>
        </div>
        <div className="flex justify-end mx-20 my-10">
          {" "}
          {/* desc */}
          <p
            className="title w-min text-right "
            onMouseEnter={projectEnter}
            onMouseLeave={projectLeave}
          >
            some deta dfghjk fghjk <nav>EWZRXCTVYBNJKMERDTFGYUI </nav>
          </p>
        </div>
        <div className="m-5">
          {" "}
          {/* about */}
          {/* <div className="overlay"></div> */}
          <video
            onMouseEnter={projectEnter}
            onMouseLeave={projectLeave}
            className="rounded-md"
            src={
              "https://cdn.sanity.io/files/f3tpxs09/production/f7c533514e697633ae912646f5b296ee600340a9.mp4"
            }
            autoPlay
            loop
            muted
          />
        </div>
        {/* serv */}
        <div className="h-screen justify-center items-center text-black grid grid-flow-row  sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2">
          <div>
            <h1
              className="  text-7xl"
              onMouseEnter={projectEnter}
              onMouseLeave={projectLeave}
            >
              what we provide
            </h1>
          </div>
          <div
            className=" md:my-10 lg:my-10 mx-auto max-w-5xl"
            onMouseEnter={projectEnter}
            onMouseLeave={projectLeave}
          >
            <Link
              heading="web design"
              subheading="Learn what we do here"
              imgSrc="/imgs/random/11.jpg"
              href="#"
            />
            <Link
              heading="Chatbots"
              subheading="We work with great people"
              imgSrc="/imgs/random/6.jpg"
              href="#"
            />
            <Link
              heading="Automation"
              subheading="Our work speaks for itself"
              imgSrc="/imgs/random/4.jpg"
              href="#"
            />
          </div>
        </div>
        ?
      </div>{" "}
      {/* useless */}
    </div>
  );
};

const Link = ({ heading, imgSrc, subheading, href }) => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const top = useTransform(mouseYSpring, [0.5, -0.5], ["40%", "60%"]);
  const left = useTransform(mouseXSpring, [0.5, -0.5], ["60%", "70%"]);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  return (
    <motion.a
      href={href}
      ref={ref}
      onMouseMove={handleMouseMove}
      initial="initial"
      whileHover="whileHover"
      className="group relative  items-center justify-between  border-[#4d4d4d] py-4 transition-colors duration-500 hover:border-black md:py-8"
    >
      <div>
        <motion.span
          variants={{
            initial: { x: 0 },
            whileHover: { x: -16 },
          }}
          transition={{
            type: "spring",
            staggerChildren: 0.075,
            delayChildren: 0.25,
          }}
          className="relative z-10 block text-4xl font-bold text-[#525243] transition-colors duration-500 group-hover:text-black md:text-6xl"
        >
          {heading.split("").map((l, i) => (
            <motion.span
              variants={{
                initial: { x: 0 },
                whileHover: { x: 16 },
              }}
              transition={{ type: "spring" }}
              className="inline-block"
              key={i}
            >
              {l}
            </motion.span>
          ))}
        </motion.span>
        <span className="relative z-10 mt-2 block text-base text-[#4d4d4d] transition-colors duration-500 group-hover:text-black ">
          {subheading}
        </span>
      </div>

      {/* <motion.img
        style={{
          top,
          left,
          translateX: "-50%",
          translateY: "-50%",
        }}
        variants={{
          initial: { scale: 0, rotate: "-12.5deg" },
          whileHover: { scale: 1, rotate: "12.5deg" },
        }}
        transition={{ type: "spring" }}
        src={imgSrc}
        className="absolute z-0 h-24 w-32 rounded-lg object-cover md:h-48 md:w-64"
        alt={`Image representing a link for ${heading}`}
      /> */}

      <motion.div
        variants={{
          initial: {
            x: "25%",
            opacity: 0,
          },
          whileHover: {
            x: "0%",
            opacity: 1,
          },
        }}
        transition={{ type: "spring" }}
        className="relative z-10 p-4"
      >
        {/* <FiArrowRight className="text-5xl text-neutral-50" /> */}
      </motion.div>
    </motion.a>
  );
};

export default Hero;
