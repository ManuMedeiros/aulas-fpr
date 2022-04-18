import "./style.css";
import { shopShoes } from "../../text";

function AllStar() {
  const filterShop = shopShoes.filter((shops) => {
    return shops.shoes === "All Star";
  });

  const shopOfAllStar = () => {
    window.location.href = 'https://www.converse.com.br/'
  }

  return (
    <div className="App">
      {filterShop.map((shop) => {
        return (
          <>
            <img src={shop.shop} onClick={shopOfAllStar}/>
            <h1>{shop.shoes}</h1>
            <h2>{shop.slogan}</h2>
          </>
        );
      })}
    </div>
  );
}

export default AllStar;
