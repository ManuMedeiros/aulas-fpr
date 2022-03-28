import React from "react";

const Nav = () => {

    return (
        <>
            <nav>
                <button onClick={() => window.location.href='/'}>
                    Home
                </button>
                <button onClick={() => window.location.href='/primeira'}>
                    Primeira
                </button>
                <button onClick={() => window.location.href='/segunda'}>
                    Segunda
                </button>
                <button onClick={() => window.location.href='/terceira'}>
                    terceira
                </button>
            </nav>
        </>
    )
}

export default Nav;