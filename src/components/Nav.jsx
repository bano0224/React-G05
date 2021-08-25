import React from 'react'
import SearchBar from './SearchBar';
import style from './Nav.module.css'



const Nav = () => {  //Componente siempre inicia con Mayus


    return (
        // Siempre se devuelve un solo elemento
        <nav className={style.nav}> 
            <SearchBar />
            <h1>Cripto-App</h1>
        </nav>
    )
}

export default Nav;