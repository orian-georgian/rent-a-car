import { createContext, useState } from "react";

export const SharedContext = createContext();

export const SharedProvider = ({ children }) => {
  const [isAddCarVisible, setIsAddCarVisible] = useState(false);

  const changeAddCarVisibility = (isVisible) => {
    setIsAddCarVisible(isVisible);
  };

  return (
    <SharedContext.Provider value={{ isAddCarVisible, changeAddCarVisibility }}>
      {children}
    </SharedContext.Provider>
  );
};
