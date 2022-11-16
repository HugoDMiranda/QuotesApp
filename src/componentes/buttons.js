
import React from "react";
import '../hojas-de-estilo/buttons.css';

function Buttons(props) {

    return(
        <div>
            <button onClick={props.click} className={props.boton}> New Quote </button>
        </div>
    )
}

export default Buttons