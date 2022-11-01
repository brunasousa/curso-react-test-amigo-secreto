import { useRef, useState } from "react";
import { useAdicionarParticipante } from "../state/hook/useAdicionarParticipante";
import { useMensagemDeErro } from "../state/hook/useMensagemDeErro";

export default function Formulario(){
    const [nome, setNome] = useState("");
    const inputRef = useRef<HTMLInputElement>(null);
    const adicionarNaLista = useAdicionarParticipante();
    const mensagemErro = useMensagemDeErro();

    function adicionarParticipante(evento: React.FormEvent<HTMLFormElement>) {
        evento.preventDefault();
        adicionarNaLista(nome);
        setNome('');
        inputRef.current?.focus();
        
    }

    return (
        <form onSubmit={ evento => adicionarParticipante(evento)}>
            <input 
                ref={inputRef}
                type="text" 
                placeholder="Insira o nome dos participantes" 
                value={nome}
                onChange={ evento => setNome(evento.target.value)}/>
            <button disabled={!nome}>Adicionar</button>
            { mensagemErro && <p role="alert">{mensagemErro}</p> }
        </form>
    );
}