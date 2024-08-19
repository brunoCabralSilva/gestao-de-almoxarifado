'use client'
import { createContext } from 'react';

interface IContextProv {
  totalValue: number,
  setTotalValue: (state: number) => void,
  addTotalPrice: (item: number) => void,
  removeFromStorage: (item: number) => void,
}

const initialValue: IContextProv = {
  totalValue: 0,
  setTotalValue: () => {},
  addTotalPrice: () => {},
  removeFromStorage: () => {},
}

const contexto = createContext(initialValue);
export default contexto;