import QuoteLeftIcon from "../assets/quote-left.svg";
import QuoteRightIcon from "../assets/quote-right.svg";

import { useContext } from "react";
import { QuotesContext } from "../context/QuotesContext";

export default function Header() {
  const { fillColor } = useContext(QuotesContext);

  if (!fillColor) {
    throw new Error("Context Error at Random.tsx");
  }

  let headerBackground = "";
  if (fillColor === "#ffffff") {
    headerBackground = "transparent";
  }
  if (fillColor === "#43644b") {
    headerBackground = "#f0eee7";
  }

  return (
    <header
      className="h-[6rem] fixed left-0 right-0 top-0 px-[2rem] z-[100] md:bg-red lg:px-[3rem]"
      style={{ background: headerBackground }}
    >
      <div className="flex items-center h-full">
        <div className="flex gap-[1rem]">
          <img src={QuoteLeftIcon} className="h-[3.5rem] w-[3.5rem] " />
          <img src={QuoteRightIcon} className="h-[3.5rem] w-[3.5rem]" />
        </div>
        <a
          style={{ color: fillColor }}
          className="text-white font-poppins ml-[1rem] font-semibold hidden lg:block"
          target="_blank"
          href="https://github.com/macleb1903"
        >
          by MARCEL
        </a>
      </div>
    </header>
  );
}
