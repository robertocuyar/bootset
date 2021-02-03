import React from 'react';
import NavBarIntro from "./NavBarIntro";
import MainBody from "./MainBody";

const App =  () =>{
    return (
        <div className={"h-100"}>
        <NavBarIntro />
        <MainBody />
        </div>
    )
};

export default App;