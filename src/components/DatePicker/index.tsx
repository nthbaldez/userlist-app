"use client"

import '../../../node_modules/sassy-datepicker/dist/styles.css';
import './styles.css';

import { useState } from "react";
import DatePicker from "sassy-datepicker";

export default function DatePickerComponent() {
  const [ dateValue, setDateValue ] = useState(new Date());

  const onChange = (newDate: Date) => {
    console.log(`New date selected - ${newDate.toString()}`);
    setDateValue(newDate);
  };

  return (
    <>
      <label className="text-[12px]">Your date birthday</label>
      <input
        type="text"
        className="w-full h-[48px] px-[16px] py-[12px] text-[14px] leading-normal bg-gray-100 rounded-lg focus:bg-white focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
        value={dateValue.toLocaleString("pt-BR").split(",")[0]}
      />
      <DatePicker
        className="text-[12px] w-full" 
        onChange={onChange} 
        value={dateValue}
      />  
    </>
  )
}
