import { useState } from "react";
import { useListaParticipantes } from "../state/hook/useListaParticipantes";
import { useResultadoSorteio } from "../state/hook/useResultadoSorteio";

export default function Sorteio() {
    const participantes = useListaParticipantes();
    const [participanteDaVez, setParticipanteDaVez] = useState('');
    const [amigoSecreto, setAmigoSecreto] = useState<string | undefined>('');
    const resultado = useResultadoSorteio();


    function sortear(evento: React.FormEvent<HTMLFormElement>) {
        evento.preventDefault();
        
        if (resultado.has(participanteDaVez)) {
            setAmigoSecreto(resultado.get(participanteDaVez));
        }
    }
    return(
        <section>
            <form onSubmit={sortear}>
                <select required 
                    name="participanteDaVez" 
                    id="participanteDaVez" 
                    placeholder="Selecione o seu nome"
                    value={participanteDaVez}
                    onChange={(evento) => setParticipanteDaVez(evento.target.value)}>
                        <option>Selecione o seu nome</option>)
                        {participantes.map(participante => <option key={participante}>{participante}</option>)}
                </select>
                <button>Sortear</button>
            </form>
            {amigoSecreto && <p role='alert'> {amigoSecreto} </p>} 
        </section>
    );
}