import { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";

import StandardIcon from "./icons/Standard";
import TemperatureIcon from "./icons/Temperature";
import DarkModeIcon from "./icons/DarkMode";
import LightModeIcon from "./icons/LightMode";
import AsideMenuIcon from "./icons/AsideMenu";

const calculatorMode = ["Standard", "Temperature"];
const modeIcons = [<StandardIcon />, <TemperatureIcon />];

interface SideBarProps {
  setisSidebarActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Sidebar({ setisSidebarActive }: SideBarProps) {
  const { fillColor, backgroundColor, mode, theme, setTheme, setMode } =
    useContext(ThemeContext)!;

  return (
    <aside
      className="absolute flex flex-col top-0 min-w-[30rem] h-[100svh] z-100 p-[1rem] transition-transform duration-300 "
      style={{ background: fillColor, color: backgroundColor }}
    >
      <div>
        <button onClick={() => setisSidebarActive((prev) => !prev)}>
          <AsideMenuIcon />
        </button>
      </div>

      {/* Navigation for Calculator Modes */}
      <nav className="flex-1 p-[1rem]">
        {calculatorMode.map((calcMode, i) => (
          <Link
            key={calcMode}
            to={calcMode === "Standard" ? "/" : `/${calcMode.toLowerCase()}`}
            className="block my-[1.5rem] p-[0.5rem] pl-[1rem] flex flex-row items-center gap-[0.75rem] w-[100%] rounded-md"
            style={{
              color: calcMode === mode ? fillColor : backgroundColor,
              background: calcMode === mode ? backgroundColor : fillColor,
            }}
            onClick={() => setMode(calcMode)}
          >
            <span>{modeIcons[i]}</span>
            <span className="text-[2rem] font-semibold">{calcMode}</span>
          </Link>
        ))}
      </nav>

      {/* Dark/Light Mode Toggle */}
      <nav>
        <button
          className="block text-2xl px-[1rem] my-[1rem] flex flex-row items-center gap-[0.75rem] w-[100%]"
          style={{ color: backgroundColor }}
          onClick={() => {
            setisSidebarActive(false);
            setTheme(() => (theme === "light" ? "dark" : "light"));
          }}
        >
          {theme === "light" ? <DarkModeIcon /> : <LightModeIcon />}
          <span className="text-[1.75rem] font-semibold">
            {theme === "light" ? "Dark" : "Light"} Mode
          </span>
        </button>
      </nav>
    </aside>
  );
}
