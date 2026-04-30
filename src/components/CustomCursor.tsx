import React, { useEffect, useRef } from "react";
import { Box } from "@chakra-ui/react";

const CustomCursor: React.FC = () => {
  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mx = 0;
    let my = 0;
    let rx = 0;
    let ry = 0;

    const onMouseMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      dot.style.transform = `translate(${mx}px, ${my}px) translate(-50%, -50%)`;
    };

    const animRing = () => {
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
      requestAnimationFrame(animRing);
    };

    const onEnter = () => {
      ring.style.width = "48px";
      ring.style.height = "48px";
      ring.style.opacity = "0.8";
    };

    const onLeave = () => {
      ring.style.width = "32px";
      ring.style.height = "32px";
      ring.style.opacity = "0.5";
    };

    window.addEventListener("mousemove", onMouseMove);
    const animId = requestAnimationFrame(animRing);

    const interactiveSelectors = "a, button, .skill-tag, .project-card, .teaching-card";
    document.querySelectorAll(interactiveSelectors).forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(animId);
      document.querySelectorAll(interactiveSelectors).forEach((el) => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
      });
    };
  }, []);

  return (
    <>
      <Box
        ref={dotRef}
        position="fixed"
        top={0}
        left={0}
        width="8px"
        height="8px"
        borderRadius="50%"
        bg="#EF9F27"
        pointerEvents="none"
        zIndex={9999}
        style={{
          transform: "translate(-999px, -999px) translate(-50%, -50%)",
          mixBlendMode: "difference",
          transition: "transform 0.1s, opacity 0.3s",
        }}
        display={{ base: "none", md: "block" }}
      />
      <Box
        ref={ringRef}
        position="fixed"
        top={0}
        left={0}
        width="32px"
        height="32px"
        borderRadius="50%"
        border="1px solid #EF9F27"
        pointerEvents="none"
        zIndex={9998}
        opacity={0.5}
        style={{
          transform: "translate(-999px, -999px) translate(-50%, -50%)",
          transition: "width 0.2s, height 0.2s, opacity 0.3s",
        }}
        display={{ base: "none", md: "block" }}
      />
    </>
  );
};

export default CustomCursor;
