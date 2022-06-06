import React, { useEffect, useState } from "react";
import axios from "axios";
import Input from "../../Components/Input";
import "./style.css";

const Home = () => {
  const [listPokemon, setListPokemon] = useState();
  const [name, setName] = useState();
  const [number, setNumber] = useState();
  const [type, setType] = useState();
  const [newName, setNewName] = useState();

  useEffect(() => {
    axios
      .get("https://aulas-fpr-default-rtdb.firebaseio.com/pokemon.json")
      .then((response) => {
        setListPokemon(response?.data);
      });
  }, []);

  const handlePost = () => {
    axios.post("https://aulas-fpr-default-rtdb.firebaseio.com/pokemon/firstEvolution.json", {
      name: name,
      numer: number,
      type: type,
    })
      .then(() => {
        alert("pokemon add")
      }).catch(() => {
        alert("nao foi possivel")
      })
  }

  const handleDelete = (id) => {
    axios.delete(`https://aulas-fpr-default-rtdb.firebaseio.com/pokemon/firstEvolution/${id}.json`, {})
      .then(() => {
        alert("pokemon deletado")
      }).catch(() => {
        alert("nao foi possivel")
      })
  }

  const handlePatch = (id) => {
    axios.patch(`https://aulas-fpr-default-rtdb.firebaseio.com/pokemon/firstEvolution/${id}.json`, {
      name: newName,
    })
      .then(() => {
        alert("pokemon editado")
      }).catch(() => {
        alert("nao foi possivel")
      })
  }


  return (
    <div className="container-home">
      <h2>Lista de Pokemons</h2>
      {listPokemon && Object.entries(listPokemon?.firstEvolution)?.map(pokemon => {
        return (
          <>
            <div className="card-pokemon">
              <p>Nome: {pokemon[1]?.name}</p>
              <div className="edit">
                <Input text={'Novo nome'} onChange={(e) => setNewName(e.target.value)} />
              </div>
              <p>Numero: {pokemon[1]?.numer}</p>
              <p>Tipo: {pokemon[1]?.type}</p>
            </div>
            <button onClick={() => handlePatch(pokemon[0])}>Editar Nome</button>
            <button onClick={() => handleDelete(pokemon[0])}>deletar</button>
          </>
        )

      })}
      <h2>Adicionar Pokemon</h2>
      <form>
        <Input
          text="name"
          onChange={(e) => setName(e.target.value)} />
        <Input
          text="number"
          onChange={(e) => setNumber(e.target.value)} />
        <Input
          text="type"
          onChange={(e) => setType(e.target.value)} />
        <button onClick={handlePost}>Adicionar</button>
      </form>
    </div >
  );
};

export default Home;
