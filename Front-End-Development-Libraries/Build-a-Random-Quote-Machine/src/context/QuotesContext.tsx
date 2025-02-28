import { createContext, useState, ReactNode, useEffect } from "react";

type QuoteObjType = {
  id: number | null;
  quote: string | null;
  author: string | null;
};

type QuotesContextType = {
  quote: QuoteObjType;
  theme: "random" | "dark" | "light" | "image";
  fillColor: string;
  isFetching: boolean;
  setQuote: (quote: QuoteObjType) => void;
  setTheme: (theme: "dark" | "light" | "image" | "random") => void;
  setIsFetching: (isFetching: boolean) => void;
};

const defaultContextValue: QuotesContextType = {
  quote: { id: null, quote: null, author: null },
  theme: "dark",
  fillColor: "ffffff",
  isFetching: false,
  setIsFetching: () => {},
  setQuote: () => {},
  setTheme: () => {},
};

export const QuotesContext =
  createContext<QuotesContextType>(defaultContextValue);

export const QuotesProvider = ({ children }: { children: ReactNode }) => {
  const [quote, setQuote] = useState<QuoteObjType>(defaultContextValue.quote);
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [theme, setTheme] = useState<"random" | "dark" | "light" | "image">(
    defaultContextValue.theme
  );
  const [fillColor, setFillColor] = useState<string>(
    defaultContextValue.fillColor
  );

  useEffect(() => {
    if (theme === "dark") {
      setFillColor("#ffffff");
    }
    if (theme === "light") {
      setFillColor("#43644b");
    }
    if (theme === "image") {
      setFillColor("#f2f2f2");
    }
  }, [theme]);

  useEffect(() => {
    document.body.style.backgroundImage = "";
    document.body.classList.remove("bg-image");

    if (theme === "dark") {
      document.body.style.background = "#131313";
    } else if (theme === "light") {
      document.body.style.background = "#f0eee7";
    }
  }, [theme]);

  const URL = "https://dummyjson.com/quotes/random";

  const fetchQuote = async () => {
    try {
      setIsFetching(true);
      const response = await fetch(URL);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setQuote({
        id: data.id,
        quote: data.quote,
        author: data.author,
      });
    } catch (e) {
      console.error("Failed to fetch quote:", e.message);
    } finally {
      setIsFetching(false);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <QuotesContext.Provider
      value={{
        quote,
        setQuote,
        theme,
        setTheme,
        fillColor,
        isFetching,
        setIsFetching,
      }}
    >
      {children}
    </QuotesContext.Provider>
  );
};
