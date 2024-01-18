// CursorVariants.js
import { useState } from 'react';

export const useCursorVariants = () => {
  const [cursorText, setCursorText] = useState('');
  const [cursorVariant, setCursorVariant] = useState('default');

  const getVariantProperties = (mouseXPosition, mouseYPosition) => {
    return {
      default: {
        opacity: 1,
        height: 10,
        width: 10,
        fontSize: '16px',
        backgroundColor: '#fff',
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
  };

  return { cursorText, setCursorText, cursorVariant, setCursorVariant, getVariantProperties };
};
