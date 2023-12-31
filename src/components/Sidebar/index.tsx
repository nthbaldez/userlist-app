"use client"

import "./styles.css"

import DashboardLogo from "../svg/DashboardLogo";
import DeliveriesLogo from "../svg/DeliveriesLogo";
import ListDocLogo from "../svg/ListDocLogo";
import NetworkLogo from "../svg/NetworkLogo";
import UserListLogo from "../svg/UserListLogo";
import { useMenuOption } from "@/hooks/useMenuOption";
import { MenuOptionsTypes } from "@/types/menuOptions";

export default function Sidebar() {
  const { menuOption, setMenuOption } = useMenuOption();

  const handleChangeMenuOption = (optionValue: MenuOptionsTypes) => {
    setMenuOption(optionValue);
  }

  return (
    <aside className="w-[268px] bg-[#11224B] text-white mobileSmall:max-lg:hidden h-screen">
      <div className="min-h-full">
        <h3 className="p-4 h-24">Logo</h3>
        <ul>
          <li 
            className={menuOption == MenuOptionsTypes.DASHBOARD ? 'active' : ''}
            onClick={() => handleChangeMenuOption(MenuOptionsTypes.DASHBOARD)}
          >
            <div className="cursor-pointer ml-2 w-62 py-3 flex items-center gap-3">
              <DashboardLogo />
              Dashboard
            </div>
          </li>      
          <li 
            className={menuOption == MenuOptionsTypes.NETWORK ? 'active' : ''}
            onClick={() => handleChangeMenuOption(MenuOptionsTypes.NETWORK)}
          >
            <div className="cursor-pointer ml-2 w-62 py-3 flex items-center gap-3">
              <NetworkLogo />
              Network
            </div>
          </li>      
          <li 
            className={menuOption == MenuOptionsTypes.LISTDOC ? 'active' : ''}
            onClick={() => handleChangeMenuOption(MenuOptionsTypes.LISTDOC)}
          >
            <div className="cursor-pointer ml-2 w-62 py-3 flex items-center gap-3">
              <ListDocLogo />
              List Doc
            </div>
          </li>      
          <li 
            className={menuOption == MenuOptionsTypes.USERLIST || menuOption == MenuOptionsTypes.NEWUSER || menuOption == MenuOptionsTypes.EDITUSERTAB ? 'active' : ''}
            onClick={() => handleChangeMenuOption(MenuOptionsTypes.USERLIST)}
          >
            <div className="cursor-pointer ml-2 w-62 py-3 flex items-center gap-3">
              <UserListLogo />
              User List
            </div>
          </li>      
          <li 
            className={menuOption == MenuOptionsTypes.DELIVERIES ? 'active' : ''}
            onClick={() => handleChangeMenuOption(MenuOptionsTypes.DELIVERIES)}
          >
            <div className="cursor-pointer ml-2 w-62 h-12.5 py-3 flex items-center gap-3">
              <DeliveriesLogo />
              Deliveries
            </div>
          </li>      
        </ul>
      </div>
    </aside>
  )
}
