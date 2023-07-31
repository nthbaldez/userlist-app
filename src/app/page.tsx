"use client"

import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
import { useMenuOption } from '@/hooks/useMenuOption';
import { MenuOptionsTypes } from '@/types/menuOptions';

export default function Home() {

  const { menuOption } = useMenuOption();

  return (
    <div className="h-screen">
      <div className="flex">
        <Sidebar />
        <div className="flex-1 column">
          <Header title={MenuOptionsTypes[menuOption]}/>
          <main className="flex-1">
            
            <div className="mt-20">
              <table className="ml-4 table-auto border-collapse w-full">
                <thead>
                  <tr>
                    <th>
                      <input type="checkbox" className="form-checkbox h-4 w-4 text-indigo-600 border-gray-300 rounded" />
                    </th>
                    <th className="px-4 py-2 text-title">Profile</th>
                    <th className="px-4 py-2 text-title">Name</th>
                    <th className="px-4 py-2 text-title">Birth Date</th>
                    <th className="px-4 py-2 text-title">Endereço</th>
                    <th className="px-4 py-2 text-title">Telefone</th>
                    <th className="px-4 py-2 text-title">Status</th>
                    <th className="px-4 py-2 text-title">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {/* <tr className="text-center">
                    <td className="border px-4 py-2">João</td>
                    <td className="border px-4 py-2">30</td>
                    <td className="border px-4 py-2">Engenheiro</td>
                  </tr>
                  <tr className="text-center">
                    <td className="border px-4 py-2">Maria</td>
                    <td className="border px-4 py-2">25</td>
                    <td className="border px-4 py-2">Designer</td>
                  </tr> */}
                  
                </tbody>
              </table>
            </div>

          </main>
        </div>
      </div>
    </div>
  )
}
