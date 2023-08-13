"use client"

import { useHandleUser } from '@/hooks/useHandleUser';
import { useMenuOption } from '@/hooks/useMenuOption';
import { useModalMenu } from '@/hooks/useModalMenu';
import { MenuOptionsTypes } from '@/types/menuOptions';

interface ListOptionsProps {
  id: string;
  name: string;
  birthDate: string;
  address: string;
  telephoneNumber: string;
  status: string;
  image: string;
  setListIsOpen: (isOpen: boolean) => void;
}

export default function ListOptions({ setListIsOpen, ...props }:ListOptionsProps) {
  const { openModal } = useModalMenu();
  const { setMenuOption } = useMenuOption();
  const { setUserToBeHandle, handleEdit } = useHandleUser();
  
  const handleEditTab = () => {
    setMenuOption(MenuOptionsTypes.EDITUSERTAB);
    handleEdit({...props});
    setUserToBeHandle({...props});
    console.log({...props});
  }

  const handleDeleteUserModal = () => {
    openModal();
    setListIsOpen(false)
    setUserToBeHandle({...props});
    console.log('delete')
  }

  return (
    <ul className="flex flex-col items-center justify-around absolute w-[239px] h-[170px] bg-white right-[80px] z-40 top-[5px] border-radius rounded-lg shadow-lg">
      <li 
        className="w-[153px] h-[93px] flex items-center justify-center cursor-pointer hover:text-violet-600"
        onClick={() => handleEditTab()}
      >
        Edit
      </li>
      <span className="h-[1px] w-[130px] bg-slate-300"></span>
      <li 
        className="w-[153px] h-[93px] flex items-center justify-center cursor-pointer hover:text-violet-600"
        onClick={() => handleDeleteUserModal()}
      >
        Delete
      </li>
    </ul>
  )
}
