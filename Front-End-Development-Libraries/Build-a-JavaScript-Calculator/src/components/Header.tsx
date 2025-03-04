import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

import MenuIcon from "./icons/HeaderMenu";
import HistoryIcon from "./icons/History";

interface HeaderProps {
  title: string;
  setHistoryActive?: React.Dispatch<React.SetStateAction<boolean>>;
  setisSidebarActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Header({
  title,
  setHistoryActive,
  setisSidebarActive,
}: HeaderProps) {
  const { fillColor, mode } = useContext(ThemeContext)!;

  return (
    <header className="flex flex-row h-[5rem] items-center px-[1rem]">
      <button
        className="mr-[1rem]"
        onClick={() => setisSidebarActive((prev) => !prev)}
      >
        <MenuIcon />
      </button>
      <h1
        className="text-[2.3rem] flex-1 font-bold"
        style={{ color: fillColor }}
      >
        {title}
      </h1>
      <button
        className="md:hidden"
        onClick={() => {
          if (setHistoryActive !== undefined) {
            setHistoryActive((prev) => !prev);
          }
        }}
      >
        {mode === "Standard" && <HistoryIcon />}
      </button>
    </header>
  );
}
