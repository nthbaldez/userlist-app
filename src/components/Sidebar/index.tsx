"use client"

import styles from "./styles.module.scss";

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
    <aside className="${styles.aside} bg-[#11224B] h-screen text-white">
      <div>
        <h3 className="p-4 h-24">Logo</h3>
        <ul>
          <li 
            className={menuOption == MenuOptionsTypes.DASHBOARD ? styles.active : ''}
            onClick={() => handleChangeMenuOption(MenuOptionsTypes.DASHBOARD)}
          >
            <div className="cursor-pointer ml-2 w-62 py-3 flex items-center gap-3">
              <DashboardLogo />
              Dashboard
            </div>
          </li>      
          <li 
            className={menuOption == MenuOptionsTypes.NETWORK ? styles.active : ''}
            onClick={() => handleChangeMenuOption(MenuOptionsTypes.NETWORK)}
          >
            <div className="cursor-pointer ml-2 w-62 py-3 flex items-center gap-3">
              <NetworkLogo />
              Network
            </div>
          </li>      
          <li 
            className={menuOption == MenuOptionsTypes.LISTDOC ? styles.active : ''}
            onClick={() => handleChangeMenuOption(MenuOptionsTypes.LISTDOC)}
          >
            <div className="cursor-pointer ml-2 w-62 py-3 flex items-center gap-3">
              <ListDocLogo />
              List Doc
            </div>
          </li>      
          <li 
            className={menuOption == MenuOptionsTypes.USERLIST ? styles.active : ''}
            onClick={() => handleChangeMenuOption(MenuOptionsTypes.USERLIST)}
          >
            <div className="cursor-pointer ml-2 w-62 py-3 flex items-center gap-3">
              <UserListLogo />
              User List
            </div>
          </li>      
          <li 
            className={menuOption == MenuOptionsTypes.DELIVERIES ? styles.active : ''}
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
