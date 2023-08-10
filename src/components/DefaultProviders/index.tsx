"use client"

import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { HandleUserProvider } from "@/contexts/HandleUserContext";
import { MenuOptionProvider } from "@/contexts/MenuOptionsContext";
import { ModalProvider } from "@/contexts/ModalContext";
import { ReactNode } from "react";

interface DefaultProviderProps {
  children: ReactNode;
}

export default function DefaultProviders({ children }: DefaultProviderProps) {
  return (
    <MenuOptionProvider>
        <HandleUserProvider>
          <ModalProvider>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              {children}
            </LocalizationProvider>
          </ModalProvider>
        </HandleUserProvider>
    </MenuOptionProvider>
  )
}
