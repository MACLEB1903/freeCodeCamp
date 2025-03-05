import { useEffect, useRef, useState } from "react";

import Navigation from "./Navigation";

export default function Home() {
  const [time, setTime] = useState({
    hours: String(new Date().getHours()).padStart(2, "0"),
    minutes: String(new Date().getMinutes()).padStart(2, "0"),
  });

  const [showColon, setShowColon] = useState(true);
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const [task, setTask] = useState<string | undefined>(undefined);

  const textRef = useRef<HTMLTextAreaElement | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const time = new Date();

      setTime({
        hours: String(time.getHours()).padStart(2, "0"),
        minutes: String(time.getMinutes()).padStart(2, "0"),
      });

      setShowColon((prev) => !prev);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (isTyping && textRef.current) {
      textRef.current.focus();
    }
  }, [isTyping]);

  return (
    <section className="bg-[black] text-white flex flex-col p-[3rem] h-[100svh] w-[100vw]">
      <div className="time-wrapper flex-1 flex flex-col justify-center items-center">
        {!isTyping && (
          <button
            className="text-[clamp(3.5rem,5vw,6rem)] task text-center text-zinc-500 hover:cursor-pointer"
            onClick={() => {
              setIsTyping((prev) => !prev);
              if (textRef.current) {
                textRef.current.focus();
              }
            }}
          >
            {task ? task : "What do you want to focus?"}
          </button>
        )}
        {isTyping && (
          <textarea
            ref={textRef}
            onBlur={() => setIsTyping((prev) => !prev)}
            onChange={() => {
              setTask(textRef.current?.value);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                setIsTyping((prev) => !prev);
              }
            }}
            className="task text-[clamp(3.5rem,5vw,6rem)] text-center outline-none resize-none h-[1lh] md:h-[1lh] text-zinc-500 truncate"
          />
        )}
        <h2 className="time text-[clamp(8rem,10vw,15rem)] text-center">
          {time.hours}
          {showColon ? ":" : " "}
          {time.minutes}
        </h2>
      </div>
      <Navigation />
    </section>
  );
}
