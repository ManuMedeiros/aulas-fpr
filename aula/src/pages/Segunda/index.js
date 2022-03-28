import "./style.css";

function Segunda() {
  const formulario = [
    {
      nome: "Henrique",
      clientePremium: true,
      clientePadrao: false,
      clienteBasico: false,
      telefone: "(11) 95987-0654",
      produto: "https://img.ibxk.com.br/2021/09/30/30180320047397.jpg",
      frete: true,
    },
    {
      nome: "Felipe",
      clientePremium: false,
      clientePadrao: true,
      clienteBasico: false,
      telefone: "(11) 95987-0654",
      produto: "https://img.ibxk.com.br/2021/09/30/30180320047397.jpg",
      frete: false,
    },
    {
      nome: "Adelaide",
      clientePremium: false,
      clientePadrao: false,
      clienteBasico: true,
      telefone: "(11) 95987-0654",
      produto: "https://img.ibxk.com.br/2021/09/30/30180320047397.jpg",
      frete: false,
    },
    {
      nome: "Italo",
      clientePremium: false,
      clientePadrao: false,
      clienteBasico: true,
      telefone: "(11) 95987-0654",
      produto: "https://img.ibxk.com.br/2021/09/30/30180320047397.jpg",
      frete: false,
    },
  ];

  const precos = {
    precoPremium: 8.999,
    precoPadrao: 9.999,
  };
        

  return (
    <div className="App">
      <input onChange={(e) => window.location.href = `/primeira?${e.target.value}`} />
      <h1>Lojinha do seu Zé - Notebooks</h1>
      {formulario.map((item) => {
        return (
          <>
            {item.clientePremium && (
              <div className="box-form">
                <div className="box-info">
                  <h2>Nome: {item.nome}</h2>
                  <p>
                    <strong>Telefone:</strong> {item.telefone}
                  </p>
                  {item.nome === "Italo" ? (
                    <p>Não existe!</p>
                  ) : (
                    <>
                      <img className="img-product" src={item.produto} />
                      <p>
                        <strong>Preço:</strong>{" "}
                        {item.clientePremium
                          ? precos.precoPremium
                          : precos.precoPadrao}
                      </p>
                      {item.clientePremium && (
                        <p>
                          <strong>Frete Grátis</strong>
                        </p>
                      )}
                    </>
                  )}
                </div>
              </div>
            )}
          </>
        );
      })}
    </div>
  );
}

export default Segunda;
