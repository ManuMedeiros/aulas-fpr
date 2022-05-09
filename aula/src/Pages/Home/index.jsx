import React from "react";
import Links from "../../Components/Links";

const Home = () => {
    return (
        <>
            <Links
                text={'Split - animes'}
                link={'/Animes?animes=naruto&categoria=ninja&principal=naruto'}
            />
            <Links
                text={'Query String - Avatares'}
                link={'/Avatares?avatar=kyoshi&elemento=terra&nacao=terra&inimigo=chin&animal=desconhecido'}
            />
        </>
    )
}

export default Home;