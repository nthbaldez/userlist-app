"use client"

import DatePicker from 'sassy-datepicker';
import '../../../node_modules/sassy-datepicker/dist/styles.css';
import './styles.css';

import Image from 'next/image'
import ButtonNew from "../ButtonNew";
import * as yup from "yup"
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMenuOption } from '@/hooks/useMenuOption';
import { MenuOptionsTypes } from '@/types/menuOptions';
import { useState } from 'react';


interface EditUserTabProps {
  id: number;
  name: string;
  birthDate: string;
  address: string;
  telephoneNumber: string;
  status: string;
  image: string;
}

type FormData = {
  fullName: string;
  birthDate: Date;
  address: string;
  telephoneNumber: string;
} 

const schema = yup
  .object({
    fullName: yup.string().required(),
    birthDate: yup.date().required(),
    address: yup.string().required(),
    telephoneNumber: yup.string().required()
  })
  .required();
    
export default function EditUserTab({...props}: EditUserTabProps) {

  const { setMenuOption } = useMenuOption();
  const { register, setValue, handleSubmit, formState: { errors } } = useForm<FormData>();

  const [dia, mes, ano] = props.birthDate.split('/');
  console.log(`dia: ${dia}`)
  const dateFormatted = new Date(`${ano}-${mes}-${dia}`);
  console.log("data formatada: " + dateFormatted);
  const [ dateValue, setDateValue ] = useState(new Date(dateFormatted));

  const onChange = (newDate: Date) => {
    console.log(`New date selected - ${newDate.toString()}`);
    setDateValue(newDate);
  };

  const onSubmit = handleSubmit((data) => {
    if (data) {
      console.log(data);
    } else {
      console.log('campo vazio')
    }
  });

  return (
    <div className="mt-[24px] min-h-full flex flex-col gap-[24px]">
      <div className="px-[25px] flex justify-end">
        <ButtonNew />
      </div>
      <div className="grid gap-[8px] grid-flow-col border-[#EAEAEA]-300 border-t-2 px-[154px]">
        <div className="mt-[45px] mx-auto h-[366px] w-auto flex flex-col justify-center items-center gap-[35px]">
          <h3>Photo Profile</h3>
          <Image 
            src={props.image} 
            alt={props.name} 
            width={210} 
            height={210}
          />
        </div>

        <div className="w-[572px] px-[16px] flex flex-col justify-start gap-[10px] mt-[40px] mx-auto">
          <h1 className="text-gray-500">Profile</h1>
          <form 
            onSubmit={onSubmit}
          >
            <div className="flex flex-col justify-start gap-[8px] text-gray-500">
              <label className="text-[12px]">Full name</label>
              <input
                className="w-full h-[48px] px-[16px] py-[12px] text-[14px] leading-normal bg-gray-100 rounded-lg focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                type="text"
                name="fullName" 
                value={props.name}
              />
            </div>

            <div className="flex flex-col justify-start gap-[8px] text-gray-500">
              <label className="text-[12px]">Your date birthday</label>
              <input
                className="w-full h-[48px] px-[16px] py-[12px] text-[14px] leading-normal bg-gray-100 rounded-lg focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                type="text"
                name="birthDate"
                value={dateValue.toLocaleString("pt-BR").split(",")[0]}
              />
              <DatePicker 
                className="text-[12px] w-full m-auto" 
                onChange={onChange} 
                value={dateValue}
              /> 
            </div>
            <div className="flex flex-col justify-start gap-[8px] text-gray-500">
              <label className="text-[12px]">Address</label>
              <input
                className="w-full h-[48px] px-[16px] py-[12px] text-[14px] leading-normal bg-gray-100 rounded-lg focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                type="text"
                name="address"
                value={props.address}
              />
            </div>
            <div className="flex flex-col justify-start gap-[8px] text-gray-500">
              <label className="text-[12px]">Phone</label>
              <input
                className="w-full h-[48px] px-[16px] py-[12px] text-[14px] leading-normal bg-gray-100 rounded-lg focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                type="tel"
                name="telephoneNumber"
                value={props.telephoneNumber}
              />
            </div>
            <div className="w-full flex justify-end items-center gap-[24px] mt-[20px]">
              <button
                className="bg-white border-[1px] border-gray-950 px-[15px] py-[7px] rounded-[20px]" 
                type="submit"
                onClick={() => setMenuOption(MenuOptionsTypes.USERLIST)}
              >
                CANCEL
              </button>
              <button
                className="bg-indigo-500 px-[15px] py-[7px] rounded-[20px] text-white w-[210px] h-[44px]" 
                type="submit"
                onClick={() => {
                  setValue("fullName", props.name)
                }}
              >
                SAVE CHANGES
              </button>
            </div>
          </form>
        </div>

      </div>
    </div>
  )
}
