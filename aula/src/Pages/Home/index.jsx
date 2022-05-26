import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "../../Components/Image";
import Title from "../../Components/title";
import Text from "../../Components/Text";
import "./style.css";

const Home = () => {

    const [pokedex, setPokedex] = useState();

    useEffect(() => {
        axios.get('https://aulas-fpr-default-rtdb.firebaseio.com/pokemon.json')
            .then((response) => {
                console.log(response.data, 'response')
                setPokedex(response?.data)
            })
    }, [])

    return (
        <div className="container-home">
            <div>
            <h2>Fist Evoulution</h2>
                {Object.values(pokedex.firstEvolution).map(first => {
                    console.log(first, 'first')
                    return (
                        <>
                            <div className="card-pokemon">
                                <Image src={first?.img} />
                                <Title text={`Name: ${first?.name}`} />
                                <Text text={`Number: ${first?.numer}`} />
                                <Text text={`Type: ${first?.type}`} />
                            </div>
                        </>
                    )
                })}
            </div>
            <div>
            <h2>Second Evoulution</h2>
                {Object.values(pokedex.secondEvolution).map(second => {
                    console.log(second, 'second')
                    return (
                        <>
                            <div className="card-pokemon">
                                <Image src={second?.img} />
                                <Title text={`Name: ${second?.name}`} />
                                <Text text={`Number: ${second?.numer}`} />
                                <Text text={`Type: ${second?.type}`} />
                            </div>
                        </>
                    )
                })}
            </div>
        </div>
    )
}

export default Home;