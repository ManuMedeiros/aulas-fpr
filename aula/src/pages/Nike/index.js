import "./style.css";
import { shopShoes } from "../../text";

function Nike() {
  const filterShop = shopShoes.filter((shops) => {
    return shops.shoes === "Nike";
  });

  const shopOfNike = () => {
    window.location.href = 'https://www.nike.com.br/'
  }

  return (
    <div className="App">
      {filterShop.map((shop) => {
        return (
          <>
            <img src={shop.shop} onClick={shopOfNike}/>
            <h1>{shop.shoes}</h1>
            <h2>{shop.slogan}</h2>
          </>
        );
      })}
    </div>
  );
}

export default Nike;
