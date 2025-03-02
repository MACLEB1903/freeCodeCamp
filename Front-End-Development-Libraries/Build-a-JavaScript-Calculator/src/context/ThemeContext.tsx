import React, { createContext, useState, ReactNode } from "react";

type ThemeType = "light" | "dark";

type ThemeContextType = {
  theme: ThemeType;
  fillColor: string;
  backgroundColor: string;
  setTheme: React.Dispatch<React.SetStateAction<ThemeType>>;
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

  const fillColor = themePresets[theme].fillColor;
  const backgroundColor = themePresets[theme].backgroundColor;

  document.body.style.backgroundColor = backgroundColor;

  return (
    <ThemeContext.Provider
      value={{ theme, setTheme, fillColor, backgroundColor }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
