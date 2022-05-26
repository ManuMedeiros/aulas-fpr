import React from "react";
import "./styles.css"

const Animes = () => {

    const params = new URLSearchParams(window.location.search);
    let urlParams = undefined;
    params.forEach((value, key) => {
        urlParams = Object.assign({}, urlParams, {
            [key]: value.toString()
        });
    });

    console.log(urlParams)

    const renderLogo = () => {
        if (urlParams.loja === 'americanas') {
            return <img src='https://www.anacouto.com.br/wp-content/uploads/2021/07/GALERIA-SITE-AMERICANAS.png' />
        } else if (urlParams.loja === 'magazine') {
            return <img src='https://ri.magazineluiza.com.br/images/thumb-magalu.png' />
        } else if (urlParams.loja === 'riachuelo') {
            return <img src='https://boulevardshopping.com.br/lojas_files/22962.jpg' />
        } 
    }

    const renderFundo = (background) => {
        switch (background) {
            case 'azul': return 'blue';
            case 'amarelo': return 'yellow';
            case 'vermelho': return 'red';
        }
    }

    const renderComodo = () => {
        if (urlParams.comodo === 'cozinha') {
            return <img src='https://casa.abril.com.br/wp-content/uploads/2021/06/cozinha-pequena-parecer-ampla-blog-inove-papeis-de-parede-03..jpg?quality=95&strip=info&w=1024' />
        } else if (urlParams.comodo === 'sala') {
            return <img src='http://s2.glbimg.com/l7GmJGM8LEwG-alI8Z_8nzkKlgI=/620x450/e.glbimg.com/og/ed/f/original/2015/08/14/1_1.jpg'/>
        } else if (urlParams.comodo === 'quarto') {
            return <img src='https://blog.fratellihouse.com.br/wp-content/uploads/2021/02/Quarto-de-hospedes-com-tons-em-verde-1024x576.jpg'/>
        }
    }

    const renderForncedor = () => {
        if (urlParams.forncedor === 'philco') {
            return <h3>Philco - Tem coisas que só a Philco faz pra você</h3>
        } else if (urlParams.forncedor === 'madeira') {
            return <h3>Madeira Madeira - Monte sua casa, conte sua história.</h3>
        } else if (urlParams.forncedor === 'bonato') {
            return <h3>Bonato - Cada solução, um recomeço</h3>
        }
    }

    return (
        <div className="container" style={{background: renderFundo(urlParams.fundo)}}>
            {renderLogo()}
            {renderComodo()}
            {renderForncedor()}
            <a href="/">
                <h1>Voltar</h1>
            </a>
        </div>
    )
}

export default Animes;