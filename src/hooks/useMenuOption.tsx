"use client"

import { MenuOptionsContext } from '@/contexts/MenuOptionsContext';
import { useContext } from 'react';

export function useMenuOption() {
  return useContext(MenuOptionsContext);
}
