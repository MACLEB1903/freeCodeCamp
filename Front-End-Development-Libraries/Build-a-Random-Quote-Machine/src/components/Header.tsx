import quoteLeft from "../assets/quote-left.svg";
import quoteRight from "../assets/quote-right.svg";

export default function Header() {
  return (
    <header className="h-[6rem] bg-transparent px-[2rem] flex items-center md:bg-red lg:px-[3rem]">
      <div className="flex gap-[1rem]">
        <img src={quoteLeft} className="h-[3.5rem] w-[3.5rem] " />
        <img src={quoteRight} className="h-[3.5rem] w-[3.5rem]" />
      </div>
      <a
        className="text-white font-poppins ml-[1rem] font-semibold hidden md:block"
        target="_blank"
        href="https://github.com/macleb1903"
      >
        by MARCEL
      </a>
    </header>
  );
}
