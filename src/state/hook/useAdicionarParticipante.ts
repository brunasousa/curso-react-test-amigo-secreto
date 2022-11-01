import { useRecoilValue, useSetRecoilState } from "recoil"
import { erroState, listaParticipanteState } from "../atom"
import { useMensagemDeErro } from "./useMensagemDeErro";

export const useAdicionarParticipante = () => {
    const setLista = useSetRecoilState(listaParticipanteState);
    const lista = useRecoilValue(listaParticipanteState);
    const setErro = useSetRecoilState(erroState);

    return (nomeDoParticipante: string) => {
        if (lista.includes(nomeDoParticipante)) {
            setErro('Nomes duplicados não são permitidos')
            setTimeout(() => {
                setErro("")
            }, 5000)
            return
        }

        return setLista(listaAtual => [...listaAtual, nomeDoParticipante])
    }
}       