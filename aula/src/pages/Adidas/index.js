import "./style.css";
import { shopShoes } from "../../text";

function Adidas() {
  const filterShop = shopShoes.filter((shops) => {
    return shops.shoes === "Adidas";
  });

  const shopOfAdidas = () => {
    window.location.href = 'https://www.adidas.com.br/'
  }

  return (
    <div className="App">
      {filterShop.map((shop) => {
        return (
          <>
            <img src={shop.shop} onClick={shopOfAdidas}/>
            <h1>{shop.shoes}</h1>
            <h2>{shop.slogan}</h2>
          </>
        );
      })}
    </div>
  );
}

export default Adidas;
