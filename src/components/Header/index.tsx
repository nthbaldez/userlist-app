import { useEffect, useState } from "react";
import InputSearch from "../InputSearch"
import Image from 'next/image'
import { useMenuOption } from "@/hooks/useMenuOption";
import MenuHamburguer from "../MenuHamburguer";

interface HeaderProps {
  title: string;
}

export default function Header() {

  const { menuOption } = useMenuOption();
  const [ title, setTitle ] = useState('User List');

  useEffect(() => {
    if (menuOption == 0) {
      setTitle('Dashboard');
    } else if (menuOption == 1) {
      setTitle('Network');
    } else if (menuOption == 2) {
      setTitle('List Doc');
    } else if (menuOption == 3) {
      setTitle('User List');
    } else if (menuOption == 4) {
      setTitle('Deliveries');
    } else if (menuOption == 5) {
      setTitle('New User');
    }
  }, [menuOption])
  
  return (
    <header className="h-16 flex p-5 justify-between items-center shadow-lg">
      <h4 className="text-title font-bold mobileSmall:max-md:hidden">{title}</h4>
      <MenuHamburguer />
      <div className="mobileSmall:max-md:hidden">
        <InputSearch />
      </div>
      <h4 className="text-title font-bold md:hidden">{title}</h4>
      <div>
        <Image 
          src="eliza.svg" 
          alt="Eliza"
          width={36}
          height={36} 
        />
      </div>
    </header>
  )
}
