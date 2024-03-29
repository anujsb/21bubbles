import { useCursorVariants } from "./canvas/CursorVariants";
import { useMousePosition } from "./canvas/MousePosition";

import { useMotionValue, motion, useSpring, useTransform } from "framer-motion";
import React, { useRef } from "react";
// import { FiArrowRight } from "react-icons/fi";

export const Services = () => {
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
  return (
    <section className="h-auto p-4 md:p-8">
      <div
        className=" justify-center items-center text-black grid grid-flow-row  sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2"
        // ref={ref}
      >
        {/* <motion.div
          variants={getVariantProperties(mouseXPosition, mouseYPosition)}
          className="circle title"
          animate={cursorVariant}
          transition={spring}
        >
          <span className="cursorText">{cursorText}</span>
          <h1></h1>
        </motion.div> */}
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
          {/* <Link
          heading="Careers"
          subheading="We want cool people"
          imgSrc="/imgs/random/5.jpg"
          href="#"
        />
        <Link
          heading="Fun"
          subheading="Incase you're bored"
          imgSrc="/imgs/random/10.jpg"
          href="#"
        /> */}
        </div>
      </div>
      {/* <div className='bg-red-600 h-screen'>  
        <div>
          <div className='grid grid-cols-3 gap-4 text-black'>
            <div className='text-black'>anuj</div>
            <div className='text-black'>2</div>
            <div className='text-black'>3</div>
            <div className='text-black col-span-2'>4</div>
            <div className='text-black'>5</div>
          </div>
        </div>
      </div> */}
      {/* <div>
        <h1 className='text-black'>
          hiii
        </h1>
      </div> */}
    </section>
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

export default Services;
