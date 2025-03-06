"use client";

import { motion, useAnimation } from "motion/react";
import type { Variants } from "motion/react";
import { ThemeContext } from "../context/ThemeContext";
import { useContext, useEffect } from "react";

interface AlarmClockCheckProps extends React.SVGAttributes<SVGSVGElement> {
  width?: number;
  height?: number;
  strokeWidth?: number;
  stroke?: string;
}

const checkmarkVariants: Variants = {
  normal: {
    pathLength: 0,
    opacity: 0,
  },
  animate: {
    pathLength: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      repeat: Infinity,
      repeatDelay: 1,
    },
  },
};

const bellVariants: Variants = {
  normal: { rotate: 0 },
  animate: {
    rotate: [-10, 10, -10],
    transition: {
      duration: 0.5,
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
};

const AlarmClockCheck = ({
  width = 30,
  height = 30,
  strokeWidth = 2,
  ...props
}: AlarmClockCheckProps) => {
  const controls = useAnimation();
  const { fillColor, mode } = useContext(ThemeContext)!;

  useEffect(() => {
    if (mode === "pomodoro") {
      controls.start("animate");
    } else {
      controls.start("normal");
    }
  }, [mode, controls]);

  return (
    <div
      style={{
        cursor: "pointer",
        userSelect: "none",
        padding: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onMouseEnter={() => {
        if (mode !== "pomodoro") {
          controls.start("animate");
        }
      }}
      onMouseLeave={() => {
        if (mode !== "pomodoro") controls.start("normal");
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        stroke={fillColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <circle cx="12" cy="13" r="8" />
        <motion.g variants={bellVariants} animate={controls} initial="normal">
          <path d="M5 3 2 6" />
          <path d="m22 6-3-3" />
          <path d="M6.38 18.7 4 21" />
          <path d="M17.64 18.67 20 21" />
        </motion.g>
        <motion.path
          d="m9 13 2 2 4-4"
          variants={checkmarkVariants}
          animate={controls}
          initial="normal"
        />
      </svg>
    </div>
  );
};

export { AlarmClockCheck };
