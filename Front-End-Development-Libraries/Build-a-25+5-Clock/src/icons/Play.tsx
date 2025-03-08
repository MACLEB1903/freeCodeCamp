import { useContext } from "react";

import { ThemeContext } from "../context/ThemeContext";

export default function Play() {
  const { buttonColor } = useContext(ThemeContext)!;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="28px"
      viewBox="0 -960 960 960"
      width="28px"
      fill={buttonColor}
    >
      <path d="M320-200v-560l440 280-440 280Zm80-280Zm0 134 210-134-210-134v268Z" />
    </svg>
  );
}
