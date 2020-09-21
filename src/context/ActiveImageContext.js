import React, { useState, useContext, createContext } from "react";

export const ActiveImageContext = createContext();

export const useActiveIndexContext = () => useContext(ActiveImageContext);

export const ActiveImageProvider = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <ActiveImageContext.Provider value={{ activeIndex, setActiveIndex }}>
      {children}
    </ActiveImageContext.Provider>
  );
};
