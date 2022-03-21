import "./App.css";

function App() {
  const mercearia = [
    {
      segunda: "Pão",
      terca: "Café",
      sabado: "Leite",
      ativo: true,
    },
    {
      segunda: "Presunto",
      terca: "Queijo",
      sabado: "Margarina",
      ativo: false,
    },
    {
      segunda: "Bolacha",
      terca: "Salame",
      sabado: "Paçoca",
      ativo: true,
    },
    {
      segunda: "Achocolatado",
      terca: "Farinha",
      sabado: "Pão de frios",
      ativo: false,
    },
  ];

  const hortifruit = [
    {
      segunda: "Laranja",
      terca: "Pêra",
      sabado: "Abacaxi",
    },
    {
      segunda: "Banana",
      terca: "Abacaxi",
      sabado: "Maçã",
    },
    {
      segunda: "Limão",
      terca: "Kiwi",
      sabado: "Morango",
    },
  ];

  const semanaDeOferta = mercearia.filter((ofertas) => {
    return ofertas.ativo === false;
  });

  const frutaPremiada = hortifruit.filter((fruta) => {
    return fruta.sabado === "Abacaxi" || fruta.terca === "Abacaxi"
  });

  return (
    <div className="App">
      <h1>Mercearia Viva Bem</h1>
      <h2>Promoção da 1ª e 2ª Semana</h2>
      <section className="promo">
        {semanaDeOferta.map((ofertas) => {
          return (
            <div className="container-promo">
              <p>
                Segunda: <span>{ofertas.segunda}</span>
              </p>
              <p>
                Terça: <span>{ofertas.terca}</span>
              </p>
              <p>
                Sabado: <span>{ofertas.sabado}</span>
              </p>
            </div>
          );
        })}
      </section>
      <h2>Fruta Premiada da 1ª e 2ª Semana</h2>
      <section className="promo">
        {frutaPremiada.map((fruta) => {
          return (
            <div className="container-promo">
              <p>
                Segunda: <span>{fruta.segunda}</span>
              </p>
              <p>
                Terça: <span>{fruta.terca}</span>
              </p>
              <p>
                Sabado: <span>{fruta.sabado}</span>
              </p>
            </div>
          );
        })}
      </section>
    </div>
  );
}

export default App;
