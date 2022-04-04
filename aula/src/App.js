import "./App.css";
import Card from "./Components/Card";
import Links from "./Components/Links";
import { textCard } from "./text";

// um mock de um obj com duas strings, um boolean e uma lista, dentro da lista
// 3 objs com duas strings e 1 boolena(2 falses e 1 true)

// criar 1 componente e renderizar 3 vezes
// com a resposta dos 3 objetos da lista sendo passado por props individualmente

// quando boolean false for passado nao exibe nada, e quando for true exibe o conteudo

function App() {
  return (
    <div className="App">
      <div>
        {textCard.map((profetas) => {
          return (
            <>
              <h1>{profetas.biblia}</h1>
              <h2>{profetas.velhoTestamentp}</h2>
              {profetas.lista.map((item) => {
                return (
                  <Card
                    title={item.profeta}
                    text={item.grandeObra}
                    anuncio={item.anunciouCristo} />
                )
              })}
            </>
          );
        })}
      </div>
    </div>
  );
}

export default App;
