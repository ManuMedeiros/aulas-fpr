import "./App.css";

function App() {
  const Formulario = [
    {
      nome: "Henrique Silva",
      idade: 16,
      nascimento: "14/09/2006",
      nome_da_mae: "Laura Silva",
      nome_do_pai: "Alastor Silva",
    },
    {
      nome: "Carlos Santiago",
      idade: 20,
      nascimento: "19/12/2002",
      nome_da_mae: "Elaine Santiago",
      nome_do_pai: "",
    },
    {
      nome: "Eduardo Meira",
      idade: 19,
      nascimento: "15/08/2003",
      nome_da_mae: "Alessandra Meira",
      nome_do_pai: "Vagner Meira",
    },
    {
      nome: "Paulo Figueira",
      idade: 22,
      nascimento: "03/04/2000",
      nome_da_mae: "Vivian Figueira",
      nome_do_pai: "",
    },
    {
      nome: "Fabiano Oliveira",
      idade: 17,
      nascimento: "14/09/2005",
      nome_da_mae: "Yelena Oliveira",
      nome_do_pai: "Olivio Oliveira",
    },
  ];
  return (
    <div className="App">
      {Formulario.map((item) => {
        return (
          <div className="box-form">
            <div className="box-info">
              <h2>Nome: {item.nome}</h2>
              <p><strong>Idade:</strong> {item.idade }</p>
              <p><strong>Data de nascimento:</strong> {item.nascimento}</p>
              <p><strong>Nome da Mãe:</strong> {item.nome_da_mae}</p>
              {item.nome_do_pai && <p><strong>Nome do Pai:</strong> {item.nome_do_pai}</p>}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
