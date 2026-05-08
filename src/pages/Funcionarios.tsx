import { useState } from 'react';
import { Search, SquarePen, Trash2, MousePointerClick } from 'lucide-react';
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
              <label className="text-sm font-medium text-slate-600">Usuário</label>
              <input type="text" placeholder="Ex: Usuario1@" className={styleInput} />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-slate-600">Senha</label>
              <input type="password" placeholder="Insira a senha" className={styleInput} />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-slate-600">Repita a senha</label>
              <input type="password" placeholder="Insira a senha" className={styleInput} />
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
        <Modal titulo="Editar Funcionário" onClose={() => setModalEditarAberto(false)}>
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
            <button onClick={() => setModalEditarAberto(false)} className="px-4 py-2 text-sm text-slate-600 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer">Cancelar</button>
            <button className="px-5 py-2 text-sm bg-[var(--azul-escuro)] hover:bg-[var(--azul)] text-white rounded-lg transition-colors cursor-pointer">Salvar</button>
          </div>
        </Modal>
      )}

      <main className="max-w-6xl mx-auto p-6">

        <section className="flex flex-col md:flex-row items-center gap-8 mb-12">
          <div className="w-full md:w-1/2 aspect-video bg-slate-200 flex items-center justify-center rounded-md">
            <img src={funcFoto} alt="Funcionários" className='rounded-md' />
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
              <button className="cursor-pointer bg-[var(--azul-escuro)] hover:bg-[var(--azul)] text-white font-medium py-2 px-6 rounded-[10px] transition-colors w-full sm:w-auto" onClick={() => setModalCriarAberto(true)}>Criar</button>
            </div>

            <div className="flex flex-col gap-3 p-2 rounded-[10px] bg-[var(--cinza)] max-h-[450px] overflow-y-auto custom-scrollbar">
              {funcFiltrados.map((func) => (
                <button key={func.id} onClick={() => setSelecionada(func)} className={`shrink-0 flex items-center justify-between p-4 border rounded-[15px] text-left transition-colors bg-white ${selecionada?.id === func.id ? 'border-[var(--azul)] bg-indigo-50' : 'border-slate-300 hover:bg-slate-50'}`}>
                  <span className="text-lg text-slate-700">{func.nome}</span>
                  <div className={`w-5 h-5 rounded-full border-2 ${selecionada?.id === func.id ? 'border-[var(--azul-escuro)] bg-[var(--azul)]' : 'border-slate-400 bg-slate-200'}`} />
                </button>
              ))}

              {funcFiltrados.length === 0 && (
                <p className="text-slate-500 text-center py-4">Nenhum funcionário encontrado.</p>
              )}
            </div>
          </div>

          <aside className="lg:col-span-1 h-full">
            {selecionada ? (
              <div className="flex flex-col h-full bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-sm">

                <div className="pb-5 border-b border-slate-100">
                  <h2 className="text-2xl font-bold text-slate-800 tracking-tight leading-none">{selecionada.nome}</h2>
                  <p className="text-sm font-medium text-slate-500 mt-2">Detalhes do registro</p>
                </div>

                <div className="py-6 flex-1 flex flex-col gap-4">
                  {selecionada.dados.map((dado, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="mt-2 w-1.5 h-1.5 rounded-full bg-slate-300 shrink-0"></div>
                      <span className="text-base text-slate-700 leading-relaxed">{dado}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 flex items-center gap-3 mt-auto">
                  <button onClick={() => setModalEditarAberto(true)} className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-[var(--azul-escuro)] border border-slate-300 text-white rounded-lg hover:bg-[var(--azul)] hover:border-slate-400 transition-all text-sm font-semibold cursor-pointer shadow-sm">
                    <SquarePen size={18} strokeWidth={2.5} />
                    Editar
                  </button>

                  <button className="flex items-center justify-center w-11 h-11 text-slate-400 bg-transparent hover:bg-red-50 hover:text-red-600 rounded-lg transition-colors cursor-pointer shrink-0">
                    <Trash2 size={18} strokeWidth={2.5} />
                  </button>
                </div>

              </div>
            ) : (
              <div className="h-full min-h-[300px] flex flex-col items-center justify-center text-center p-6 bg-transparent border border-transparent">
                <MousePointerClick className="text-slate-300 mb-4" size={32} strokeWidth={1.5} />
                <p className="text-base font-semibold text-slate-600 mb-1">Nenhum item selecionado</p>
                <p className="text-sm text-slate-500">Selecione um funcionário na lista para visualizar os detalhes aqui.</p>
              </div>
            )}
          </aside>

        </section>
      </main>
    </div>
  );
}

export default Funcionarios