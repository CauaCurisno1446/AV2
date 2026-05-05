import { useState } from 'react';
import { Search } from 'lucide-react';
import aerFoto from "../assets/img/boeing.jpg"

const mockAeronaves = [
  { id: 1, nome: 'Aeronave 1', dados: ['Modelo: Boeing 737', 'Capacidade: 189', 'Status: Ativa'] },
  { id: 2, nome: 'Aeronave 2', dados: ['Modelo: Airbus A320', 'Capacidade: 165', 'Status: Manutenção'] },
  { id: 3, nome: 'Aeronave 3', dados: ['Modelo: Embraer E195', 'Capacidade: 118', 'Status: Ativa'] },
];

function Aeronaves() {
  const [busca, setBusca] = useState('');
  const [selecionada, setSelecionada] = useState(mockAeronaves[0]);

  const aeronavesFiltradas = mockAeronaves.filter(a => 
    a.nome.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[var(--fundo)] text-slate-800 font-sans">

      <main className="max-w-6xl mx-auto p-6">
        
        <section className="flex flex-col md:flex-row items-center gap-8 mb-12">
          <div className="w-full md:w-1/2 aspect-video bg-slate-200 flex items-center justify-center rounded-md">
             <img src={aerFoto} alt="Boeing" className='rounded-md'/>
          </div>
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-5xl font-bold text-slate-800 mb-4">Aeronaves</h1>
            <p className="text-lg text-slate-600">Área dedicada à gestão e visualização das aeronaves da companhia. Selecione uma aeronave para ver os detalhes</p>
          </div>
        </section>

        <hr className="border-t-2 border-slate-200 mb-8" />

        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          <div className="lg:col-span-2 flex flex-col gap-6">
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-end border-b border-slate-400 w-full sm:w-1/2 gap-2 pb-1">
                <Search size={16} />
                <input type="text" placeholder="Buscar aeronave..." className="bg-transparent focus:outline-none w-full text-slate-700" value={busca} onChange={(e) => setBusca(e.target.value)} />
              </div>
              <button className="cursor-pointer bg-[var(--azul)] hover:hover:bg-indigo-600 text-white font-medium py-2 px-6 rounded transition-colors w-full sm:w-auto">Criar</button>
            </div>

            <div className="flex flex-col gap-3">
              {aeronavesFiltradas.map((aeronave) => (
                <button key={aeronave.id} onClick={() => setSelecionada(aeronave)} className={`flex items-center justify-between p-4 border rounded text-left transition-colors ${selecionada?.id === aeronave.id ? 'border-[var(--azul)] bg-indigo-50' : 'border-slate-300 hover:bg-slate-50'}`} >
                  <span className="text-lg text-slate-700">{aeronave.nome}</span>
                  <div className={`w-5 h-5 rounded-full border-2 ${selecionada?.id === aeronave.id ? 'border-[var(--azul)] bg-[var(--azul)]' : 'border-slate-400 bg-slate-200'}`}></div>
                </button>
              ))}
              {aeronavesFiltradas.length === 0 && (
                <p className="text-slate-500 text-center py-4">Nenhuma aeronave encontrada.</p>
              )}
            </div>
          </div>

          <aside className="lg:col-span-1">
            {selecionada ? (
              <div className="border border-slate-300 p-6 flex flex-col items-center h-full">
                <h2 className="text-xl text-slate-700 mb-6">{selecionada.nome}</h2>
                <div className="flex flex-col gap-3 w-full text-center text-slate-600 mb-8">
                  {selecionada.dados.map((dado, index) => (
                    <span key={index}>{dado}</span>
                  ))}
                </div>
                <div className="mt-auto w-full flex flex-col gap-3">
                  <button className="cursor-pointer w-full bg-[var(--azul)] hover:bg-indigo-600 text-white py-2 rounded transition-colors">Editar</button>
                  <button className="cursor-pointer w-full bg-[var(--azul)] hover:bg-indigo-600 text-white py-2 rounded transition-colors">Relatório</button>
                </div>
              </div>
            ) : (
              <div className="border border-slate-300 p-6 flex items-center justify-center bg-slate-50 h-full text-slate-400 text-center">
                Selecione uma aeronave para ver os detalhes
              </div>
            )}
          </aside>

        </section>
      </main>
    </div>
  );
}

export default Aeronaves