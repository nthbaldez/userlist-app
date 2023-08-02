"use client"

import './globals.css'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import Sidebar from '@/components/Sidebar'
import DefaultProviders from '@/components/DefaultProviders'
import Header from '@/components/Header'
import { MenuOptionsTypes } from '@/types/menuOptions';
import { useMenuOption } from '@/hooks/useMenuOption'
import { useEffect, useState } from 'react'

const roboto = Roboto({ 
  subsets: ['latin'],
  weight: ['300', '400', '700']
})

export const metadata: Metadata = {
  title: 'Admin Panel',
  description: 'Management data for users',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  return (
    <html lang="en">
      <body className={roboto.className}>
        <DefaultProviders>
        <div className="flex">
          <Sidebar />
          <div className="flex-1 column">
            <Header />
            {children}
          </div>
        </div>
        </DefaultProviders>
      </body>
      
    </html>
  )
}
