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
  const { theme, isFetching } = useContext(QuotesContext);
  if (!theme) {
    throw new Error("DataFetcher must be used within a QuotesProvider");
  }

  return (
    <>
      <div
        id="quote-box"
        className="fade-in pt-[9rem] px-[3rem] mx-[auto] h-svh flex flex-col max-w-[100rem] md:px-[3.5rem] lg:px-[4rem] lg:pt-[6rem] xl:px-[0rem]"
      >
        <div className="quote flex flex-1 mt-[2svh] mb-[10rem] md:mt-[3svh] lg:mt-[0] lg:items-center">
          {isFetching ? (
            <LoadingIcon />
          ) : (
            <>
              {theme === "dark" && <DarkTheme />}
              {theme === "light" && <LightTheme />}
              {theme === "image" && <ImageTheme />}
            </>
          )}
        </div>

        <div
          id="actions-wrapper"
          className="pt-[3rem] pb-[3rem] flex flex-row gap-[0.75rem] md:gap-[1.5rem] lg:justify-center lg:gap-[2rem]"
        >
          <ThemeUpdaterButton />
          <button id="share-btn">
            <ShareIcon />
          </button>
          <FetchButton />
        </div>
      </div>
    </>
  );
}
