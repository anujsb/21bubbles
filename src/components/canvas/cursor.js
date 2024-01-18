// Cursor.js
import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import useMouse from '@react-hook/mouse-position';

// const Cursor = () => {
  const [cursorText, setCursorText] = useState('');
  const [cursorVariant, setCursorVariant] = useState('default');

  const ref = useRef(null);
  const mouse = useMouse(ref, {
    enterDelay: 100,
    leaveDelay: 100,
  });

  let mouseXPosition = 0;
  let mouseYPosition = 0;

  if (mouse.x !== null) {
    mouseXPosition = mouse.clientX;
  }

  if (mouse.y !== null) {
    mouseYPosition = mouse.clientY;
  }

  const variants = {
    default: {
      opacity: 1,
      height: 10,
      width: 10,
      fontSize: '16px',
      backgroundColor: '#1e91d6',
      x: mouseXPosition,
      y: mouseYPosition,
      transition: {
        type: 'spring',
        mass: 0.6,
      },
    },
    project: {
      opacity: 1,
      backgroundColor: '#fff',
      color: '#000',
      height: 80,
      width: 80,
      fontSize: '18px',
      x: mouseXPosition - 32,
      y: mouseYPosition - 32,
    },
    contact: {
      opacity: 1,
      backgroundColor: '#FFBCBC',
      color: '#000',
      height: 64,
      width: 64,
      fontSize: '32px',
      x: mouseXPosition - 48,
      y: mouseYPosition - 48,
    },
  };

  const spring = {
    type: 'spring',
    stiffness: 500,
    damping: 28,
  };

  const projectEnter = (event) => {
    setCursorText('');
    setCursorVariant('project');
  };

  const projectLeave = (event) => {
    setCursorText('');
    setCursorVariant('default');
  };

  const contactEnter = (event) => {
    setCursorText('');
    setCursorVariant('contact');
  };

  const contactLeave = (event) => {
    setCursorText('');
    setCursorVariant('default');
  };

  return (
    <motion.div
      ref={ref}
      initial="default"
      animate={cursorVariant}
      variants={variants}
      transition={spring}
      style={{ position: 'fixed', pointerEvents: 'none' }}
    >
      {cursorText}
    </motion.div>
  );
// };

export { Cursor };
