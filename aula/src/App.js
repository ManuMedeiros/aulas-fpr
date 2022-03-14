import "./App.css";

function App() {
  const formulario = [
    {
      nome: "Henrique Silva",
      telefone: "(11) 95987-0654",
      idade: 16,
      nascimento: "14/09/2006",
      nomeMae: "Laura Silva",
      nomePai: "Alastor Silva",
    },
    {
      nome: "Carlos Santiago",
      telefone: "(11) 95987-0654",
      idade: 20,
      nascimento: "19/12/2002",
      nomeMae: "Elaine Santiago",
      nomePai: "",
    },
    {
      nome: "Eduardo Meira",
      telefone: "(11) 95469-0967",
      idade: 19,
      nascimento: "15/08/2003",
      nomeMae: "Alessandra Meira",
      nomePai: "Vagner Meira",
    },
    {
      nome: "Paulo Figueira",
      telefone: "(11) 93456-2734",
      idade: 22,
      nascimento: "03/04/2000",
      nomeMae: "Vivian Figueira",
      nomePai: "",
    },
    {
      nome: "Fabiano Oliveira",
      telefone: "(11) 96790-6432",
      idade: 17,
      nascimento: "14/09/2005",
      nomeMae: "Yelena Oliveira",
      nomePai: "Olivio Oliveira",
    },
  ];
  return (
    <div className="App">
      {formulario.map((item) => {
        return (
          <div className="box-form">
            <div className="box-info">
              <h2>Nome: {item.nome}</h2>
              <p><strong>Telefone:</strong> {item.telefone}</p>
              <p><strong>Idade:</strong> {item.idade }</p>
              <p><strong>Data de nascimento:</strong> {item.nascimento}</p>
              <p><strong>Nome da Mãe:</strong> {item.nomeMae}</p>
              {item.nomePai && <p><strong>Nome do Pai:</strong> {item.nomePai}</p>}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default App;