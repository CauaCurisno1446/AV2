import { useState } from 'react';
import { Search } from 'lucide-react';
import Modal from '../components/Modal';
import pecasFoto from "../assets/img/pecas.jpg"

const mockPecas = [
  { id: 1, nome: 'Peça 1', dados: ['Tipo: Importada', 'Fornecedor: Embraer', 'Status: Pronta'] },
  { id: 2, nome: 'Peça 2', dados: ['Tipo: Importada', 'Fornecedor: Akaer', 'Status: Em Andamento'] },
  { id: 3, nome: 'Peça 3', dados: ['Tipo: Nacional', 'Fornecedor: Boeing', 'Status: Cancelada'] },
];


function Pecas() {
  const [busca, setBusca] = useState('');
  const [selecionada, setSelecionada] = useState(mockPecas[0]);
  const [modalAberto, setModalAberto] = useState(false);

  const pecasFiltradas = mockPecas.filter(a => 
    a.nome.toLowerCase().includes(busca.toLowerCase())
  );

  const classeBtn = "cursor-pointer w-full bg-[var(--azul-escuro)] hover:hover:bg-[var(--azul)] text-white py-2 rounded transition-colors"
  const styleInput = "border border-slate-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[var(--azul)] focus:ring-2 focus:ring-[var(--azul-escuro)]/10 transition-all"

  return(
    <div className="min-h-screen bg-[var(--fundo)] text-slate-800 font-sans">

        {modalAberto && (
            <Modal titulo="Nova Peça" onClose={() => setModalAberto(false)}>
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-1">
                        <label className="text-sm font-medium text-slate-600">Nome</label>
                        <input type="text" placeholder="Ex: Peça 4" className={styleInput} />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label className="text-sm font-medium text-slate-600">Tipo</label>
                        <select className="border border-slate-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[var(--azul)] focus:ring-2 focus:ring-[var(--azul-escuro)]/10 transition-all bg-white">
                            <option value="">Selecione...</option>
                            <option>Nacional</option>
                            <option>Importada</option>
                        </select>
                    </div>

                    <div className="flex flex-col gap-1">
                        <label className="text-sm font-medium text-slate-600">Fornecedor</label>
                        <input type="text" placeholder="Ex: Embraer" className={styleInput} />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label className="text-sm font-medium text-slate-600">Status</label>
                        <select className="border border-slate-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[var(--azul)] focus:ring-2 focus:ring-[var(--azul-escuro)]/10 transition-all bg-white">
                            <option value="">Selecione...</option>
                            <option>Pronta</option>
                            <option>Em Andamento</option>
                            <option>Cancelada</option>
                        </select>
                    </div>
                </div>

                <div className="flex justify-end gap-3 pt-1">
                    <button onClick={() => setModalAberto(false)} className="px-4 py-2 text-sm text-slate-600 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer">Cancelar</button>
                    <button className="px-5 py-2 text-sm bg-[var(--azul-escuro)] hover:bg-[var(--azul)] text-white rounded-lg transition-colors cursor-pointer">Salvar</button>
                </div>
            </Modal>
        )}

        <main className="max-w-6xl mx-auto p-6">
            <section className="flex flex-col md:flex-row items-center gap-8 mb-12">
                <div className="w-full md:w-1/2 text-center md:text-left">
                    <h1 className="text-5xl font-bold text-slate-800 mb-4">Peças</h1>
                    <p className="text-lg text-slate-600">Área dedicada à gestão e visualização das peças usadas nas aeronaves. <span className='text-indigo-500'>Selecione uma peça para ver os detalhes.</span></p>
                </div>

                <div className="w-full md:w-1/2 aspect-video bg-slate-200 flex items-center justify-center rounded-md">
                    <img src={pecasFoto} alt="Boeing" className='rounded-md'/>
                </div>
            </section>

            <hr className="border-t-2 border-slate-200 mb-8" />

            <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 flex flex-col gap-6">
                    
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="flex items-end border-b border-slate-400 w-full sm:w-1/2 gap-2 pb-1">
                        <Search size={16} />
                        <input type="text" placeholder="Buscar peça..." className="bg-transparent focus:outline-none w-full text-slate-700" value={busca} onChange={(e) => setBusca(e.target.value)} />
                    </div>
                    <button className="cursor-pointer bg-[var(--azul-escuro)] hover:hover:bg-[var(--azul)] text-white font-medium py-2 px-6 rounded transition-colors w-full sm:w-auto" onClick={() => setModalAberto(true)}>Criar</button>
                    </div>

                    <div className="flex flex-col gap-3">
                    {pecasFiltradas.map((peca) => (
                        <button key={peca.id} onClick={() => setSelecionada(peca)} className={`flex items-center justify-between p-4 border rounded text-left transition-colors ${selecionada?.id === peca.id ? 'border-[var(--azul)] bg-indigo-50' : 'border-slate-300 hover:bg-slate-50'}`} >
                        <span className="text-lg text-slate-700">ID: {peca.id} - {peca.nome}</span>
                        <div className={`w-5 h-5 rounded-full border-2 ${selecionada?.id === peca.id ? 'border-[var(--azul-escuro)] bg-[var(--azul)]' : 'border-slate-400 bg-slate-200'}`}></div>
                        </button>
                    ))}
                    {pecasFiltradas.length === 0 && (
                        <p className="text-slate-500 text-center py-4">Nenhuma peça encontrada.</p>
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
                            <button className={classeBtn}>Editar</button>
                        </div>
                    </div>
                    ) : (
                    <div className="border border-slate-300 p-6 flex items-center justify-center bg-slate-50 h-full text-slate-400 text-center">
                        Selecione uma peça para ver os detalhes
                    </div>
                    )}
                </aside>
            </section>
        </main>
    </div>
  );
}

export default Pecas