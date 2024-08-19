export default function UpdateStorage() {
  return(
    <div>
      <div className="grid grid-cols-5 mt-3 mb-1">
        <label htmlFor="date" className="w-full">
          Data e Hora
          <input id="date" className="p-1 text-center w-full" type="datetime-local" />
        </label>
        <label htmlFor="employee" className="w-full">
          Nome do Funcionário
          <input id="employee" className="p-1 text-center w-full" type="text" />
        </label>
        <label className="w-full">
          Tipo da Ação
          <select className="p-1 text-center w-full">
            <option disabled>Escolha uma Opção</option>
            <option>Retirada</option>
            <option>Devolução</option>
          </select>
        </label>
        <label htmlFor="justification" className="w-full">
          Motivo
          <input id="justification" type="text" className="p-1 text-center w-full" />
        </label>
        <label htmlFor="justification">
          Quantidade retirada / devolvida
          <input id="justification" type="text" className="p-1 text-center w-full" />
        </label>
      </div>
    </div>
  );
}