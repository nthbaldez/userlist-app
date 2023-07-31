"use client"

import { MenuOptionsTypes } from "@/types/menuOptions";
import { ReactNode, createContext, useState } from "react";

interface MenuOptionProps {
  children: ReactNode;
}

export const MenuOptionsContext = createContext({
  menuOption: MenuOptionsTypes.USERLIST,
  setMenuOption: (option: MenuOptionsTypes) => {}
});

export function MenuOptionProvider({ children }: MenuOptionProps) {
  const [ menuOption, setMenuOption ] = useState(MenuOptionsTypes.USERLIST);
  
  return (

    <MenuOptionsContext.Provider value={{ menuOption, setMenuOption }}>
      {children}
    </MenuOptionsContext.Provider>
  )
}
  