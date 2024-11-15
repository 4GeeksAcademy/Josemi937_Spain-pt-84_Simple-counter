import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Contador = ({ unidadesMil, centenas, decenas, unidades }) => {
    return (
        <div className="numeros">
            <div className="icono">
                <i className="far fa-clock"></i>
            </div>
            <div className="cuarto">{unidadesMil}</div>
            <div className="tercero">{centenas}</div>
            <div className="segundo">{decenas}</div>
            <div className="primero">{unidades}</div>
        </div>
        
        
    );
}

export default Contador