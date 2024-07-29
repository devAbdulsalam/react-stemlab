import { useState, useRef, useEffect, useLayoutEffect } from "react";

// Hover state - https://dev.to/spaciecat/hover-states-with-react-hooks-4023
export const useHover = () => {
  const ref = useRef();
  const [hovered, setHovered] = useState(false);

  const enter = () => setHovered(true);
  const leave = () => setHovered(false);

  useEffect(() => {
    const currentRef = ref.current;
    if (currentRef) {
      currentRef.addEventListener("mouseenter", enter);
      currentRef.addEventListener("mouseleave", leave);
      return () => {
        currentRef.removeEventListener("mouseenter", enter);
        currentRef.removeEventListener("mouseleave", leave);
      };
    }
  }, []);

  return [ref, hovered];
};

// Mouse position
export const useMousePosition = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const setFromEvent = (e) => setPosition({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", setFromEvent);

    return () => {
      window.removeEventListener("mousemove", setFromEvent);
    };
  }, []);

  return position;
};

// Element position
export const usePosition = () => {
  const ref = useRef();
  const [position, setPosition] = useState({});

  const handleResize = () => {
    if (ref.current) {
      setPosition(ref.current.getBoundingClientRect());
    }
  };

  useLayoutEffect(() => {
    // const currentRef = ref.current;
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return [ref, position];
};
