import { createContext, useContext } from "react";

export const AppDataContext = createContext({});

export const AppDataProvider = ({ children }) => {
  const data =
    typeof window !== "undefined" && window.APP_DATA ? window.APP_DATA : {};

  return (
    <AppDataContext.Provider value={data}>{children}</AppDataContext.Provider>
  );
};

export const useAppData = () => useContext(AppDataContext);
