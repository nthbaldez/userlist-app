"use client"

import ButtonNew from "../ButtonNew";
import * as yup from "yup"
import { useForm } from 'react-hook-form';

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

export default function NewUserTab() {

  const { register, setValue, handleSubmit, formState: { errors } } = useForm<FormData>();

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
      <div className="grid gap-[8px] grid-flow-col border-[#EAEAEA]-300 border-t-2">
        <div className="mt-[60px] h-[366px] w-[262px] flex flex-col justify-center items-center gap-[35px] ml-[154px]">
          <h3>Photo Profile</h3>
          {/* <Image 
            src={} 
            alt={} 
            width={210} 
            height={210}
          /> */}
        </div>

        <div className="w-[572px] px-[16px] flex flex-col justify-start gap-[10px] mt-[40px]">
          <h1 className="text-gray-500">Profile</h1>
          <form 
            onSubmit={onSubmit}
          >
            <div className="flex flex-col justify-start gap-[8px] text-gray-500">
              <label className="text-[12px]">Full name</label>
              <input
                className="w-full h-[48px] px-[16px] py-[12px] text-[14px] leading-normal bg-gray-100 rounded-lg"
                {...register("fullName")}
              />
            </div>

            <div className="flex flex-col justify-start gap-[8px]">
              <label className="text-[12px]">Your date birthday</label>
              <input
                {...register("birthDate")}
              />
            </div>

            <div className="flex flex-col justify-start gap-[8px]">
              <label className="text-[12px]">Address</label>
              <input
                className="w-full h-[48px] px-[16px] py-[12px] text-[14px] leading-normal bg-gray-100 rounded-lg"
                {...register("address")}
              />
            </div>
            <div className="flex flex-col justify-start gap-[8px]">
              <label className="text-[12px]">Phone</label>
              <input
                className="w-full h-[48px] px-[16px] py-[12px] text-[14px] leading-normal bg-gray-100 rounded-lg"
                {...register("telephoneNumber")}
              />
            </div>
            <div className="w-full flex justify-end items-center gap-[24px] mt-[20px]">
              <button
                className="bg-white border-2 border-gray-950 px-[15px] py-[7px] rounded-[20px]" 
                type="submit"
                onClick={() => {
                  // setValue("fullName", props.name)
                }}
              >
                CANCEL
              </button>
              <button
                className="bg-indigo-500 px-[15px] py-[7px] rounded-[20px] text-white w-[210px] h-[44px]" 
                type="submit"
                onClick={() => {
                  // setValue("fullName", props.name)
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
