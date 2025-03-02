import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

export default function Menu() {
  const { fillColor } = useContext(ThemeContext)!;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="30px"
      viewBox="0 -960 960 960"
      width="30px"
      fill={fillColor}
    >
      <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
    </svg>
  );
}
