import "./App.css";

function App() {
  const sereitei = [
    {
      local: "Soul Society",
      dangai: true,
      Ryokas: [
        {
          ichigo: "Ichigo Korosaki",
          sado: "Sado Yasutora",
          uryu: "Uryu Ishida",
        },
      ],
      sensei: [
        {
          mundoReal: true,
          sensei: "Urahara Kisuki",
        },
        {
          mundoDasAlmas: true,
          sensei: "Yoruichi Shihōin",
        },
      ],
    },
    {
      local: "Hueco Mundo",
      dangai: true,
      Ryokas: [
        {
          ichigo: "Ichigo Korosaki",
          sado: "Sado Yasutora",
          uryu: "Uryu Ishida",
        },
      ],
      sensei: [
        {
          mundoReal: true,
          sensei: "Shinji Hirako",
        },
        {
          mundoDasAlmas: true,
          sensei: "Zaraki Kenpachi",
        },
      ],
    },
    {
      local: "Mundo Real",
      dangai: true,
      Ryokas: [
        {
          ichigo: "Ichigo Korosaki",
          sado: "Sado Yasutora",
          uryu: "Uryu Ishida",
        },
      ],
      sensei: [
        {
          mundoReal: true,
          sensei: "Kūgo Ginjō",
        },
        {
          mundoDasAlmas: true,
          sensei: "Isshin Kurosaki",
        },
      ],
    },
    {
      local: "Soul Society",
      dangai: true,
      Ryokas: [
        {
          ichigo: "Ichigo Korosaki",
          sado: "Sado Yasutora",
          uryu: "Uryu Ishida",
        },
      ],
      sensei: [
        {
          mundoReal: true,
          sensei: "Urahara Kisuki",
        },
        {
          mundoDasAlmas: true,
          sensei: "Yoruichi Shihōin",
        },
      ],
    },
  ];

  return (
    <div className="App">
      {sereitei.map((bleach) => {
        return (
          <div className="box-form">
            <div className="box-info">
              <div>
                <h1>Arcos</h1>
                <h2>{bleach.local}</h2>
              </div>
              {bleach.Ryokas.map((personagens) => {
                return (
                  <div>
                    <h3>Melhores Personagens</h3>
                    <p>
                      <strong>Shinigame Substituto:</strong> {personagens.ichigo}
                    </p>
                    <p>
                      <strong>Humano:</strong> {personagens.sado}
                    </p>
                    <p>
                      <strong>Quincy</strong> {personagens.uryu}
                    </p>
                  </div>
                );
              })}
              <h3>Senseis</h3>
              {bleach.sensei.map((seniors) => {
                return (
                  <div>
                    <p>
                      <strong>Sensei:</strong> {seniors.sensei}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
