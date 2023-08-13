"use client"

import { useState } from "react";
import MenuIcon from "../svg/MenuIcon";
import { useMenuOption } from "@/hooks/useMenuOption";
import { MenuOptionsTypes } from "@/types/menuOptions";

export default function MenuHamburguer() {
  const { setMenuOption } = useMenuOption();
  const [ listIsOpen, setListIsOpen ] = useState(false);

  const handleChangeMenuOption = (optionValue: MenuOptionsTypes) => {
    setMenuOption(optionValue);
    setListIsOpen(prev => !prev);
  }

  const handleList = () => {
    setListIsOpen(prev => !prev);
  }

  return (
    <div className="flex items-center relative md:hidden">
      <button className="bg-transparent flex items-center justify-center" onClick={() => handleList()}>
        <MenuIcon />
      </button>

      {listIsOpen && 
        <ul className="absolute top-full bg-white px-[12px] py-[16px] flex flex-col justify-center items-center rounded-lg w-[170px]">
          <li onClick={() => handleChangeMenuOption(MenuOptionsTypes.DASHBOARD)}>Dashboard</li>
          <li onClick={() => handleChangeMenuOption(MenuOptionsTypes.NETWORK)}>Network</li>
          <li onClick={() => handleChangeMenuOption(MenuOptionsTypes.LISTDOC)}>List Doc</li>
          <li onClick={() => handleChangeMenuOption(MenuOptionsTypes.USERLIST)}>User List</li>
          <li onClick={() => handleChangeMenuOption(MenuOptionsTypes.DELIVERIES)}>Deliveries</li>
        </ul>
      }
    </div>
  )
}
