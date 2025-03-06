import React, { createContext, useState, ReactNode } from "react";

export type ThemeType = "dark" | "light" | "dark-gradient" | "light-gradient";
type ModeType = "focus" | "pomodoro";

type ThemeContextType = {
  theme: ThemeType;
  mode: ModeType;
  fillColor: string;
  setTheme: React.Dispatch<React.SetStateAction<ThemeType>>;
  setMode: React.Dispatch<React.SetStateAction<ModeType>>;
};

const themePresets: Record<ThemeType, { fillColor: string }> = {
  dark: {
    fillColor: "#f0eee7",
  },
  light: {
    fillColor: "#131313",
  },

  "light-gradient": {
    fillColor: "#131313",
  },
  "dark-gradient": {
    fillColor: "#f0eee7",
  },
};

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<ThemeType>("dark");
  const [mode, setMode] = useState<ModeType>("focus");

  const fillColor = themePresets[theme].fillColor;

  console.log(fillColor);
  return (
    <ThemeContext.Provider
      value={{ theme, setTheme, mode, setMode, fillColor }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
