import Footer from "@/components/footer";
import Item from "@/components/item";
import Navigation from "@/components/navigation";

export default function Home() {

  return(
    <div className="w-full min-h-screen">
      <Navigation />
      <div className="min-h-screen">
        <div className="p-2 border-b-black border flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-black"></div>
          <p>Bem vindo, Fábio!</p>
        </div>
        <p className="p-3 text-2xl font-bold">Almoxarifado</p>
        <div className="p-2 flex flex-col gap-2">
          <Item
            name="martelo"
            quant="3"
            dates={
              [
                {
                  date: `25/10/2024, às 22h`,
                  employee: 'José de Souza',
                  type: 'Retirada',
                  justification: 'Porque ele quis',
                  quant: 2,
                },
                {
                  date: `25/10/2024, às 22h`,
                  employee: 'José de Souza',
                  type: 'Retirada',
                  justification: 'Porque ele quis',
                  quant: 2,
                },
                {
                  date: `25/10/2024, às 22h`,
                  employee: 'José de Souza',
                  type: 'Retirada',
                  justification: 'Porque ele quis',
                  quant: 2,
                }
              ]} />
        </div>
      </div>
      <Footer />
    </div>
  );
}