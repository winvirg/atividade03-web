import React, {useState} from "react"

export default function Votacao(){
    const [countFortaleza, setCountFortaleza] = useState(0);
    const [countQuixada, setCountQuixada] = useState(0);
    const [countLimoeiro, setCountLimoeiro] = useState(0);
    const [countJuazeiro, setCountJuazeiro] = useState(0);
    const [moreVoted, setMoreVoted] = useState([""]);
    const [moreNumberVotes, setMoreNumberVotes] = useState(0);

    function comparar(city){
        switch (city) {
            case "Fortaleza":
                setCountFortaleza(countFortaleza + 1);
                let localFortaleza = countFortaleza +1;

                if(localFortaleza===moreNumberVotes){
                    setMoreVoted([...moreVoted, "Fortaleza"])
                }
                else if(localFortaleza>moreNumberVotes){
                    setMoreVoted(["Fortaleza"]);
                    setMoreNumberVotes(localFortaleza);
                }
                break;

            case "Quixadá":
                setCountQuixada(countQuixada + 1);
                let localQuixada = countQuixada +1;

                if(localQuixada===moreNumberVotes){
                    setMoreVoted([...moreVoted, "Quixadá"])
                }
                else if(localQuixada>moreNumberVotes){
                    setMoreVoted(["Quixadá"]);
                    setMoreNumberVotes(localQuixada);
                }
                break;

            default:
                break;
        }
    }
    return (
        <div>
            <h1>VOTAÇÃO DE CIDADES</h1>
            <button onClick={() => comparar("Fortaleza")} color='red'>Fortaleza</button>
            <button onClick={() => comparar("Quixadá")} color='blue'>Quixadá</button>
            <button onClick={() => setCountLimoeiro(countLimoeiro + 1)} color='green'>Limoeiro</button>
            <button onClick={() => setCountJuazeiro(countJuazeiro + 1)} color='yellow'>Juazeiro</button>
            
            <p>Fortaleza: {countFortaleza}</p>
            <p>Quixada: {countQuixada}</p>
            <p>Limoeiro: {countLimoeiro}</p>
            <p>Juazeiro: {countJuazeiro}</p>

            <p>Cidades mais votadas:{moreVoted}</p>
        {console.log("out -> \n", {fortalez:countFortaleza, qixada:countQuixada, maior:moreNumberVotes, citys:moreVoted})}
        </div>
    )
}