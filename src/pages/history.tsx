import { type FC } from "react";
import { useCalculator } from "../store/CalculatorContext";

export const History: FC = () => {
  const { history, clearHistory } = useCalculator();
  return (
    <div className="bg-white p-4 shadow-md">
      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">History</h2>
        <ul>
          {history.slice(-20).map((item, index) => (
            <li key={index} className="text-lg">
              {item}
            </li>
          ))}
        </ul>
      </div>
      <button
        onClick={clearHistory}
        className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none"
      >
        Clear History
      </button>
    </div>
  );
};
