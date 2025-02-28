import { QuotesContext } from "../../context/QuotesContext";
import { useContext } from "react";

import DarkModeIcon from "../icons/Dark";
import LightModeIcon from "../icons/Light";
import ImagesModecon from "../icons/Images";
import RandomModeIcon from "../icons/Random";

let themeIndex = 0;

export default function ThemeUpdater() {
  const { theme, setTheme } = useContext(QuotesContext);

  if (!theme || !setTheme) {
    throw new Error("DataFetcher must be used within a QuotesProvider");
  }
  const themes: ("dark" | "light" | "image" | "random")[] = [
    "dark",
    "light",
    "image",
    "random",
  ];

  return (
    <button
      id="theme-btn"
      onClick={() => {
        themeIndex = (themeIndex + 1) % themes.length;
        setTheme(themes[themeIndex]);
      }}
    >
      {theme === "dark" && <DarkModeIcon />}
      {theme === "light" && <LightModeIcon />}
      {theme === "image" && <ImagesModecon />}
      {theme === "random" && <RandomModeIcon />}
    </button>
  );
}
