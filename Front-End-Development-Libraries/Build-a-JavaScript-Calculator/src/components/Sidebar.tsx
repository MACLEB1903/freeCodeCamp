import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import StandardIcon from "./icons/Standard";
import ScientificIcon from "./icons/Scientific";
import CurrencyIcon from "./icons/Currency";
import DarkModeIcon from "./icons/DarkMode";
import LightModeIcon from "./icons/LightMode";

import AsideMenuIcon from "./icons/AsideMenu";

const calculatorMode = ["Standard", "Currency", "Scientific"];
const modeIcons = [<StandardIcon />, <ScientificIcon />, <CurrencyIcon />];
interface SideBarProps {
  setisSidebarActive: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function Sidebar({ setisSidebarActive }: SideBarProps) {
  const { fillColor, backgroundColor, theme, setTheme } =
    useContext(ThemeContext)!;
  return (
    <aside
      className="absolute flex  flex-col top-0 min-w-[25rem] h-[100svh] z-100  p-[1rem]"
      style={{ background: fillColor, color: backgroundColor }}
    >
      <button onClick={() => setisSidebarActive((prev) => !prev)}>
        <AsideMenuIcon />
      </button>
      <nav className="flex-1">
        {calculatorMode.map((mode, i) => (
          <button
            className="block text-2xl my-[2rem] flex flex-row items-center gap-[0.75rem] w-[100%]"
            style={{ color: backgroundColor }}
          >
            <span> {modeIcons[i]}</span>
            <span className="text-[2rem] font-semibold"> {mode}</span>
          </button>
        ))}
      </nav>
      <nav>
        <button
          className="block text-2xl my-[1rem] flex flex-row items-center gap-[0.5rem] w-[100%]"
          style={{ color: backgroundColor }}
          onClick={() => {
            setisSidebarActive(false);
            setTheme(() => (theme === "light" ? "dark" : "light"));
          }}
        >
          {theme === "light" && (
            <span>
              <LightModeIcon />
            </span>
          )}

          {theme === "dark" && (
            <span>
              <DarkModeIcon />
            </span>
          )}

          <span> {theme[0].toUpperCase() + theme.slice(1)} Mode</span>
        </button>
      </nav>
    </aside>
  );
}
