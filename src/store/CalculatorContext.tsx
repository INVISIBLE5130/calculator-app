import { createContext, useContext, useState, ReactNode } from 'react';

interface CalculatorContextType {
  result: string;
  history: string[];
  setResultHandler: (data: string) => void;
  addHistoryItem: (item: string) => void;
  clearHistory: () => void;
}

const CalculatorContext = createContext<CalculatorContextType | undefined>(undefined);

export function useCalculator() {
  const context = useContext(CalculatorContext);
  if (!context) {
    throw new Error('useCalculator must be used within a CalculatorProvider');
  }
  return context;
}

interface CalculatorProviderProps {
  children: ReactNode;
}

export function CalculatorProvider({ children }: CalculatorProviderProps) {
  const [result, setResult] = useState<string>('');
  const [history, setHistory] = useState<string[]>([]);

  const setResultHandler = (data: string) => {
    setResult(data);
  };

  const addHistoryItem = (item: string) => {
    setHistory((prevHistory) => [...prevHistory, item]);
  };

  const clearHistory = () => {
    setHistory([]);
  };

  const calculatorContextValue: CalculatorContextType = {
    result,
    history,
    setResultHandler,
    addHistoryItem,
    clearHistory,
  };

  return (
    <CalculatorContext.Provider value={calculatorContextValue}>
      {children}
    </CalculatorContext.Provider>
  );
}
