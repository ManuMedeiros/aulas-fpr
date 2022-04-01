import "./App.css";
import Card from "./Components/Card";
import Links from "./Components/Links";
import { textCard } from "./text";

function App() {

  return (
    <div className="App">
      <div>
        <Card title={"Livro de Matheus"} text={textCard.mateus} />
        <Card title={"Livro de Marcos"} text={textCard.marcos} />
        <Card title={"Livro de Lucas"} text={textCard.lucas} />
        <Card title={"Livro de João"} text={textCard.joao} />
      </div>
      <div className="links">
        <Links
          link={"https://www.youtube.com/c/%C3%81guaVivaRibeir%C3%A3oPires"}
          church={"Igreja Batista Água Viva"}
          showLink={true}
        />
        <Links
          link={"https://www.youtube.com/c/IgrejaEvAVideira"}
          church={"Igreja Batista Videira"}
          showLink={false}
        />
      </div>
    </div>
  );
}

export default App;
