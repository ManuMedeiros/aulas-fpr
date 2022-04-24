import { useState } from "react";
import "./App.css";
import Card from "./Components/Card";
import Button from "./Components/Button";

function App() {

  const [title, setTitle] = useState('Cell porque você matou o Yamcha?');
  const [correct, setCorrect] = useState('Esta Certo?');
  const [nivel, setNivel] = useState(1)

  const handleHero = () => {
    setTitle('Freeza porque vc matou o Kuririn?')
    setCorrect('Freezaaaaaaa')
  }



  return (
    <div className="App">
      <Card
        title={title}
        text={`nivel de raiva ${nivel}x`}
      />
      <Button call={handleHero} title={correct}/>
      <Button call={() => setNivel(nivel * 4)} title={'Aumentar nivel de raiva'}/>
    </div>
  );
}

export default App;
