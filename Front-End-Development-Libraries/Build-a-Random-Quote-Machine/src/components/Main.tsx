import { useContext } from "react";
import { QuotesContext } from "../context/QuotesContext";

import DarkTheme from "./quote-themes/Dark";
import LightTheme from "./quote-themes/Light";
import ImageTheme from "./quote-themes/Image";

import FetchButton from "../components/quote-buttons/DataFetcher";
import ThemeUpdaterButton from "../components/quote-buttons/ThemeUpdater";
import ShareIcon from "../components/icons/Share";
import LoadingIcon from "../components/icons/Loading";

export default function Main() {
  const { theme, isFetching, quote, setFillColor } = useContext(QuotesContext);

  if (!theme) {
    throw new Error("DataFetcher must be used within a QuotesProvider");
  }

  const getThemeComponent = () => {
    if (isFetching) {
      return <LoadingIcon />;
    }

    const themesComponents = [
      <DarkTheme key="dark" />,
      <LightTheme key="light" />,
      <ImageTheme key="image" />,
    ];

    const themesColors: ("#ffffff" | "#43644b" | "#f9f9f9")[] = [
      "#ffffff",
      "#43644b",
      "#f9f9f9",
    ];

    if (theme === "random") {
      const randomNumber = Math.floor(Math.random() * themesColors.length);

      setFillColor(themesColors[randomNumber]);
      return themesComponents[randomNumber];
    }

    switch (theme) {
      case "dark":
        return <DarkTheme />;
      case "light":
        return <LightTheme />;
      case "image":
        return <ImageTheme />;
      default:
        throw new Error("Unknown theme");
    }
  };

  return (
    <>
      <div
        id="quote-box"
        className="fade-in pt-[9rem] px-[3rem] mx-[auto] h-svh flex flex-col max-w-[100rem] md:px-[3.5rem] lg:px-[4rem] lg:pt-[6rem] xl:px-[0rem]"
      >
        <div className="quote flex flex-1 mt-[2svh] mb-[10rem] md:mt-[3svh] lg:mt-[0] lg:items-center">
          {getThemeComponent()}
        </div>
        <div
          id="actions-wrapper"
          className="pt-[3rem] pb-[3rem] flex flex-row gap-[3rem] md:gap-[4rem] lg:justify-center lg:gap-[5rem]"
        >
          <ThemeUpdaterButton />
          <button id="share-btn">
            <a
              id="tweet-quote"
              target="_blank"
              href={`https://twitter.com/intent/tweet?text=${quote.quote}`}
            >
              <ShareIcon />
            </a>
          </button>
          <FetchButton />
        </div>
      </div>
    </>
  );
}
