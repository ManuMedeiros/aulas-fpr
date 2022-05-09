import React from "react";

const Animes = () => {

    const url = window.location.href;
    const anime = url.split('&')
    const animeSplit = anime[0].split('animes=')[1]
    const categoriaSplit = anime[1].split('categoria=')[1]
    const personaSplit = anime[2].split('principal=')[1]

    return (
        <>
            <div>
                <h1>Animes</h1>
                {animeSplit === 'naruto' && (
                    <div style={{ background: '#000' }}>
                        {animeSplit === 'naruto' && <h2>Naruto</h2>}
                        {categoriaSplit === 'ninja' && <h2>Ninja</h2>}
                        {personaSplit === 'naruto' && <img src='https://nerdhits.com.br/wp-content/uploads/2020/01/screen-0-576x1024.jpg' style={{ width: '20%' }} />}
                        <a href="?animes=bleach&categoria=shinigami&principal=ichigo">
                            <h3>Proximo</h3>
                        </a>
                    </div>
                )}
                {animeSplit === 'bleach' && (
                    <div style={{ background: '#000' }}>
                        {animeSplit === 'bleach' && <h2>Bleach</h2>}
                        {categoriaSplit === 'shinigami' && <h2>Shinigami</h2>}
                        {personaSplit === 'ichigo' && <img src='https://animesonline.com.br/wp-content/uploads/2020/12/ichigo-kurosaki-wallpaper.jpg' style={{ width: '20%' }} />}
                        <a href="?animes=attack&categoria=titans&principal=eren">
                            <h3>Proximo</h3>
                        </a>
                    </div>
                )}
                {animeSplit === 'attack' && (
                    <div style={{ background: '#000' }}>
                        {animeSplit === 'attack' && <h2>Attack on Titans</h2>}
                        {categoriaSplit === 'titans' && <h2>Titans</h2>}
                        {personaSplit === 'eren' && <img src='https://i.pinimg.com/564x/48/b6/dc/48b6dc24eaa3e80d9e1b00f7ad4790f7.jpg' style={{ width: '20%' }} />}
                        <a href="/">
                            <h3>Home</h3>
                        </a>
                    </div>
                )}
            </div>
        </>
    )
}

export default Animes;