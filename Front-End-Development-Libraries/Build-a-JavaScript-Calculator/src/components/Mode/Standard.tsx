import { useContext, useState } from "react";
import { ThemeContext } from "../../context/ThemeContext";

import Header from "../Header";
import History from "../History";
import Sidebar from "../Sidebar";

export default function Standard() {
  const { fillColor, backgroundColor } = useContext(ThemeContext)!;
  const [history, setHistory] = useState<null | string[]>(null);
  const [isHistoryActive, setHistoryActive] = useState<boolean>(false);
  const [isSidebarActive, setisSidebarActive] = useState<boolean>(false);

  const [value, setValue] = useState<number | string>(0);
  const [equation, setEquation] = useState({
    operand1: null,
    operator: null,
    operand2: null,
  });

  const keys = [
    "DEL",
    "%",
    "+/-",
    "/",
    7,
    8,
    9,
    "*",
    4,
    5,
    6,
    "-",
    1,
    2,
    3,
    "+",
    ".",
    0,
    "=",
  ];

  const evaluate = ({ operand1, operator, operand2 }: any) => {
    const total = eval(`${operand1} ${operator} ${operand2}`);
    setHistory((prev) => [
      ...(prev ?? []),
      `${operand1} ${operator} ${operand2} = ${total}`,
    ]);
    return total;
  };

  function calculateEquation(key: string | number) {
    setEquation((prev) => {
      switch (key) {
        case "DEL":
          setValue(0);
          return { operand1: null, operator: null, operand2: null };

        case "=":
          if (prev.operand1 != null && prev.operand2 != null && prev.operator) {
            const result = evaluate(prev);
            setValue(result);
            return { operand1: result, operator: null, operand2: null };
          }
          return prev;

        case "+/-":
          if (prev.operator && prev.operand2 != null) {
            const newVal = -prev.operand2;
            setValue(newVal);
            return { ...prev, operand2: newVal };
          } else if (prev.operand1 != null) {
            const newVal = -prev.operand1;
            setValue(newVal);
            return { ...prev, operand1: newVal };
          }
          return prev;

        case ".":
          if (prev.operator) {
            if (prev.operand2?.toString().includes(".")) return prev;
            const newVal = prev.operand2 != null ? `${prev.operand2}.` : "0.";
            setValue(newVal);
            return { ...prev, operand2: newVal };
          } else {
            if (prev.operand1?.toString().includes(".")) return prev;
            const newVal = prev.operand1 != null ? `${prev.operand1}.` : "0.";
            setValue(newVal);
            return { ...prev, operand1: newVal };
          }

        default:
          if (
            typeof key === "string" &&
            ["+", "-", "*", "/", "%"].includes(key)
          ) {
            if (
              prev.operand1 != null &&
              prev.operand2 != null &&
              prev.operator
            ) {
              const result = evaluate(prev);
              setValue(result);
              return { operand1: result, operator: key, operand2: null };
            }
            return {
              operand1: Number(value ?? prev.operand1),
              operator: key,
              operand2: null,
            };
          }
          if (typeof key === "number") {
            if (prev.operator) {
              const newVal =
                prev.operand2 != null ? Number(`${prev.operand2}${key}`) : key;
              setValue(newVal);
              return { ...prev, operand2: newVal };
            }
            const newVal =
              prev.operand1 != null ? Number(`${prev.operand1}${key}`) : key;
            setValue(newVal);
            return { ...prev, operand1: newVal };
          }
          return prev;
      }
    });
  }

  return (
    <>
      {isSidebarActive && <Sidebar setisSidebarActive={setisSidebarActive} />}
      <section className="flex flex-row h-screen">
        {/* Main Calculator */}
        <div className="flex flex-col flex-1 min-h-screen">
          <Header
            title={"Standard"}
            setHistoryActive={setHistoryActive}
            setisSidebarActive={setisSidebarActive}
          />
          <div className="calculator flex flex-row h-[calc(100vh-5rem)] w-full">
            <div className="display-keys-wrapper flex flex-col h-full flex-1">
              {/* Display */}
              <div className="display basis-[25%] p-[2rem] pt-[3rem] max-h-[30rem]">
                <h2
                  className="equation text-right text-4xl md:text-5xl lg:text-6xl"
                  style={{ color: fillColor }}
                >
                  {equation.operand1 ? equation.operand1 : 0}
                  {equation.operator}
                  {equation.operand2}
                </h2>
                <h1
                  className="number-result text-8xl font-bold mt-[1rem] text-right lg:text-9xl"
                  style={{ color: fillColor }}
                >
                  {value}
                </h1>
              </div>

              <div className="relative flex-1 h-[100%]">
                <div
                  className="keyboard flex-1 grid grid-cols-4 grid-rows-5 gap-[2rem] p-[2rem]  h-[100%] z-98"
                  style={{
                    backgroundColor: "#91c0aa",
                  }}
                >
                  {keys.map((key, index) => (
                    <button
                      key={index}
                      className={`p-4 bg-white font-black text-3xl rounded-2xl border-3 border-b-[5px] border-r-[5px] md:text-4xl lg:text-5xl xl:border-5 xl:border-b-[7px] xl:border-r-[7px] ${
                        index === keys.length - 1
                          ? "col-span-2 bg-blue-500"
                          : ""
                      }`}
                      style={{ color: fillColor, background: backgroundColor }}
                      value={key}
                      onClick={() => calculateEquation(key)}
                    >
                      {key}
                    </button>
                  ))}
                </div>

                {isHistoryActive && (
                  <div className="absolute top-0 z-99 h-[100%] w-[100%] md:hidden">
                    <History history={history} />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* History Panel */}
        <div
          className="history hidden max-w-[40rem] min-w-[30rem] md:block h-full basis-[25%] overflow-scroll overflow-x-hidden"
          style={{ backgroundColor: fillColor }}
        >
          <History history={history} />
        </div>
      </section>
    </>
  );
}
