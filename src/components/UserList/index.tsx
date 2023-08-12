"use client"

import Image from 'next/image'
import ButtonNew from '../ButtonNew'
import { fetchUsers } from '@/hooks/useGetUsers';
import { useEffect, useState } from 'react';
import ButtonEditOrDeleteUser from '../ButtonEditUser';
import InputSearch from '../InputSearch';

interface UserProps {
  id: number;
  name: string;
  birthDate: string;
  address: string;
  telephoneNumber: string;
  status: string;
  image: string;
}

export default function UserList() {

  const [users, setUsers] = useState<UserProps[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchUsers();
        setUsers(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Erro na requisição:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="mt-[24px] flex flex-col gap-[24px] mobileSmall:max-md:flex mobileSmall:max-md:h-screen">
      <div className="px-[25px] flex justify-end mobileSmall:max-md:hidden">
        <ButtonNew />
      </div>
      <div className="flex justify-center items-center md:hidden">
        <InputSearch />
      </div>
      <table className="border-2 table-auto border-collapse w-full mobileSmall:min-h-[250px]">
        <thead className="border-t-1 border-[#EAEAEA]-300 border-b-2">
          <tr>
            <th className="w-[58px] h-[50px]">
              <input type="checkbox" className="cursor-pointer form-checkbox h-[20px] w-[20px] text-indigo-600 border-gray-300 rounded" />
            </th>
            <th className="w-[60px] px-4 py-2 text-title">Profile</th>
            <th className="w-[428px] px-4 py-2 text-title text-left">Name</th>
            <th className="w-[232px] px-4 py-2 text-title text-left">Birth Date</th>
            <th className="w-[198px] px-4 py-2 text-title text-left mobileSmall:max-md:hidden">Endereço</th>
            <th className="w-[302px] px-4 py-2 text-title mobileSmall:max-md:hidden md:max-lg:w-[350px]">Telefone</th>
            <th className="w-[230px] px-4 py-2 text-title mobileSmall:max-md:hidden md:max-lg:w-[80px]">Status</th>
            <th className="px-4 py-2 text-title">Action</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => 
            <tr key={user.id} className="border-b-[1px] border-[#EAEAEA]-300 text-center text-[#6C757D]">
              <td className="px-4 py-2">
                <input type="checkbox" className="cursor-pointer form-checkbox h-[20px] w-[20px] text-indigo-600 border-gray-300 rounded" />
              </td>
              <td className="px-4 py-2 flex items-center justify-center">
                <Image
                  className="fill-transparent"
                  src={user.image} 
                  alt="Eliza" 
                  width={38} 
                  height={38}
                />
              </td>
              <td className="px-4 py-2 text-left">{user.name}</td>
              <td className="px-4 py-2 text-left">{user.birthDate}</td>
              <td className="px-4 py-2 text-left mobileSmall:max-md:hidden">{user.address}</td>
              <td className="px-4 py-2 mobileSmall:max-md:hidden">{user.telephoneNumber}</td>
              <td className="px-4 py-2 mobileSmall:max-md:hidden">
                <div className={user.status === 'Done' ? 'py-[2px] px-[10px] m-auto w-[70px] text-center bg-[#d1fae5] text-[#28A745] rounded-3xl' : 'py-[2px] px-[10px] m-auto w-[70px] text-center bg-[#fed7aa] text-[#DC8535] rounded-3xl'}>
                  <p>
                    {user.status}
                  </p>
                </div>
              </td>
              <td className="w-[115px] px-4 py-2 cursor-pointer hover:bg-[#d2b6f8] text-[bg-[#9747FF]">
                <ButtonEditOrDeleteUser {...user}/>
              </td>
            </tr>
          )}
        </tbody>
      </table>
      <div className="px-[25px] flex justify-end md:hidden">
        <ButtonNew />
      </div>
    </div>
  )
}
