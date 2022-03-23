import "./App.css";

function App() {
  const clubes = [
    {
      pais: "USA",
      estado: "Los Angeles",
      melhorJogador: "LeBron James",
      clubeEsporte: [
        {
          clube: "Los Angeles FC",
          esporte: "Futebol",
        },
        {
          clube: "Los Angeles Lakers",
          esporte: "Basquete",
        },
      ],
    },
    {
      pais: "Brasil",
      estado: "Rio de Janeiro",
      melhorJogador: "Gabigol",
      clubeEsporte: [
        {
          clube: "Flamengo FC",
          esporte: "Futebol",
        },
        {
          clube: "Flamengo",
          esporte: "Basquete",
        },
      ],
    },
  ];

  return (
    <div className="App">
      <section>
        <h1>Melhores Países</h1>
        {clubes.map((locais) => {
          const filter = locais.clubeEsporte.filter((melhor) => {
            return melhor.esporte !== "Futebol";
          });
          return (
            <div className="container">
              <h2>País: {locais.pais}</h2>
              <h2>Estado: {locais.estado}</h2>
              <h2>Melhor Jogadro: {locais.melhorJogador}</h2>
              {filter.map((melhores) => {
                return (
                  <>
                    <h2>Melhor Clube: {melhores.clube}</h2>
                    <h2>Melhor Esporte: {melhores.esporte}</h2>
                  </>
                );
              })}
            </div>
          );
        })}
      </section>
    </div>
  );
}

export default App;
