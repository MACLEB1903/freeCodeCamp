import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

import MenuIcon from "./icons/Menu";
import HistoryIcon from "./icons/History";

interface HeaderProps {
  title: string;
  setHistoryActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Header({ title, setHistoryActive }: HeaderProps) {
  const { fillColor } = useContext(ThemeContext)!;

  return (
    <header className="flex flex-row h-[5rem] items-center px-[1rem]">
      <button className="mr-[1rem]">
        <MenuIcon />
      </button>
      <h1 className="text-3xl flex-1 font-bold" style={{ color: fillColor }}>
        {title}
      </h1>
      <button
        className="md:hidden"
        onClick={() => setHistoryActive((prev) => !prev)}
      >
        <HistoryIcon />
      </button>
    </header>
  );
}
