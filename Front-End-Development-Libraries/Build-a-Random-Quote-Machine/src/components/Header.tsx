import QuoteLeftIcon from "../assets/quote-left.svg";
import QuoteRightIcon from "../assets/quote-right.svg";

export default function Header() {
  return (
    <header className="h-[6rem] bg-custom-black fixed left-0 right-0 top-0 px-[2rem] md:bg-red lg:px-[3rem]">
      <div className="flex items-center h-full">
        <div className="flex gap-[1rem]">
          <img src={QuoteLeftIcon} className="h-[3.5rem] w-[3.5rem] " />
          <img src={QuoteRightIcon} className="h-[3.5rem] w-[3.5rem]" />
        </div>
        <a
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
