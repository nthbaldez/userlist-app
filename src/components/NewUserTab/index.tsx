"use client"

import { useForm } from 'react-hook-form';
import { useMenuOption } from "@/hooks/useMenuOption";
import { MenuOptionsTypes } from "@/types/menuOptions";

import * as yup from "yup"
import VectorImage from "../svg/VectorImage";
import InputSearch from '../InputSearch';
import DatePickerComponent from '../DatePicker';
import { yupResolver } from '@hookform/resolvers/yup';
import { CreateUser } from '@/services/Users/UserService';
import ControlledInput from '../ControlledInput';

type FormProps = {
  name: string;
  birthDate: Date;
  address: string;
  telephoneNumber: string;
}

interface CreateUserProps {
  name: string;
  birthDate: string;
  address: string;
  telephoneNumber: string;
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


export default function NewUserTab() {

  const { setMenuOption } = useMenuOption();
  const { control, handleSubmit, formState: {errors},} = useForm<FormProps>({
    resolver: yupResolver(schema),
  });

  const saveNewUser = async (payload: CreateUserProps) => {
    await CreateUser(payload);
    setMenuOption(3);
  };

  const cancelNewUser = () => {
    setMenuOption(3);
  };

  const handleUserRegister = (data: FormProps) => {
    let obj = {...data, birthDate: data.birthDate.toLocaleDateString("pt-BR")}
    saveNewUser(obj);
  };


  return (
    <div className="mt-[80px] flex flex-col gap-[24px] h-full">
      <div className="flex justify-center items-center md:hidden">
        <InputSearch />
      </div>
      <div className="lg:grid lg:gap-[8px] lg:grid-flow-col mobileSmall:max-lg:flex mobileSmall:max-lg:flex-col overflow-visible mobileSmall:max-md:h-full border-[#EAEAEA]-300  lg:px-[154px]">
        <div className="mt-[45px] mx-auto h-[366px] lg:w-auto flex flex-col justify-center items-center gap-[35px]">
          <h3>Photo Profile</h3>
          <div className="w-[210px] h-[210px] bg-slate-50 rounded-full flex items-center justify-center">
            <VectorImage />
          </div>
        </div>

        <div className="md:w-[572px] px-[16px] flex flex-col justify-start gap-[10px] mt-[10px] mx-auto">
          <h1 className="text-gray-500">Profile</h1>
              <div className="flex flex-col justify-start gap-[8px] text-gray-500">
                <label className="text-[12px]">Full name</label>
                <ControlledInput
                  className="w-full h-[48px] px-[16px] py-[12px] text-[14px] leading-normal bg-gray-100 rounded-lg focus:bg-white focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                  name="name"
                  control={control}
                  placeholder=""
                  error={errors.name}
                />
              </div>

              <div className="flex flex-col justify-start gap-[8px]">
                {/* <DatePickerComponent /> */}
                <label className="text-[12px]">Birth Date</label>
                <ControlledInput
                  className="w-full h-[48px] px-[16px] py-[12px] text-[14px] leading-normal bg-gray-100 rounded-lg focus:bg-white focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                  name="birthDate"
                  control={control}
                  placeholder=""
                  error={errors.address}
                  type="date"
                />
              </div>

              <div className="flex flex-col justify-start gap-[8px]">
                <label className="text-[12px]">Address</label>
                <ControlledInput
                  className="w-full h-[48px] px-[16px] py-[12px] text-[14px] leading-normal bg-gray-100 rounded-lg focus:bg-white focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                  name="address"
                  control={control}
                  placeholder=""
                  error={errors.address}
                />
              </div>

              <div className="flex flex-col justify-start gap-[8px]">
                <label className="text-[12px]">Phone</label>
                <ControlledInput
                  className="w-full h-[48px] px-[16px] py-[12px] text-[14px] leading-normal bg-gray-100 rounded-lg focus:bg-white focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                  name="telephoneNumber"
                  control={control}
                  placeholder="(XX) XXXXX-XXXX"
                  error={errors.telephoneNumber}
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
                  onClick={handleSubmit(handleUserRegister)}
                >
                  SAVE CHANGES
                </button>
              </div>
        </div>

      </div>
    </div>
  )
}
