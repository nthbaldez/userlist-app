"use client"

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
        {children}
        </ModalProvider>
      </HandleUserProvider>
    </MenuOptionProvider>
  )
}
