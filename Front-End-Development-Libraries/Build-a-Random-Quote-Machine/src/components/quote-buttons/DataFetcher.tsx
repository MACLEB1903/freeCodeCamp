import { useContext } from "react";
import { QuotesContext } from "../../context/QuotesContext";
import NextIcon from "../icons/Next";

const URL = "https://dummyjson.com/quotes/random";

export default function DataFetcher() {
  const { setQuote, isFetching, setIsFetching } = useContext(QuotesContext);

  if (!setQuote) {
    throw new Error("DataFetcher must be used within a QuotesProvider");
  }

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

  return (
    <>
      <button
        id="new-quote"
        onClick={fetchQuote}
        disabled={isFetching}
        style={{
          cursor: isFetching ? "no-drop" : "pointer",
        }}
      >
        <NextIcon />
      </button>
    </>
  );
}
