"use client"

import { HandleUserContext } from '@/contexts/HandleUserContext';
import { useContext } from 'react';

export function useHandleUser() {
  return useContext(HandleUserContext);
}
