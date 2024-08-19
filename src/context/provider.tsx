'use client'
import { ReactNode, useState } from 'react';
import contexto from './context';

interface IProvider { children: ReactNode }

export default function Provider({children }: IProvider) {
  const [totalValue, setTotalValue] = useState<number>(0);

  const addTotalPrice = async (value: number) => {
    setTotalValue(Number(totalValue) + value);
  };

  const removeFromStorage = async (itemRemove: any) => {
  };

  return (
    <contexto.Provider
      value={{
        totalValue, setTotalValue,
        addTotalPrice,
        removeFromStorage,
      }}
    >
      {children}
    </contexto.Provider>
  );
}