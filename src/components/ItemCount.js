import React, { useState, useEffect } from "react"

import "./ItemCount.css"

function ItemCount(){
const [count, setCount] = useState(1);
    const contador = 10
    const handleChange = (e) => {
        let name = e.target.name;
        switch (name) {
        case "agregar":
            if (contador === 0) {
            return console.log("Stock indisponible");
            }
            if (count <  contador) {
            setCount(count + 1);
            } else {
            console.log("Limite alcazado");
            }
            break

            case "sacar":
            if (count > 1) {
            setCount(count - 1);
            }
            break
        }
    }

  return (
    <div className="ItemCounter__container">
        <div className="ItemCounter__col">
            <button className="aumentar" name="agregar" onClick={(e) => handleChange(e)}>
                +
            </button>
            <div className="count">{count}</div>
            <button className="disminuir" name="sacar" onClick={(e) => handleChange(e)}>
                -
            </button>
        </div>
        <div ClassName="ItemCounter__agregar">
            <button className="agregar">Agregar</button>
        </div>
    </div>
    
    
  )
}
export default ItemCount