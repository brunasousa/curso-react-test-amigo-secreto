import { useNavigate } from "react-router-dom";
import { useListaParticipantes } from "../state/hook/useListaParticipantes"
import { useSorteador } from "../state/hook/useSorteador";

export default function Rodape() {
    const participantes = useListaParticipantes();
    const navegarPara = useNavigate();
    const sortear = useSorteador()

    function iniciar() {
        sortear();
        navegarPara('/sorteio')
    }

    return(
        <button disabled={participantes.length < 3}
            onClick = {iniciar}>
            Iniciar Brincadeira
        </button>)
}