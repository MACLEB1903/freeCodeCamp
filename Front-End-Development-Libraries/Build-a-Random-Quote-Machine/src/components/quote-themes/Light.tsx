import { useContext } from "react";
import { QuotesContext } from "../../context/QuotesContext";

export default function Light() {
  const { quote, fillColor } = useContext(QuotesContext);

  if (!quote) {
    throw new Error("Context Error at DarkTheme.tsx");
  }

  return (
    <>
      <div>
        <h1
          style={{ color: fillColor }}
          className="font-ultra text-5xl font-ultra leading-[4.25rem] tracking-[0.1rem] md:text-6xl md:leading-[4.5rem] lg:text-7xl lg:text-justify lg:leading-[5.5rem]"
        >
          {quote.quote}
        </h1>
        {quote && (
          <h2
            style={{ color: fillColor }}
            id="author"
            className="font-poppins font-bold mt-[2rem] tracking-[0.1rem] text-3xl md:text-4xl md:mt-[3rem] lg:text-5xl lg:mt-[4rem]"
          >
            {`-${quote.author}`}
          </h2>
        )}
      </div>
    </>
  );
}
