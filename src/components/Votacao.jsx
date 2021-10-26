import React, {useState} from "react"

export default function Votacao(){
    const [countFortaleza, setCountFortaleza] = useState(0);
    const [countQuixada, setCountQuixada] = useState(0);
    const [countLimoeiro, setCountLimoeiro] = useState(0);
    const [countJuazeiro, setCountJuazeiro] = useState(0);
    return (
        <div>
            <h1>VOTAÇÃO DE CIDADES</h1>
            <button onClick={() => setCountFortaleza(countFortaleza + 1)} color='red'>Fortaleza</button>
            <button onClick={() => setCountQuixada(countQuixada + 1)} color='blue'>Quixadá</button>
            <button onClick={() => setCountLimoeiro(countLimoeiro + 1)} color='green'>Limoeiro</button>
            <button onClick={() => setCountJuazeiro(countJuazeiro + 1)} color='yellow'>Juazeiro</button>
            <p>Fortaleza:{countFortaleza}</p>
            <p>Quixada:{countQuixada}</p>
            <p>Limoeiro:{countLimoeiro}</p>
            <p>Juazeiro:{countJuazeiro}</p>
        </div>
    )
}