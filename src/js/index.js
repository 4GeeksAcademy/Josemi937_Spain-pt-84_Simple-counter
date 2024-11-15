//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";


// include your styles into the webpack bundle
import "../styles/index.css";


//import your own components
import Contador from "./component/home.jsx";


//render your react application
let segundos = 0;

setInterval(function () {
    segundos++;

    const cuarto = Math.floor(segundos / 1000) %10;
    const tercero = Math.floor(segundos / 100) %10;
    const segundo = Math.floor(segundos / 10) %10;
    const primero = Math.floor(segundos / 1) %10;
    

    ReactDOM.createRoot(document.getElementById('app')).render(
        <Contador unidadesMil={cuarto} centenas={tercero} decenas={segundo} unidades={primero} Counter/> 
       
    );
}, 1000);
