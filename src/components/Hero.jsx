// Hero.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useCursorVariants } from './canvas/CursorVariants';
import { useMousePosition } from './canvas/MousePosition';

const Hero = () => {
  const { cursorText, setCursorText, cursorVariant, setCursorVariant, getVariantProperties } = useCursorVariants();
  const { ref, mouseXPosition, mouseYPosition } = useMousePosition();

  const spring = {
    type: 'spring',
    stiffness: 500,
    damping: 28,
  };

  const projectEnter = () => {
    setCursorText('');
    setCursorVariant('project');
  };

  const projectLeave = () => {
    setCursorText('');
    setCursorVariant('default');
  };

  return (
    <div className=''>
      <div className="h-screen flex justify-center items-center" ref={ref}>
        <motion.div
          variants={getVariantProperties(mouseXPosition, mouseYPosition)}
          className="circle title"
          animate={cursorVariant}
          transition={spring}
        >
          <span className="cursorText">{cursorText}</span>
          <h1></h1>
        </motion.div>

        <div
          className=""
        >
          <h1 
            className="mx-10 title text-left lg:text-9xl md:text-9xl"
            onMouseEnter={projectEnter}
            onMouseLeave={projectLeave}
          >
            Automations &
          </h1> 
          <h1 
            className="mx-10 w-min title text-left lg:text-9xl md:text-9xl "
            onMouseEnter={projectEnter}
            onMouseLeave={projectLeave}
          >
            Chatbots
          </h1> 
          <div className='flex justify-end'>
          <p 
            className='title w-min text-right '
            onMouseEnter={projectEnter}
            onMouseLeave={projectLeave}
          >
            some deta dfghjk fghjk <nav>EWZRXCTVYBNJKMERDTFGYUI </nav>
          </p>
          </div>
          
        </div>
        
      </div>
    </div>
  );
};

export default Hero;
