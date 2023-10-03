import { type FC, useState } from "react";
import { useCalculator } from "../store/CalculatorContext";

export const Calculator: FC = () => {
  const { result, setResultHandler, addHistoryItem } = useCalculator();
  const [input, setInput] = useState<string>("");

  const handleButtonClick = (value: string) => {
    addHistoryItem(value);
    if (value === "=") {
      try {
        const calculatedResult = eval(input);
        setResultHandler(calculatedResult.toString());
        setInput("");
      } catch (error) {
        setResultHandler("Error");
      }
    } else {
      setInput(input + value);
    }
  };

  const clearInput = () => {
    setInput("");
    setResultHandler("");
  };

  return (
    <div className="bg-white p-4 shadow-md">
      <div className="mb-4">
        <div className="border p-2 text-right">
          {result ? <div className="text-xl mb-2">{result}</div> : null}
          <div className="text-2xl">{input || "0"}</div>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-2">
        {[
          "1",
          "2",
          "3",
          "+",
          "4",
          "5",
          "6",
          "-",
          "7",
          "8",
          "9",
          "*",
          "0",
          "=",
          "/",
        ].map((value) => (
          <button
            key={value}
            onClick={() => handleButtonClick(value)}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none"
          >
            {value}
          </button>
        ))}
        <button
          onClick={clearInput}
          className="bg-red-500 text-white col-span-1 px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none"
        >
          Clear
        </button>
      </div>
    </div>
  );
};
