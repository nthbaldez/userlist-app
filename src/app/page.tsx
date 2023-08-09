"use client"

import { useMenuOption } from '@/hooks/useMenuOption';
import { useEffect, useState } from 'react';
import { MenuOptionsTypes } from "@/types/menuOptions";

import UserList from '@/components/UserList';
import Dashboard from '@/components/Dashboard';
import NewUserTab from '@/components/NewUserTab';
import EditUserTab from '@/components/EditUserTab';
import { useModalMenu } from '@/hooks/useModalMenu';
import ReactModal from 'react-modal';
import CloseIcon from '@/components/svg/CloseIcon';
import InfoIcon from '@/components/svg/InfoIcon';
import { useHandleUser } from '@/hooks/useHandleUser';

export default function Home() {

  const { menuOption } = useMenuOption();
  const { isModalOpen, closeModal} = useModalMenu();
  const { userToBeHandle, handleDelete } = useHandleUser();
  
  const [ main, setMain ] = useState(menuOption);

  useEffect(() => {
    setMain(menuOption);
  }, [menuOption])

  return (
    <div className="max-h-screen sm:max-h-1/2">
      <main>
        { main === MenuOptionsTypes.USERLIST && <UserList />}
        { main === MenuOptionsTypes.DASHBOARD && <Dashboard />}
        { main === MenuOptionsTypes.NEWUSER && <NewUserTab />}
        { main === MenuOptionsTypes.EDITUSERTAB && <EditUserTab {...userToBeHandle}/>}
      </main>

      {isModalOpen && (
        <ReactModal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          contentLabel="Exemplo de Modal"
          ariaHideApp={false}
          
          style={{
            overlay: {
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.5)'
            },
            content: {
              margin: '350px auto',
              border: '1px solid #ccc',
              background: '#fff',
              overflow: 'auto',
              WebkitOverflowScrolling: 'touch',
              borderRadius: '8px',
              outline: 'none',
              padding: '20px',
              width: '350px',
              height: '232px',
            }
          }}
        >
          <div className="flex justify-start flex-col items-center gap-[20 px]">
            <div className="flex w-full h-[16px] justify-end">
              <button 
                onClick={closeModal}
              >
                <CloseIcon />
              </button>
            </div>
            
            <div className="w-full flex flex-col justify-center items-center gap-[16px] px-[24px] py-[20px] mb-[36px]">
              <InfoIcon />
              <p className="text-[16px]">Would you like to delete this user??</p>
            </div>

            <div className="grid gap-[8px] grid-flow-col">
              <button 
                className="col-auto w-auto border-solid hover:bg-slate-100 border-2 border-[#E5E7EB] text-sm px-[12px] py-[4px] rounded-lg"
                onClick={closeModal}
              >
                No, cancel
              </button>

              <button 
                className="w-[124px] bg-violet-500 hover:bg-violet-600 text-white text-sm px-[12px] py-[4px] rounded-lg"
                onClick={() => handleDelete(userToBeHandle.id)}
              >
                Yes
              </button>
            </div>
          </div>
        </ReactModal>
      )}
    </div>
  )
}
