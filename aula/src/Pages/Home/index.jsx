import React, { useState } from "react";
import Links from "../../Components/Links";
import Input from "../../Components/Input"

const Home = () => {

    const [teste, setTeste] = useState();
    const [teste2, setTeste2] = useState();
    const [teste3, setTeste3] = useState();
    const [teste4, setTeste4] = useState();

    const click = () => {
        window.location.href = `/Animes?loja=${teste}&fundo=${teste2}&comodo=${teste3}&forncedor=${teste4}`
    }
    return (
        <>
            <form onSubmit={click}>
                <select onChange={(e) => setTeste(e.target.value)}>
                    <option value={'loja...'}>Escolha uma loja</option>
                    <option value={'riachuelo'}>Riachuelo</option>
                    <option value={'americanas'}>Americanas</option>
                    <option value={'magazine'}>Magazine Luiza</option>
                </select>
                <select onChange={(e) => setTeste2(e.target.value)}>
                    <option value={'fundo...'}>Escolha uma cor</option>
                    <option value={'azul'}>Azul</option>
                    <option value={'amarelo'}>Amarelo</option>
                    <option value={'vermelho'}>Vermelho</option>
                </select>
                <select onChange={(e) => setTeste3(e.target.value)}>
                    <option value={'comodo...'}>Escolha um comodo</option>
                    <option value={'quarto'}>Quarto</option>
                    <option value={'cozinha'}>Cozinha</option>
                    <option value={'sala'}>Sala</option>
                </select>
                <select onChange={(e) => setTeste4(e.target.value)}>
                    <option value={'fornecedor...'}>Escolha um fornecedor</option>
                    <option value={'madeira'}>madeira madeira</option>
                    <option value={'philco'}>Philco</option>
                    <option value={'bonato'}>Bonato</option>
                </select>
            </form>
            <button onClick={click}>Buscar</button>
        </>
    )
}

export default Home;