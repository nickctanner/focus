import { useState, useEffect, useRef } from 'react';

export const useHover = () => {
  const ref = useRef();
  const [hovered, setHovered] = useState(false);

  const enter = () => setHovered(true);
  const exit = () => setHovered(false);

  useEffect(() => {
    ref.current.addEventListener('mouseenter', enter);
    ref.current.addEventListener('mouseleave', exit);

    return () => {
      ref.current.removeEventListener('mouseenter', enter);
      ref.current.removeEventListener('mouseleave', exit);
    };
  }, []);

  return [ref, hovered];
};
