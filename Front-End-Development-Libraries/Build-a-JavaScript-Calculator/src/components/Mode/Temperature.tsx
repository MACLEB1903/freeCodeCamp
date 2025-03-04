import { useContext, useEffect, useRef, useState } from "react";
import { ThemeContext } from "../../context/ThemeContext";

import Sidebar from "../Sidebar";
import Header from "../Header";
import Result from "../Result";

export default function Currency() {
  const { fillColor, backgroundColor } = useContext(ThemeContext)!;
  const [isSidebarActive, setisSidebarActive] = useState<boolean>(false);

  const [value, setValue] = useState<number | null>(0);
  const [valueType, setValueType] = useState<
    "celsius" | "farenheit" | "kelvin"
  >("celsius");

  const [convertedCelsius, setConvertedCelsius] = useState<number | null>(null);
  const [convertedFahrenheit, setConvertedFahrenheit] = useState<number | null>(
    null
  );
  const [convertedKelvin, setConvertedKelvin] = useState<number | null>(null);

  const inputRef = useRef<HTMLInputElement>(null);
  const valueTypes = ["celsius", "farenheit", "kelvin"];

  useEffect(() => {
    if (value !== null) {
      if (valueType === "celsius") {
        setConvertedFahrenheit(parseFloat((value * (9 / 5) + 32).toFixed(2)));
        setConvertedKelvin(parseFloat((value + 273.15).toFixed(2)));
      } else if (valueType === "farenheit") {
        const celsius = (value - 32) * (5 / 9);
        setConvertedCelsius(parseFloat(celsius.toFixed(2)));
        setConvertedKelvin(parseFloat((celsius + 273.15).toFixed(2)));
      } else if (valueType === "kelvin") {
        const celsius = value - 273.15;
        setConvertedCelsius(parseFloat(celsius.toFixed(2)));
        setConvertedFahrenheit(parseFloat((celsius * (9 / 5) + 32).toFixed(2)));
      }
    } else {
      setConvertedCelsius(null);
      setConvertedFahrenheit(null);
      setConvertedKelvin(null);
    }
  }, [value, valueType]);

  return (
    <>
      {isSidebarActive && <Sidebar setisSidebarActive={setisSidebarActive} />}
      <section className="flex flex-col h-screen" style={{ color: fillColor }}>
        <Header title={"Temperature"} setisSidebarActive={setisSidebarActive} />
        <div className="p-[2rem] flex flex-col">
          <div className="input-dropdown-wrapper p-[0.5rem] flex flex-row">
            <input
              ref={inputRef}
              type="number"
              placeholder="Enter a number"
              className="text-[2rem] border-b-[2px] outline-none flex-1 px-[0.5rem]"
              onChange={() =>
                setValue(
                  inputRef.current ? Number(inputRef.current.value) : null
                )
              }
            />
            <select
              name="temperature"
              className="text-[2rem] outline-none ml-[1rem]"
              value={valueType}
              onChange={(e) =>
                setValueType(
                  e.target.value as "celsius" | "farenheit" | "kelvin"
                )
              }
            >
              {valueTypes.map((type) => (
                <option
                  key={type}
                  value={type}
                  style={{ color: backgroundColor, background: fillColor }}
                >
                  {type[0].toUpperCase() + type.slice(1)}
                </option>
              ))}
            </select>
          </div>
          <div className="result flex flex-col md:flex-row md:gap-[1rem]">
            {["celsius", "farenheit", "kelvin"]
              .filter((type) => type !== valueType)
              .map((type) => (
                <>
                  <Result
                    key={type}
                    value={value}
                    valueType={valueType}
                    convertedValue={
                      type === "celsius"
                        ? convertedCelsius
                        : type === "farenheit"
                        ? convertedFahrenheit
                        : convertedKelvin
                    }
                    convertedValueType={type[0].toUpperCase() + type.slice(1)}
                  />
                </>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
