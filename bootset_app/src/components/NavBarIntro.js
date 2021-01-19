import React from 'react';
import Navbar from "react-bootstrap/Navbar";



const NavBarIntro =() =>{
    return(
        <Navbar className={"nav_main"} variant="dark">
            <Navbar.Brand className={"nav_text"} href="#home">
                {' '}
                <h2>Bootset</h2>
            </Navbar.Brand>
        </Navbar>
    )
}

export default NavBarIntro;
