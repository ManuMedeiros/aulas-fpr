import "./style.css";
import { shopShoes } from "../../text";

function Bertulini() {

  const filterShop = shopShoes.filter((shops) => {
    return shops.shoes === "Berlutini";
  });

  const shopOfBertulini = () => {
    window.location.href = 'https://www.berlutini.com.br/'
  }

  return (
    <div className="App">
      {filterShop.map((shop) => {
        return (
          <>
            <img src={shop.shop} onClick={shopOfBertulini}/>
            <h1>{shop.shoes}</h1>
            <h2>{shop.slogan}</h2>
          </>
        );
      })}
    </div>
  );
}

export default Bertulini;
