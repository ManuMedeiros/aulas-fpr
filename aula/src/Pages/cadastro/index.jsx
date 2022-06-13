import React, { useEffect, useState } from "react";
import axios from "axios";
import "./styles.css"
import Input from "../../Components/Input";
import Links from "../../Components/Links";

const Cadastro = () => {

    const [nerdFlix, setNerdFlix] = useState();
    const [title, setTitle] = useState();
    const [genero, setGenero] = useState();
    const [img, setImg] = useState();
    const [tipo, setTipo] = useState();
    const [mapeamento, setMapeamento] = useState();
    const [newTitle, setNewTitle] = useState();
    const [newImg, setNewImg] = useState();
    const [newGenero, setNewGenero] = useState();

    useEffect(() => {
        axios
            .get("https://filmes-series-3f5bb-default-rtdb.firebaseio.com/nerdFlix.json")
            .then((response) => {
                console.log(response.data)
                setNerdFlix(response?.data);
            });
    }, [mapeamento])

    const handleCadastroFilme = (e) => {
        e.preventDefault()
        axios.post("https://filmes-series-3f5bb-default-rtdb.firebaseio.com/nerdFlix/filmes.json", {
            title: title,
            genero: genero,
            tipo: tipo,
            img: img,
        })
            .then(function () {
                alert("Filme cadatrado")
                setMapeamento(!mapeamento)
            }).catch(function () {
                alert("Nao foi possivel cadastrar")
            })
    }

    const handleCadastroSerie = (e) => {
        e.preventDefault()
        axios.post("https://filmes-series-3f5bb-default-rtdb.firebaseio.com/nerdFlix/series.json", {
            title: title,
            genero: genero,
            tipo: tipo,
            img: img,
        })
            .then(function () {
                alert("Serie cadatrado")
                setMapeamento(!mapeamento)
            }).catch(function () {
                alert("Nao foi possivel cadastrar")
            })
    }

    const handleEdit = (e, id) => {
        e.preventDefault()
        axios.patch(`https://filmes-series-3f5bb-default-rtdb.firebaseio.com/nerdFlix/filmes/${id}.json`, {
            title: newTitle,
            genero: newGenero,
            img: newImg,
        }).then(function () {
            alert("editado")
            setMapeamento(!mapeamento)
        }).catch(function () {
            alert("nao editado")
        })
    }

    const handleDelete = (e, id) => {
        e.preventDefault()
        axios.delete(`https://filmes-series-3f5bb-default-rtdb.firebaseio.com/nerdFlix/filmes/${id}.json`, {})
            .then(function () {
                alert("Deletado")
                setMapeamento(!mapeamento)
            }).catch(function () {
                alert("nao deletado")
            })
    }

    const handleEditSerie = (e, id) => {
        e.preventDefault()
        axios.patch(`https://filmes-series-3f5bb-default-rtdb.firebaseio.com/nerdFlix/series/${id}.json`, {
            title: newTitle,
            genero: newGenero,
            img: newImg,
        }).then(function () {
            alert("editado")
            setMapeamento(!mapeamento)
        }).catch(function () {
            alert("nao editado")
        })
    }

    const handleDeleteSeries = (e, id) => {
        e.preventDefault()
        axios.delete(`https://filmes-series-3f5bb-default-rtdb.firebaseio.com/nerdFlix/series/${id}.json`, {})
            .then(function () {
                alert("Deletado")
                setMapeamento(!mapeamento)
            }).catch(function () {
                alert("nao deletado")
            })
    }

    return (
        <>
            <div>
                <Links link={'/'} text="Home"/>
                <h2>Cadastro de filmes ou Series</h2>
                <div>
                    <form>
                        <Input
                            text={'Titulo'}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        <Input
                            text={'Genero'}
                            onChange={(e) => setGenero(e.target.value)}
                        />
                        <Input
                            text={'Imagem'}
                            onChange={(e) => setImg(e.target.value)}
                        />
                        <select onChange={(e) => setTipo(e.target.value)}>
                            <option>Selecione...</option>
                            <option>Filmes</option>
                            <option>Serie</option>
                        </select>
                        <button onClick={(e) => { handleCadastroFilme(e) }}>Cadastrar Filme</button>
                        <button onClick={(e) => { handleCadastroSerie(e) }}>Cadastrar Serie</button>
                    </form>
                </div>
                <div className="campos">
                    <div className="edicao">
                        <h2>Editar Filmes</h2>
                        {nerdFlix && Object.entries(nerdFlix.filmes).map((items) => (
                            <>
                                <div className="conatiner-edit">
                                    <div >
                                        <p>{items[1].title}</p>
                                        <input onChange={(e) => setNewTitle(e.target.value)} placeholder="Nome do filme" />
                                        <button onClick={(e) => { handleEdit(e, items[0]) }}>Alterar</button>
                                    </div>
                                    <div>
                                        <p>{items[1].genero}</p>
                                        <input onChange={(e) => setNewGenero(e.target.value)} placeholder="Genero" />
                                        <button onClick={(e) => { handleEdit(e, items[0]) }}>Alterar</button>
                                    </div>
                                    <div>
                                        <p>{items[1].img}</p>
                                        <input onChange={(e) => setNewImg(e.target.value)} placeholder="Nova Imagem em URL" />
                                        <button onClick={(e) => { handleEdit(e, items[0]) }}>Alterar</button>
                                    </div>
                                    <button onClick={(e) => { handleEdit(e, items[0]) }}>Alterar Tudo</button>
                                    <button onClick={(e) => { handleDelete(e, items[0]) }}>Deletar</button>
                                </div>
                            </>
                        ))}
                    </div>
                    <div className="edicao">
                        <h2>Editar Seires</h2>
                        {nerdFlix && Object.entries(nerdFlix.series).map((items) => (
                            <>
                                <div className="conatiner-edit">
                                    <div>
                                        <p>{items[1].title}</p>
                                        <input onChange={(e) => setNewTitle(e.target.value)} placeholder="Nome da series" />
                                        <button onClick={(e) => { handleEditSerie(e, items[0]) }}>Alterar</button>
                                    </div>
                                    <div>
                                        <p>{items[1].genero}</p>
                                        <input onChange={(e) => setNewGenero(e.target.value)} placeholder="Genero" />
                                        <button onClick={(e) => { handleEditSerie(e, items[0]) }}>Alterar</button>
                                    </div>
                                    <div>
                                        <p>{items[1].img}</p>
                                        <input onChange={(e) => setNewImg(e.target.value)} placeholder="Nova Imagem em URL" />
                                        <button onClick={(e) => { handleEditSerie(e, items[0]) }}>Alterar</button>
                                    </div>
                                    <button onClick={(e) => { handleDeleteSeries(e, items[0]) }}>Deletar</button>
                                </div>
                            </>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cadastro;