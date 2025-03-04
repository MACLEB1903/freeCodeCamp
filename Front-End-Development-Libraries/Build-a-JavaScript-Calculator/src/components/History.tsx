import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

interface historyProps {
  history: null | string[];
}
export default function History({ history }: historyProps) {
  const { fillColor, backgroundColor } = useContext(ThemeContext)!;
  return (
    <div
      className="history w-[100%] h-[100%]  p-[2rem] pb-[1rem]"
      style={{ background: fillColor }}
    >
      <h2 className="text-4xl" style={{ color: backgroundColor }}>
        History
      </h2>
      {history && (
        <div className="history">
          {history?.map((h) => (
            <p
              className="text-[2rem] text-right mt-[0.57rem]"
              style={{ color: backgroundColor }}
            >
              {h}
            </p>
          ))}
        </div>
      )}
      {!history && (
        <p
          className="text-[2rem] text mt-[0.57rem]"
          style={{ color: backgroundColor }}
        >
          There is no history yet!
        </p>
      )}
    </div>
  );
}
