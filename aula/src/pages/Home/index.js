import Card from "../../Components/Card";
import "./style.css";
import { loja } from "../../utils/utils";

function Home() {
  return (
    <div className="App">
      <h1>Melhores Tenis e Sapatos</h1>
      <Card
        title={"Nike"}
        text={"Tenis Esportivos"}
        shop={() => loja("/nike")}
      />
      <Card
        title={"Berlutini"}
        text={"Sapatos Sociais"}
        shop={() => loja("/berlutini")}
      />
      <Card
        title={"All Star"}
        text={"Tenis Para sair"}
        shop={() => loja("/allstar")}
      />
      <Card
        title={"Adidas"}
        text={"Tenis para todas as ocasiões"}
        shop={() => loja("/adidas")}
      />
    </div>
  );
}

export default Home;
