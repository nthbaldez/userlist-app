"use client"

import React, { createContext, useState, ReactNode } from 'react';

interface ModalProps {
  children: ReactNode;
}

interface EditUserProps {
  id: number;
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
  handleDelete: (id: number) => {},
  handleEdit: ({...props}: EditUserProps) => {},
});

export const HandleUserProvider = ({ children }:ModalProps) => {
  const [ userToBeHandle, setUserToBeHandle ] = useState({
    id: 0,
    name: "",
    birthDate: "",
    address: "",
    telephoneNumber: "",
    status: "",
    image: "",
  });

  const handleDelete = (id: number) => {
    console.log(id);
  };

  const handleEdit = ({...props}: EditUserProps) => {
    setUserToBeHandle({...props});
  };

  return (
    <HandleUserContext.Provider value={{ userToBeHandle, setUserToBeHandle, handleDelete, handleEdit }}>
      {children}
    </HandleUserContext.Provider>
  );
};
