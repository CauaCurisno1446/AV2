import { useState } from 'react';
import { Search } from 'lucide-react';
import funcFoto from "../assets/img/funcionarios.jpg"
import Modal from '../components/Modal';

const mockFuncionarios = [
  { id: 1, nome: 'Cauã', dados: ['Telefone: 12 1234567890', 'Endereço: Rua das Flores', 'Usuário: caua@', 'Cargo: Administrador'] },
  { id: 2, nome: 'Davi', dados: ['Telefone: 12 0987654321', 'Endereço: Rua dos Carros', 'Usuário: davi@', 'Cargo: Engenheiro'] },
  { id: 3, nome: 'João', dados: ['Telefone: 12 1357908642', 'Endereço: Rua dos Animais', 'Usuário: joao@', 'Cargo: Operário'] },
];

function Funcionarios() {
  const [busca, setBusca] = useState('');
  const [selecionada, setSelecionada] = useState(mockFuncionarios[0]);
  const [modalCriar, setModalCriarAberto] = useState(false);
  const [modalEditar, setModalEditarAberto] = useState(false);

  const funcFiltrados = mockFuncionarios.filter(a => 
    a.nome.toLowerCase().includes(busca.toLowerCase())
  );

  const classeBtn = "cursor-pointer w-full bg-[var(--azul-escuro)] hover:hover:bg-[var(--azul)] text-white py-2 rounded transition-colors"
  const styleInput = "border border-slate-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[var(--azul)] focus:ring-2 focus:ring-[var(--azul-escuro)]/10 transition-all"

  return (
    <div className="min-h-screen bg-[var(--fundo)] text-slate-800 font-sans">

      {modalCriar && (
            <Modal titulo="Novo Funcionário" onClose={() => setModalCriarAberto(false)}>
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-1">
                        <label className="text-sm font-medium text-slate-600">Nome</label>
                        <input type="text" placeholder="Ex: Kauan" className={styleInput} />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label className="text-sm font-medium text-slate-600">Telefone</label>
                        <input type="text" placeholder="Ex: (11) 111111111" className={styleInput} />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label className="text-sm font-medium text-slate-600">Endereço</label>
                        <input type="text" placeholder="Ex: Rua dos Astronautas" className={styleInput} />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label className="text-sm font-medium text-slate-600">Cargo</label>
                        <select className="border border-slate-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[var(--azul)] focus:ring-2 focus:ring-[var(--azul-escuro)]/10 transition-all bg-white">
                            <option value="">Selecione...</option>
                            <option>Administrador</option>
                            <option>Engenheiro</option>
                            <option>Operador</option>
                        </select>
                    </div>
                </div>

                <div className="flex justify-end gap-3 pt-1">
                    <button onClick={() => setModalCriarAberto(false)} className="px-4 py-2 text-sm text-slate-600 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer">Cancelar</button>
                    <button className="px-5 py-2 text-sm bg-[var(--azul-escuro)] hover:bg-[var(--azul)] text-white rounded-lg transition-colors cursor-pointer">Salvar</button>
                </div>
            </Modal>
        )}

        {modalEditar && (
            <Modal titulo="Editar Etapa" onClose={() => setModalEditarAberto(false)}>
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-1">
                        <label className="text-sm font-medium text-slate-600">Nome</label>
                        <input type="text" placeholder="Ex: Etapa X" className={styleInput} />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label className="text-sm font-medium text-slate-600">Prazo</label>
                        <input type="text" placeholder="Ex: 08/05/2026" className={styleInput} />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label className="text-sm font-medium text-slate-600">Status</label>
                        <select className="border border-slate-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[var(--azul)] focus:ring-2 focus:ring-[var(--azul-escuro)]/10 transition-all bg-white">
                            <option value="">Selecione...</option>
                            <option>Concluída</option>
                            <option>Cancelada</option>
                        </select>
                    </div>

                    <div className="flex flex-col gap-1">
                        <label className="text-sm font-medium text-slate-600">Funcionários</label>
                        {/* <select className="border border-slate-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[var(--azul)] focus:ring-2 focus:ring-[var(--azul-escuro)]/10 transition-all bg-white">
                            <option value="">Selecione...</option>
                            <option>Pronta</option>
                            <option>Em Trânsito</option>
                            <option>Cancelada</option>
                        </select> */}
                    </div>
                </div>

                <div className="flex justify-end gap-3 pt-1">
                    <button onClick={() => setModalEditarAberto(false)} className="px-4 py-2 text-sm text-slate-600 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer">Cancelar</button>
                    <button className="px-5 py-2 text-sm bg-[var(--azul-escuro)] hover:bg-[var(--azul)] text-white rounded-lg transition-colors cursor-pointer">Salvar</button>
                </div>
            </Modal>
        )}

      <main className="max-w-6xl mx-auto p-6">
        
        <section className="flex flex-col md:flex-row items-center gap-8 mb-12">
          <div className="w-full md:w-1/2 aspect-video bg-slate-200 flex items-center justify-center rounded-md">
             <img src={funcFoto} alt="Boeing" className='rounded-md'/>
          </div>
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-5xl font-bold text-slate-800 mb-4">Funcionários</h1>
            <p className="text-lg text-slate-600">Área dedicada à gestão e visualização dos funcionários da companhia. <span className='text-indigo-500'>Selecione um(a) funcionário(a) para ver os detalhes.</span></p>
          </div>
        </section>

        <hr className="border-t-2 border-slate-200 mb-8" />

        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          <div className="lg:col-span-2 flex flex-col gap-6">
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-end border-b border-slate-400 w-full sm:w-1/2 gap-2 pb-1">
                <Search size={16} />
                <input type="text" placeholder="Buscar funcionário..." className="bg-transparent focus:outline-none w-full text-slate-700" value={busca} onChange={(e) => setBusca(e.target.value)} />
              </div>
              <button className="cursor-pointer bg-[var(--azul-escuro)] hover:hover:bg-[var(--azul)] text-white font-medium py-2 px-6 rounded transition-colors w-full sm:w-auto" onClick={() => setModalCriarAberto(true)}>Criar</button>
            </div>

            <div className="flex flex-col gap-3">
              {funcFiltrados.map((func) => (
                <button key={func.id} onClick={() => setSelecionada(func)} className={`flex items-center justify-between p-4 border rounded text-left transition-colors ${selecionada?.id === func.id ? 'border-[var(--azul)] bg-indigo-50' : 'border-slate-300 hover:bg-slate-50'}`} >
                  <span className="text-lg text-slate-700">{func.nome}</span>
                  <div className={`w-5 h-5 rounded-full border-2 ${selecionada?.id === func.id ? 'border-[var(--azul-escuro)] bg-[var(--azul)]' : 'border-slate-400 bg-slate-200'}`}></div>
                </button>
              ))}
              {funcFiltrados.length === 0 && (
                <p className="text-slate-500 text-center py-4">Nenhum funcionário encontrada.</p>
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
                  <button className={classeBtn} onClick={() => setModalEditarAberto(true)}>Editar</button>
                </div>
              </div>
            ) : (
              <div className="border border-slate-300 p-6 flex items-center justify-center bg-slate-50 h-full text-slate-400 text-center">
                Selecione um funcionario para ver os detalhes
              </div>
            )}
          </aside>

        </section>
      </main>
    </div>
  );
}

export default Funcionarios