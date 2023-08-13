"use client"

import Image from 'next/image'
import ButtonNew from "../ButtonNew";
import * as yup from "yup"
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMenuOption } from '@/hooks/useMenuOption';
import { MenuOptionsTypes } from '@/types/menuOptions';
import { useState } from 'react';
import DatePickerComponent from '../DatePicker';
import ControlledInput from '../ControlledInput';
import InputSearch from '../InputSearch';
import { UpdateUser } from '@/services/Users/UserService';


interface EditUserTabProps {
  id: string;
  name: string;
  birthDate: string;
  address: string;
  telephoneNumber: string;
  status: string;
  image: string;
}

type EditUserProps = {
  id: string
  name?: string;
  birthDate?: string;
  address?: string;
  telephoneNumber?: string;
  status: string;
  image: string;
} 

const schema = yup.object({
  name: yup.string().required('Informe seu nome'),
  birthDate: yup
  .date()
  .required('Informe sua data de nascimento'),
  // birthDate: yup
  //   .string()
  //   .transform((curr, orig) => (orig === '' ? undefined : curr))
  //   .required('A data é obrigatória')
  //   .test('valid-date', 'Data inválida', function (value) {
  //     return /^(0[1-9]|[12][0-9]|3[01])[/](0[1-9]|1[0-2])[/]\d{4}$/.test(value);
  //   }),
  address: yup.string().required('Informe seu endereço'),
  telephoneNumber: yup
    .string()
    .required('Informe o número completo com o DDD')
    .min(11),
});
    
export default function EditUserTab({...props}: EditUserTabProps) {

  const { setMenuOption } = useMenuOption();
  const {name, birthDate, address, telephoneNumber, id} = props;
  const [formData, setFormData] = useState<EditUserProps>({...props});

  const [dia, mes, ano] = props.birthDate.split('/');
  const dateFormatted = `${ano}-${mes}-${dia}`;

  const handleEditUser = async () => {
    await UpdateUser(formData)
    setMenuOption(3);
  }

  const cancelNewUser = () => {
    setMenuOption(3);
  }

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div className="mobileSmall:max-md:mt-[40px] md:mt-[80px] flex flex-col gap-[24px] h-full">
    <div className="flex justify-center items-center md:hidden">
      <InputSearch />
    </div>

    <div className="px-[25px] flex justify-end">
      <ButtonNew />
    </div>

    <div className="lg:grid lg:gap-[8px] lg:grid-flow-col mobileSmall:max-lg:flex mobileSmall:max-lg:flex-col overflow-visible mobileSmall:max-md:h-full border-[#EAEAEA]-300  lg:px-[154px]">
      <div className="mt-[45px] mx-auto h-[366px] lg:w-auto flex flex-col justify-center items-center gap-[35px]">
        <h3>Photo Profile</h3>
        <div className="w-[210px] h-[210px] bg-slate-50 rounded-full flex items-center justify-center">
        {props.image &&
          <Image 
            src={props.image} 
            alt={props.name} 
            width={210} 
            height={210}
          />
        }
        </div>
      </div>

      <div className="md:w-[572px] px-[16px] flex flex-col justify-start gap-[10px] mt-[10px] mx-auto">
        <h1 className="text-gray-500">Profile</h1>
            <div className="flex flex-col justify-start gap-[8px] text-gray-500">
              <label className="text-[12px]">Full name</label>
              <input
                className="w-full h-[48px] px-[16px] py-[12px] text-[14px] leading-normal bg-gray-100 rounded-lg focus:bg-white focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                type="text"
                name="name" 
                defaultValue={props.name}
                onChange={handleChange}
              />
            </div>

            <div className="flex flex-col justify-start gap-[8px]">
              {/* <DatePickerComponent /> */}
              <label className="text-[12px]">Birth Date</label>
              <input
                className="w-full h-[48px] px-[16px] py-[12px] text-[14px] leading-normal bg-gray-100 rounded-lg focus:bg-white focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                type="date"
                name="birthDate"
                defaultValue={dateFormatted}
                onChange={handleChange}
              />
            </div>

            <div className="flex flex-col justify-start gap-[8px]">
              <label className="text-[12px]">Address</label>
              <input
                className="w-full h-[48px] px-[16px] py-[12px] text-[14px] leading-normal bg-gray-100 rounded-lg focus:bg-white focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                type="text"
                name="address"
                defaultValue={props.address}
                onChange={handleChange}
              />
            </div>

            <div className="flex flex-col justify-start gap-[8px]">
              <label className="text-[12px]">Phone</label>
              <input
                className="w-full h-[48px] px-[16px] py-[12px] text-[14px] leading-normal bg-gray-100 rounded-lg focus:bg-white focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                type="tel"
                name="telephoneNumber"
                defaultValue={props.telephoneNumber}
                onChange={handleChange}
              />
            </div>
            
            <div className="w-full flex justify-end items-center gap-[24px] mt-[20px]">
              <button
                className="bg-white border-[1px] border-solid border-gray-950 px-[15px] py-[7px] rounded-[20px]" 
                type="button"
                onClick={cancelNewUser}
              >
                CANCEL
              </button>
              <button
                className="bg-indigo-500 px-[15px] py-[7px] rounded-[20px] text-white w-[210px] h-[44px]" 
                type="button"
                onClick={handleEditUser}
              >
                SAVE CHANGES
              </button>
            </div>
      </div>

    </div>
  </div>
  )
}
