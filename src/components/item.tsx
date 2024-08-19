'use client'
import IRegister from "@/interfaces/interfaces";
import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

export default function Item(props: any) {
  const { name, quant, dates } = props;
  const [showDates, setShowDates] = useState(false);
  const [updateStore, setUpdateStore] = useState(false);

  return (
    <div className="rounded-lg border-black flex flex-col border px-3 py-2 relative">
      <div className="flex justify-between items-center">
        <div className="flex">
          <p className="font-bold capitalize">{`${name} ( ${quant} / ${quant} )`}</p>
        </div>
        <button type="button" className="text-2xl">
          { 
            showDates
            ? <IoIosArrowUp onClick={() => setShowDates(!showDates)} />
            : <IoIosArrowDown onClick={() => setShowDates(!showDates)} />
          }
        </button>
      </div>
      {
        showDates &&
        <div>
          <div className="mt-3">
            <div className="grid grid-cols-5">
              <div className="border border-black border-r-transparent p-1 font-bold text-center">Data</div>
              <div className="border border-black border-r-transparent p-1 font-bold text-center">Colaborador</div>
              <div className="border border-black border-r-transparent p-1 font-bold text-center">Tipo</div>
              <div className="border border-black border-r-transparent p-1 font-bold text-center">Motivo</div>
              <div className="border border-black p-1 font-bold text-center">Quantidade Atualizada</div>
            </div>
            {
              dates.map((register: IRegister, index: number) => (
                <div
                  key={index}
                  className="grid grid-cols-5"
                >
                  <div className="border border-black border-r-transparent border-t-transparent p-1 text-center">{register.date}</div>
                  <div className="border border-black border-r-transparent border-t-transparent p-1 text-center">{register.employee}</div>
                  <div className="border border-black border-r-transparent border-t-transparent p-1 text-center">{register.type}</div>
                  <div className="border border-black border-r-transparent  border-t-transparent p-1 text-center">{register.justification}</div>
                  <div className="border border-black border-t-transparent p-1 text-center">{register.quant}</div>
                </div>
              ))
            }
          </div>
          <div className="grid grid-cols-5 mt-3 mb-1">
            <div /><div /><div /><div />
            <button
              type="button"
              onClick={ () => setUpdateStore(!updateStore) }
              className="border border-black py-1 px-2 rounded-lg w-full"
            >
              Atualizar estoque
            </button>
          </div>
        </div>
      }
    </div>
  );
}