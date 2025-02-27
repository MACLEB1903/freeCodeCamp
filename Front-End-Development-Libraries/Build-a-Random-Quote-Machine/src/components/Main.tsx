import DefaultDisplay from "../components/quote-display/Default";

import HeartIcon from "../assets/heart.svg";

import NextIcon from "../assets/next.svg";
import ShareIcon from "../assets/share.svg";

export default function Main() {
  return (
    <div
      id="quote-box"
      className="pt-[8rem] pb-[3rem] px-[3rem] mx-[auto] h-svh flex flex-col max-w-[100rem] md:px-[3.5rem] lg:px-[4rem] lg:pt-[6rem] xl:px-[0rem] "
    >
      <div className="quote flex flex-1 mt-[2svh] mb-[10rem] md:mt-[3svh] lg:mt-[0] lg:items-center">
        <DefaultDisplay />
      </div>
      <div
        id="actions-wrapper"
        className="pt-[3rem] flex flex-row gap-[0.75rem] md:gap-[1rem] lg:justify-center"
      >
        <button id="heart-btn">
          <img src={HeartIcon} />
        </button>
        <button id="new-qoute-btn">
          <img src={NextIcon} />
        </button>
        <button id="share-btn">
          <img src={ShareIcon} />
        </button>
      </div>
    </div>
  );
}
