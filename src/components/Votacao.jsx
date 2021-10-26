import React, {useState} from "react"

export default function Votacao(){
    const [countFortaleza, setCountFortaleza] = useState(0);
    const [countQuixada, setCountQuixada] = useState(0);
    const [countLimoeiro, setCountLimoeiro] = useState(0);
    const [countJuazeiro, setCountJuazeiro] = useState(0);
    const [moreVoted, setMoreVoted] = useState([""]);

    function comparar(){
        var localMoreVoted = {count:0, cityNames:[""]};
        
        if(countFortaleza>moreVoted.count){
            localMoreVoted.cityNames="Fortaleza";
            localMoreVoted.count=countFortaleza;

        }if(countQuixada>moreVoted.count){
            localMoreVoted.cityNames="Quixadá";
            localMoreVoted.count=countQuixada;
        }

        setMoreVoted(localMoreVoted.cityNames);
    }
    return (
        <div>
            <h1>VOTAÇÃO DE CIDADES</h1>
            <button onClick={() => setCountFortaleza(countFortaleza + 1), comparar()} color='red'>Fortaleza</button>
            <button onClick={() => setCountQuixada(countQuixada + 1), comparar()} color='blue'>Quixadá</button>
            <button onClick={() => setCountLimoeiro(countLimoeiro + 1), comparar()} color='green'>Limoeiro</button>
            <button onClick={() => setCountJuazeiro(countJuazeiro + 1), comparar()} color='yellow'>Juazeiro</button>
            <p>Fortaleza: {countFortaleza}</p>
            <p>Quixada: {countQuixada}</p>
            <p>Limoeiro: {countLimoeiro}</p>
            <p>Juazeiro: {countJuazeiro}</p>

            <p>Cidades mais votadas:{moreVoted}</p>
        </div>
    )
}