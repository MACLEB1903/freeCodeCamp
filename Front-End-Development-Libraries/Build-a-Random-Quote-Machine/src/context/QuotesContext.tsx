import { createContext, useState, ReactNode, useEffect } from "react";

type QuoteObjType = {
  id: number | null;
  quote: string | null;
  author: string | null;
};

type QuotesContextType = {
  quote: QuoteObjType;
  isFetching: boolean;
  theme: "random" | "dark" | "light" | "image";
  fillColor: "#ffffff" | "#43644b" | "#f9f9f9";
  setQuote: React.Dispatch<React.SetStateAction<QuoteObjType>>;
  setTheme: React.Dispatch<
    React.SetStateAction<"random" | "dark" | "light" | "image">
  >;
  setIsFetching: React.Dispatch<React.SetStateAction<boolean>>;
  setFillColor: React.Dispatch<
    React.SetStateAction<"#ffffff" | "#43644b" | "#f9f9f9">
  >;
};

const defaultContextValue: QuotesContextType = {
  quote: { id: null, quote: null, author: null },
  theme: "dark",
  fillColor: "#ffffff",
  isFetching: false,
  setIsFetching: () => {},
  setQuote: () => {},
  setTheme: () => {},
  setFillColor: () => {},
};

export const QuotesContext =
  createContext<QuotesContextType>(defaultContextValue);

export const QuotesProvider = ({ children }: { children: ReactNode }) => {
  const [quote, setQuote] = useState<QuoteObjType>(defaultContextValue.quote);
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [theme, setTheme] = useState<"random" | "dark" | "light" | "image">(
    defaultContextValue.theme
  );

  const [fillColor, setFillColor] = useState<"#ffffff" | "#43644b" | "#f9f9f9">(
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
      setFillColor("#f9f9f9");
    }
  }, [theme]);

  useEffect(() => {
    document.body.style.backgroundImage = "";
    document.body.classList.remove("bg-image");

    if (fillColor === "#ffffff") {
      document.body.style.background = "#131313";
    }
    if (fillColor === "#43644b") {
      document.body.style.background = "#f0eee7";
    }
  }, [fillColor]);

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
      console.error("Failed to fetch quote:", e);
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
        setFillColor,
      }}
    >
      {children}
    </QuotesContext.Provider>
  );
};
