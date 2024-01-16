"use client";

import { createContext, useState } from "react";

interface SynergyContextProps {
  menu: string;
  changeMenu: (menu: string) => void;
}

export const SynergyContext = createContext<SynergyContextProps>({
  menu: "",
  changeMenu: () => {},
});

interface SynergyProviderProps {
  children: React.ReactNode;
}

export const SynergyProvider: React.FC<SynergyProviderProps> = ({
  children,
}) => {
  const [menu, setMenu] = useState<string>("");

  const changeMenu = (newMenu: string) => {
    setMenu(newMenu);
  };

  const contextValue: SynergyContextProps = {
    menu,
    changeMenu,
  };

  return (
    <SynergyContext.Provider value={contextValue}>
      {children}
    </SynergyContext.Provider>
  );
};
