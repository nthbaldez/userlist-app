"use client"

import { useMenuOption } from '@/hooks/useMenuOption';
import { useModalMenu } from '@/hooks/useModalMenu';
import { DeleteUser } from '@/services/Users/UserService';
import React, { createContext, useState, ReactNode } from 'react';

interface ModalProps {
  children: ReactNode;
}

interface EditUserProps {
  id: string;
  name: string;
  birthDate: string;
  address: string;
  telephoneNumber: string;
  status: string;
  image: string;
}

export const HandleUserContext = createContext({
  userToBeHandle: {} as EditUserProps,
  setUserToBeHandle: ({...props}: EditUserProps) => {},
  handleDelete: (id: string) => {},
});

export const HandleUserProvider = ({ children }:ModalProps) => {
  
  const [ userToBeHandle, setUserToBeHandle ] = useState({
    id: '',
    name: "",
    birthDate: "",
    address: "",
    telephoneNumber: "",
    status: "",
    image: "",
  });

  const handleDelete = async (id: string) => {
    await DeleteUser(id);
  };

  return (
    <HandleUserContext.Provider value={{ userToBeHandle, setUserToBeHandle, handleDelete }}>
      {children}
    </HandleUserContext.Provider>
  );
};
