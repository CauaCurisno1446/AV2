import Modal from "./Modal"
import 

export default function ModalAer(){
    const [modalCriar, setModalCriarAberto] = useState(false);
    const [modalEditar, setModalEditarAberto] = useState(false);

    return(
        <>
        {modalCriar && (
            <Modal titulo="Nova Aeronave" onClose={() => setModalCriarAberto(false)}>
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-1">
                        <label className="text-sm font-medium text-slate-600">Modelo</label>
                        <input type="text" placeholder="Ex: Aeronave 123" className={styleInput} />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label className="text-sm font-medium text-slate-600">Tipo</label>
                        <select className="border border-slate-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[var(--azul)] focus:ring-2 focus:ring-[var(--azul-escuro)]/10 transition-all bg-white">
                            <option value="">Selecione...</option>
                            <option>Comercial</option>
                            <option>Militar</option>
                        </select>
                    </div>

                    <div className="flex flex-col gap-1">
                        <label className="text-sm font-medium text-slate-600">Capacidade</label>
                        <input type="text" placeholder="Ex: 300" className={styleInput} />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label className="text-sm font-medium text-slate-600">Alcance</label>
                        <input type="text" placeholder="Ex: 1089" className={styleInput} />
                    </div>
                </div>

                <div className="flex justify-end gap-3 pt-1">
                    <button onClick={() => setModalCriarAberto(false)} className="px-4 py-2 text-sm text-slate-600 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer">Cancelar</button>
                    <button className="px-5 py-2 text-sm bg-[var(--azul-escuro)] hover:bg-[var(--azul)] text-white rounded-lg transition-colors cursor-pointer">Salvar</button>
                </div>
            </Modal>
        )}

        {modalEditar && (
            <Modal titulo="Editar Aeronave" onClose={() => setModalEditarAberto(false)}>
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-1">
                        <label className="text-sm font-medium text-slate-600">Modelo</label>
                        <input type="text" placeholder="Ex: Aeronave 123" className={styleInput} />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label className="text-sm font-medium text-slate-600">Tipo</label>
                        <select className="border border-slate-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[var(--azul)] focus:ring-2 focus:ring-[var(--azul-escuro)]/10 transition-all bg-white">
                            <option value="">Selecione...</option>
                            <option>Comercial</option>
                            <option>Militar</option>
                        </select>
                    </div>

                    <div className="flex flex-col gap-1">
                        <label className="text-sm font-medium text-slate-600">Capacidade</label>
                        <input type="text" placeholder="Ex: 300" className={styleInput} />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label className="text-sm font-medium text-slate-600">Alcance</label>
                        <input type="text" placeholder="Ex: 1089" className={styleInput} />
                    </div>
                </div>

                <div className="flex justify-end gap-3 pt-1">
                    <button onClick={() => setModalEditarAberto(false)} className="px-4 py-2 text-sm text-slate-600 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer">Cancelar</button>
                    <button className="px-5 py-2 text-sm bg-[var(--azul-escuro)] hover:bg-[var(--azul)] text-white rounded-lg transition-colors cursor-pointer">Salvar</button>
                </div>
            </Modal>
        )}
    </>
    )
}