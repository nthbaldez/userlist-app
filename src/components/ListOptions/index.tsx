"use client"

import { useHandleUser } from '@/hooks/useHandleUser';
import { useMenuOption } from '@/hooks/useMenuOption';
import { useModalMenu } from '@/hooks/useModalMenu';
import { MenuOptionsTypes } from '@/types/menuOptions';

interface ListOptionsProps {
  id: number;
  name: string;
  setListIsOpen: (isOpen: boolean) => void;
}

export default function ListOptions({ id, name, setListIsOpen }:ListOptionsProps) {
  const { openModal } = useModalMenu();
  const { setMenuOption } = useMenuOption();
  const { setUserToBeHandle, handleEdit } = useHandleUser();
  
  const handleEditModal = () => {
    setMenuOption(MenuOptionsTypes.EDITUSERTAB);
    handleEdit(name);
    console.log(id)
  }

  const handleDeleteModal = () => {
    openModal();
    setListIsOpen(false)
    setUserToBeHandle(id);
    console.log('delete')
  }

  return (
    <ul className="flex flex-col items-center justify-around absolute w-[239px] h-[170px] bg-white right-[80px] z-40 top-[5px] border-radius rounded-lg shadow-lg">
      <li 
        className="w-[153px] h-[93px] flex items-center justify-center cursor-pointer hover:text-violet-600"
        onClick={() => handleEditModal()}
      >
        Edit
      </li>
      <span className="h-[1px] w-[130px] bg-slate-300"></span>
      <li 
        className="w-[153px] h-[93px] flex items-center justify-center cursor-pointer hover:text-violet-600"
        onClick={() => handleDeleteModal()}
      >
        Delete
      </li>
    </ul>
  )
}
