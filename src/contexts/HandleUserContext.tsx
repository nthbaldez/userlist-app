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
  userToBeHandle: 0,
  setUserToBeHandle: (id: number) => {},
  handleDelete: (id: number) => {},
  handleEdit: (name: string) => {},
});

export const HandleUserProvider = ({ children }:ModalProps) => {
  const [ userToBeHandle, setUserToBeHandle ] = useState(0);

  const handleDelete = (id: number) => {
    console.log(id);
  };

  const handleEdit = (name: string) => {
    console.log(name);
  };

  return (
    <HandleUserContext.Provider value={{ userToBeHandle, setUserToBeHandle, handleDelete, handleEdit }}>
      {children}
    </HandleUserContext.Provider>
  );
};
