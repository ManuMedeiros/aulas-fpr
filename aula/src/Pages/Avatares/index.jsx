import React from "react";
import './styles.css'

const Avatares = () => {

    const params = new URLSearchParams(window.location.search);
    let urlParams = undefined;
    params.forEach((value, key) => {
        urlParams = Object.assign({}, urlParams, {
            [key]: value.toString()
        });
    });

    console.log(urlParams, 'url')

    return (
        <>
            <h1>Avatares</h1>
            {urlParams.avatar === 'kyoshi' && (
                <>
                    <section className="container" style={{ background: '#006400' }}>
                        <h1>Kyoshi</h1>
                        <img src='https://cdn131.picsart.com/329693344000201.png' style={{ width: '20%' }} />
                        {urlParams.elemento === 'terra' && <h3>Elemento principal: terra</h3>}
                        {urlParams.nacao === 'terra' && <h3>Onde nasceu: Reino da terra</h3>}
                        {urlParams.inimigo === 'chin' && <h3>Principal Inimigo: Chin o Conquistador</h3>}
                        {urlParams.animal === 'desconhecido' && <h3>Companheiro Animal: Desconhecido</h3>}
                        <a href="?avatar=roku&elemento=fogo&nacao=fogo&inimigo=souzen&animal=dragao">
                            <h2>Proximo</h2>
                        </a>
                    </section>
                </>
            )}
            {urlParams.avatar === 'roku' && (
                <>
                    <section className="container" style={{ background: '#B22222' }}>
                        <h1>Roku</h1>
                        <img src='https://i.pinimg.com/originals/a9/05/05/a905051b6633ca9d085ba5e5cc0c2a52.png' style={{ width: '20%' }} />
                        {urlParams.elemento === 'fogo' && <h3>Elemento principal: Fogo</h3>}
                        {urlParams.nacao === 'fogo' && <h3>Onde nasceu: Nação do Fogo</h3>}
                        {urlParams.inimigo === 'souzen' && <h3>Principal Inimigo: Senhor do Fogo Souzen</h3>}
                        {urlParams.animal === 'dragao' && <h3>Companheiro Animal: Dragão</h3>}
                        <a href="?avatar=aang&elemento=vento&nacao=ar&inimigo=ozai&animal=bisao">
                            <h2>Proximo</h2>
                        </a>
                    </section>
                </>
            )}
            {urlParams.avatar === 'aang' && (
                <>
                    <section className="container" style={{ background: '#9400D3' }}>
                        <h1>Aang</h1>
                        <img src='https://w7.pngwing.com/pngs/880/762/png-transparent-aang-sokka-appa-katara-the-avatar-state-aang-computer-wallpaper-fictional-character-cartoon.png' style={{ width: '20%' }} />
                        {urlParams.elemento === 'vento' && <h3>Elemento principal: vento</h3>}
                        {urlParams.nacao === 'ar' && <h3>Onde nasceu: Nomadis do Ar</h3>}
                        {urlParams.inimigo === 'ozai' && <h3>Principal Inimigo: Senhor do Fogo Ozai</h3>}
                        {urlParams.animal === 'bisao' && <h3>Companheiro Animal: Bisão Voador</h3>}
                        <a href="?avatar=korra&elemento=agua&nacao=agua&inimigo=zaheer&animal=urso">
                            <h2>Proximo</h2>
                        </a>
                    </section>
                </>
            )}
            {urlParams.avatar === 'korra' && (
                <>
                    <section className="container" style={{ background: '#000080' }}>
                        <h1>Korra</h1>
                        <img src='https://i.pinimg.com/originals/bf/d9/ca/bfd9caa18bbbe8d69856e39371d74869.png' style={{ width: '20%' }} />
                        {urlParams.elemento === 'agua' && <h3>Elemento principal: agua</h3>}
                        {urlParams.nacao === 'agua' && <h3>Onde nasceu: Tribo da Agua</h3>}
                        {urlParams.inimigo === 'zaheer' && <h3>Principal Inimigo: Zaheer</h3>}
                        {urlParams.animal === 'urso' && <h3>Companheiro Animal: Cão urso polar</h3>}
                        <a href="/">
                            <h2>Home</h2>
                        </a>
                    </section>
                </>
            )}
        </>
    )
}

export default Avatares;