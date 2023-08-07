"use client"

import { useModalMenu } from '@/hooks/useModalMenu';
import { useState } from 'react';
import ReactModal from 'react-modal';

interface ListOptionsProps {
  id: number;
}

export default function ListOptions({ id }:ListOptionsProps) {
  const { isModalOpen, openModal, closeModal} = useModalMenu()
  
  const handleEdit = () => {
    openModal();
    console.log(id)
  }

  const handleDelete = () => {
    console.log('delete')
  }

  return (
    <ul className="flex flex-col items-center justify-around absolute w-[239px] h-[170px] bg-white right-[80px] z-40 top-[5px] border-radius rounded-lg shadow-lg">
      <li 
        className="w-[153px] h-[93px] flex items-center justify-center cursor-pointer hover:text-violet-600"
        onClick={() => handleEdit()}
      >
        Edit
      </li>
      <span className="h-[1px] w-[130px] bg-slate-300"></span>
      <li 
        className="w-[153px] h-[93px] flex items-center justify-center cursor-pointer hover:text-violet-600"
        onClick={() => handleDelete()}
      >
        Delete
      </li>
    </ul>
  )
}
