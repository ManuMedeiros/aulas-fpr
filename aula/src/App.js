import "./App.css";
import Input from "./Components/Input";
import { CallAlert, TypeText } from "./Utils";

function App() {

  return (
    <div className="App">
      <div className="containder">
        <Input text={'Instrumentos'} onChange={(e) => { TypeText(e.target.value) }} />
        <Input text={'Musicos'} onChange={(e) => { CallAlert(e.target.value) }} />
      </div>
    </div>
  );
}

export default App;
