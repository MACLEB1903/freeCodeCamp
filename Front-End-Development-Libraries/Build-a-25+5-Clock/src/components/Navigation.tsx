import { AlarmClock } from "../icons/AlarmClock";
import { Rocket } from "../icons/Rocket";
import { Sparkles } from "../icons/Sparkles";
import { ThemeType } from "../context/ThemeContext";

import { ThemeContext } from "../context/ThemeContext";
import { useContext, useEffect } from "react";

const themes: ThemeType[] = [
  "dark",
  "light",
  "dark-gradient",
  "light-gradient",
];

let count = 0;

export default function Navigation() {
  const { theme, setMode, setTheme } = useContext(ThemeContext)!;

  useEffect(() => {
    console.log(theme);
  }, [theme]);

  return (
    <nav className="navigation-wrapper self-center rounded-full ">
      <button
        className="p-[0.75rem] br-50% rounded-full hover:cursor-pointer"
        onClick={() => setMode("focus")}
      >
        <Rocket />
      </button>
      <button
        className="p-[0.75rem] br-50% rounded-full hover:cursor-pointer"
        onClick={() => setMode("pomodoro")}
      >
        <AlarmClock />
      </button>
      <button
        className="p-[0.75rem] br-50% rounded-full hover:cursor-pointer"
        onClick={() => {
          count++;
          setTheme(themes[count % themes.length]);
        }}
      >
        <Sparkles />
      </button>
    </nav>
  );
}
