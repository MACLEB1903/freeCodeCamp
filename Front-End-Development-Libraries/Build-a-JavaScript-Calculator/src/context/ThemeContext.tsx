import React, { createContext, useState, ReactNode } from "react";

type ThemeType = "light" | "dark";
type ModeType = "Standard" | "Currency";

type ThemeContextType = {
  theme: ThemeType;
  fillColor: string;
  backgroundColor: string;
  mode: ModeType;
  setTheme: React.Dispatch<React.SetStateAction<ThemeType>>;
  setMode: React.Dispatch<React.SetStateAction<ModeType>>;
};

const themePresets: Record<
  ThemeType,
  { fillColor: string; backgroundColor: string }
> = {
  dark: {
    fillColor: "#fcf6e6",
    backgroundColor: "#30312a",
  },
  light: {
    fillColor: "#30312a",
    backgroundColor: "#fcf6e6",
  },
};

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<ThemeType>("light");
  const [mode, setMode] = useState<ModeType>("Standard");

  const fillColor = themePresets[theme].fillColor;
  const backgroundColor = themePresets[theme].backgroundColor;

  document.body.style.backgroundColor = backgroundColor;

  return (
    <ThemeContext.Provider
      value={{ theme, setTheme, fillColor, backgroundColor, mode, setMode }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
