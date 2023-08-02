"use client"

import { userData } from '@/utils/data'
import Image from 'next/image'

export default function UserList() {
  
  return (
    <div className="mt-20 min-h-full">
      <table className="border-2 table-auto border-collapse w-full">
        <thead className="border-t-1 border-[#EAEAEA]-300 border-b-2">
          <tr>
            <th className="w-[58px] h-[50px]">
              <input type="checkbox" className="cursor-pointer form-checkbox h-[20px] w-[20px] text-indigo-600 border-gray-300 rounded" />
            </th>
            <th className="w-[60px] px-4 py-2 text-title">Profile</th>
            <th className="w-[428px] px-4 py-2 text-title text-left">Name</th>
            <th className="w-[232px] px-4 py-2 text-title text-left">Birth Date</th>
            <th className="w-[198px] px-4 py-2 text-title text-left">Endereço</th>
            <th className="w-[302px] px-4 py-2 text-title">Telefone</th>
            <th className="w-[230px] px-4 py-2 text-title">Status</th>
            <th className="px-4 py-2 text-title">Action</th>
          </tr>
        </thead>

        <tbody>
          {userData.map((user) => 
            <tr key={user.name} className="border-b-[1px] border-[#EAEAEA]-300 text-center text-[#6C757D]">
              <td className="px-4 py-2">
                <input type="checkbox" className="cursor-pointer form-checkbox h-[20px] w-[20px] text-indigo-600 border-gray-300 rounded" />
              </td>
              <td className="px-4 py-2 flex items-center justify-center">
                <Image 
                  src={user.image} 
                  alt="Eliza" 
                  width={38} 
                  height={38}
                />
              </td>
              <td className="px-4 py-2 text-left">{user.name}</td>
              <td className="px-4 py-2 text-left">{user.birthDate}</td>
              <td className="px-4 py-2 text-left">{user.address}</td>
              <td className="px-4 py-2">{user.telephoneNumber}</td>
              <td className="px-4 py-2">
                <div className={user.status === 'Done' ? 'py-[2px] px-[10px] m-auto w-[70px] text-center bg-[#d1fae5] text-[#28A745] rounded-3xl' : 'py-[2px] px-[10px] m-auto w-[70px] text-center bg-[#fed7aa] text-[#DC8535] rounded-3xl'}>
                  <p>
                    {user.status}
                  </p>
                </div>
              </td>
              <td className="w-[115px] px-4 py-2 cursor-pointer hover:bg-[#d2b6f8] text-[bg-[#9747FF]">
                <button 
                  className="flex items-center justify-center w-full h-full text-[16px]"
                >
                  <Image 
                    src="reticencias.svg" 
                    alt="" 
                    width={20} 
                    height={20} 
                    className="text-white" 
                  />
                </button>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}
