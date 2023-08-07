"use client"

import { useMenuOption } from '@/hooks/useMenuOption';
import { useEffect, useState } from 'react';
import { MenuOptionsTypes } from "@/types/menuOptions";

import UserList from '@/components/UserList';
import Dashboard from '@/components/Dashboard';
import NewUserTab from '@/components/NewUserTab';
import EditUserTab from '@/components/EditUserTab';
import { useModalMenu } from '@/hooks/useModalMenu';
import ReactModal from 'react-modal';

export default function Home() {

  const { menuOption } = useMenuOption();
  const { isModalOpen, openModal, closeModal} = useModalMenu()
  
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
        { main === MenuOptionsTypes.EDITUSERTAB && <EditUserTab />}
      </main>

      {isModalOpen && (
        <ReactModal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          contentLabel="Exemplo de Modal"
          ariaHideApp={false}
        >
          {/* Renderize o conteúdo do modal aqui */}
          <button onClick={closeModal}>Fechar Modal</button>
        </ReactModal>
      )}
    </div>
  )
}
