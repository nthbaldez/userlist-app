"use client"

import { useMenuOption } from '@/hooks/useMenuOption';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { MenuOptionsTypes } from "@/types/menuOptions";

import UserList from '@/components/UserList';
import Dashboard from '@/components/Dashboard';
import NewUserTab from '@/components/NewUserTab';

export default function Home() {

  const { menuOption } = useMenuOption();
  const [ main, setMain ] = useState(menuOption);

  useEffect(() => {
    setMain(menuOption);
  }, [menuOption])

  return (
    <div className="max-h-screen sm:max-h-1/2">
      <main>
        { main === MenuOptionsTypes.USERLIST && <UserList />}
        { main === MenuOptionsTypes.DASHBOARD && <Dashboard />}
        { main === MenuOptionsTypes.NEWUSER && <NewUserTab />}
      </main>
    </div>
  )
}
