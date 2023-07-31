"use client"

import { MenuOptionProvider } from "@/contexts/MenuOptionsContext";
import { ReactNode } from "react";

interface DefaultProviderProps {
  children: ReactNode;
}

export default function DefaultProviders({ children }: DefaultProviderProps) {
  return (
    <MenuOptionProvider>
      {children}
    </MenuOptionProvider>
  )
}
