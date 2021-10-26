import React, {useState} from "react"

export default function Votacao(){
    const [countFortaleza, setCountFortaleza] = useState(0);
    const [countQuixada, setCountQuixada] = useState(0);
    const [countLimoeiro, setCountLimoeiro] = useState(0);
    const [countJuazeiro, setCountJuazeiro] = useState(0);
    const [moreVoted, setMoreVoted] = useState([""]);
    const [moreNumberVotes, setMoreNumberVotes] = useState(0);
    const [lassVoted, setLassVoted] = useState([""]);
    const [lassNumberVotes, setLassNumberVotes] = useState();

    function lassCompare(cityList){
        let menor = cityList[0].count;

        for (let i = 0; i < cityList.length; i++) {
            for (let j = i+1; j < cityList.length; j++) {
                if (cityList[j].count < menor) {
                    menor = cityList[j].count;
                }
            }
        }
        
        for (let i = 0; i < cityList.length; i++) {
            if(cityList[i].count === menor ){
                setLassVoted([...lassVoted, cityList[i].name])
            }
        }
    }

    function compare(city){
        switch (city) {
            case "Fortaleza":
                setCountFortaleza(countFortaleza + 1);
                let localFortaleza = countFortaleza +1;

                if(localFortaleza===moreNumberVotes){
                    setMoreVoted([...moreVoted, ", Fortaleza"])
                }
                else if(localFortaleza>moreNumberVotes){
                    setMoreVoted(["Fortaleza"]);
                    setMoreNumberVotes(localFortaleza);
                }
                lassCompare([{name:"Fortaleza", count:localFortaleza}, {name:"Quixadá", count:countQuixada}, {name:"Limoeiro", count:countLimoeiro}, {name:"Juazeiro", count:countJuazeiro}])
                break;

            case "Quixadá":
                setCountQuixada(countQuixada + 1);
                let localQuixada = countQuixada +1;

                if(localQuixada===moreNumberVotes){
                    setMoreVoted([...moreVoted, ", Quixadá"])
                }
                else if(localQuixada>moreNumberVotes){
                    setMoreVoted(["Quixadá"]);
                    setMoreNumberVotes(localQuixada);
                }
                lassCompare([{name:"Fortaleza", count:countFortaleza}, {name:"Quixadá", count:localQuixada}, {name:"Limoeiro", count:countLimoeiro}, {name:"Juazeiro", count:countJuazeiro}])
                break;

            case "Limoeiro":
                setCountLimoeiro(countLimoeiro + 1);
                let localLimoeiro = countLimoeiro +1;

                if(localLimoeiro===moreNumberVotes){
                    setMoreVoted([...moreVoted, ", Limoeiro"])
                }
                else if(localLimoeiro>moreNumberVotes){
                    setMoreVoted(["Limoeiro"]);
                    setMoreNumberVotes(localLimoeiro);
                }
                lassCompare([{name:"Fortaleza", count:countFortaleza}, {name:"Quixadá", count:countQuixada}, {name:"Limoeiro", count:localLimoeiro}, {name:"Juazeiro", count:countJuazeiro}])
                break;

            case "Juazeiro":
                setCountJuazeiro(countJuazeiro + 1);
                let localJuazeiro = countJuazeiro +1;

                if(localJuazeiro===moreNumberVotes){
                    setMoreVoted([...moreVoted, ", Juazeiro"])
                }
                else if(localJuazeiro>moreNumberVotes){
                    setMoreVoted(["Juazeiro"]);
                    setMoreNumberVotes(localJuazeiro);
                }
                lassCompare([{name:"Fortaleza", count:countFortaleza}, {name:"Quixadá", count:countQuixada}, {name:"Limoeiro", count:countLimoeiro}, {name:"Juazeiro", count:localJuazeiro}])
                break;

            default:
                break;
        }
    }
    return (
        <div>
            <h1>VOTAÇÃO DE CIDADES</h1>
            <button onClick={() => compare("Fortaleza")} color='red'>Fortaleza</button>
            <button onClick={() => compare("Quixadá")} color='blue'>Quixadá</button>
            <button onClick={() => compare("Limoeiro")} color='green'>Limoeiro</button>
            <button onClick={() => compare("Juazeiro")} color='yellow'>Juazeiro</button>
            
            <p>Fortaleza: {countFortaleza}</p>
            <p>Quixada: {countQuixada}</p>
            <p>Limoeiro: {countLimoeiro}</p>
            <p>Juazeiro: {countJuazeiro}</p>

            <p>Cidades mais votadas:{moreVoted}</p>
            <p>Cidades menos votadas:{lassVoted}</p>
        </div>
    )
}