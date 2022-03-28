import "./App.css";
import Button from "./Components/Button";
import Input from "./Components/Input";
import { CallAlert, TypeText } from "./Utils";

function App() {

  return (
    <div className="App">
      <div className="containder">
        <Input onChange={(e) => { TypeText(e.target.value) }} />
        <Button call={() => CallAlert("Maça", "Cenoura")}/>
      </div>
    </div>
  );
}

export default App;
