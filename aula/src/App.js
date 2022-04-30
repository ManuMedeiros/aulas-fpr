import { useEffect, useState } from "react";
import "./App.css";
import Card from "./Components/Card";
import Button from "./Components/Button";

function App() {

  const [change, setChange] = useState(0)
  const [times, setTimes] = useState(
    'Marcos, Lucio, Rock Junior, Cafu, Roberto Carlos, Gilberto Silva, Kaka, Rivaldo, Ronaldinho, Denilson, Ronaldo'
  );
  const [melhores, setMelhores] = useState(
    'Naruto, Sasuke, Sakura, Shikamaru, Choji, Ino, Kiba, Shino, Hinata, Sai'
  )
  const [changeName, setChangeName] = useState(0)

  useEffect(() => {
    if (change === 'sao paulo') {
      setTimes(
        'Volpi, Miranda, Arboleda, Rafinha, Reinaldo, Rodrigo Nestor, Igor Gomes, Talles Costas, Luciano, Juan, Eder'
      );
    } else if (change === 'palmeiras') {
      setTimes(
        'Weverton, Gustavo Gomes, Luan, Marcos Rocha, Danilo, Gabriel Menino, Gustavo Scarpa, Dudu, Gabriel Veron, Rony'
      );
    } else if (change === 'corinthians') {
      setTimes(
        'Cassio, Gil, João Victor, Fagner, Fabio Santos, Paulinho, Renato Augusto, Willian, Roger Guedes, Gustavo Silva, Jô'
      );
    }
  }, [change])

  useEffect(() => {
    if (changeName === 1) {
      setMelhores(
        'Byakuya, Zaraki, Gin, Tousen, Hitsugaya, Yamamoto, Ichigo, Sado, Rukia, Kyorako'
      )
    } else if (changeName === 2) {
      setMelhores(
        'Goku, Vegeta, Gohan, Tranks, Numero 18, Numero 17, Boo, Kuririn, Freeza, Broly'
      )
    }
  }, [changeName])



  return (
    <div className="App">
      <Card
        title={'Melhores de cada time'} 
        text={times}
      />
      <Button
        title={'São Paulo'}
        call={() => setChange('sao paulo')} />
      <Button
        title={'Palmeiras'}
        call={() => setChange('palmeiras')} />
      <Button
        title={'Corinthians'}
        call={() => setChange('corinthians')} />
      <Card 
        title={'Melhores dos animes'}
        text={melhores}
      />
      <Button
        title={'Animes'}
        call={() => setChangeName(changeName + 1)} />
    </div>
  );
}

export default App;
