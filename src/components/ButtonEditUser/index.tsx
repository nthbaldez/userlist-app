import Image from 'next/image'
import { useState } from 'react';
import ListOptions from '../ListOptions';

interface ButtonEditNewUserProps {
  id: string;
  name: string;
  birthDate: string;
  address: string;
  telephoneNumber: string;
  status: string;
  image: string;
}

export default function ButtonEditOrDeleteUser({ id, name, birthDate, address, telephoneNumber, status, image }:ButtonEditNewUserProps) {

  const [ listIsOpen, setListIsOpen ] = useState(false);
  
  return (
    <div className="flex items-center relative h-[100%] w-[100%]">
      <button 
        className="flex items-center justify-center inset-0 w-full h-full text-[16px] cursor-pointer"
        onClick={(() => setListIsOpen(prev => !prev))}
      >
        <Image 
          src="reticencias.svg" 
          alt="" 
          width={20} 
          height={20} 
          className="text-white" 
        />
      </button>
      {listIsOpen && <ListOptions id={id} name={name} birthDate={birthDate} address={address} telephoneNumber={telephoneNumber} image={image} status={status} setListIsOpen={setListIsOpen}/>}
    </div>
  )
}
