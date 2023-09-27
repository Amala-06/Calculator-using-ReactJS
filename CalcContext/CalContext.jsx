import { createContext, useState } from "react";

export const CalContext = createContext();
const CalProvider = ({ children }) => {
  const [calc, setCalc] = useState({
    sign: "",
    num: 0,
    res: 0
  });
  const ProviderValue = {
    calc,
    setCalc
  };
  return (
    <CalContext.Provider value={ProviderValue}>{children}</CalContext.Provider>
  );
};
export default CalProvider;
