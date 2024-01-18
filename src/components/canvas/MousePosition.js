// MousePosition.jsx
import { useRef } from 'react';
import useMouse from '@react-hook/mouse-position';

export const useMousePosition = () => {
  const ref = useRef(null);
  const mouse = useMouse(ref, {
    enterDelay: 100,
    leaveDelay: 100,
  });

  let mouseXPosition = -10;
  let mouseYPosition = -10;

  if (mouse.x !== null) {
    mouseXPosition = mouse.clientX;
  }

  if (mouse.y !== null) {
    mouseYPosition = mouse.clientY;
  }

  return { ref, mouseXPosition, mouseYPosition };
};
