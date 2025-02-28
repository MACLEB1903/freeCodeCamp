import { useContext, useEffect, useState } from "react";
import { QuotesContext } from "../../context/QuotesContext";
import LoadingIcon from "../icons/Loading";

export default function Image() {
  document.body.style.backgroundColor = "#131313";
  const quotesContext = useContext(QuotesContext);

  if (!quotesContext) {
    throw new Error("Context Error at DarkTheme.tsx");
  }

  const { quote } = quotesContext;

  const [imgSrc, setImgSrc] = useState<string>(
    `https://picsum.photos/3000/3000?random=${Math.floor(Math.random() * 100)}`
  );

  const [isImageReady, setIsImageReady] = useState(false);

  useEffect(() => {
    setIsImageReady(false);

    setImgSrc(
      `https://picsum.photos/3000/3000?random=${Math.floor(
        Math.random() * 100
      )}`
    );
  }, [quote]);

  return (
    <>
      <div className="absolute top-[0] left-[0] right-[0] bottom-[0] h-[100vh] w-[100vw] z-[-1]">
        <img
          src={imgSrc}
          className="absolute h-[100%] w-[100%] object-cover"
          style={{ visibility: isImageReady ? "visible" : "hidden" }}
          onLoad={() => setIsImageReady(true)}
          alt="Dynamic background"
        />
        <div className="bg-image absolute h-[100%] w-[100%] object-cover"></div>
      </div>
      {!isImageReady && <LoadingIcon />}
      {isImageReady && (
        <div>
          <h1
            id="text"
            className="text-white text-5xl font-poppins font-bold leading-[4rem] md:text-6xl md:leading-[4.5rem] lg:text-7xl lg:text-justify lg:leading-[5.5rem]"
          >
            {quote.quote}
          </h1>
          <h2
            id="author"
            className="text-white font-semibold mt-[2rem] text-3xl md:text-4xl md:mt-[3rem] lg:text-5xl lg:mt-[4rem]"
          >
            {`-${quote.author}`}
          </h2>
        </div>
      )}
    </>
  );
}
