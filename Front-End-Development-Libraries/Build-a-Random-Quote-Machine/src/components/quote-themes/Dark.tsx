import { useContext } from "react";
import { QuotesContext } from "../../context/QuotesContext";

export default function Dark() {
  document.body.style.backgroundColor = "#131313";
  const quotesContext = useContext(QuotesContext);

  if (!quotesContext) {
    throw new Error("Context Error at DarkTheme.tsx");
  }

  const { quote } = quotesContext;

  return (
    <>
      <div>
        <h1
          id="text"
          className="text-white text-5xl font-poppins font-bold leading-[4rem] md:text-6xl md:leading-[4.5rem] lg:text-7xl lg:text-justify lg:leading-[5.5rem]"
        >
          {quote.quote}
        </h1>
        {quote && (
          <h2
            id="author"
            className="text-white font-semibold mt-[2rem] text-3xl md:text-4xl md:mt-[3rem] lg:text-5xl lg:mt-[4rem]"
          >
            {`-${quote.author}`}
          </h2>
        )}
      </div>
    </>
  );
}
