import "./App.css";

function App() {

  const number = 4;

  const consegui = 'Você conseguiu';

  return (
    <div className="App">
      <input
        placeholder="Digite os valores"
        maxLength={2}
        onChange={(e) => alert(number + JSON.parse(e.target.value))}
      />
      <div onClick={(e) => alert(consegui)}>
        Será que deu certo?
      </div>
    </div>
  );
}

export default App;
