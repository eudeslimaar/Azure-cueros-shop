import { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import "./ItemCount.css"


const ItemCount = ({
    stockProducto,
    onAdd,
    contadorProducto,
    setContadorProducto,
  }) => {
    const handleChange = (e) => {
        let name = e.target.name;
        switch (name) {
        case "agregar":
            if (stockProducto === 0) {
            return console.log("Stock indisponible");
            }
            if (contadorProducto < stockProducto) {
                setContadorProducto(contadorProducto + 1);
              } else {
            console.log("Limite alcazado");
            }
            break

            case "sacar":
                if (contadorProducto > 1) {
                    setContadorProducto(contadorProducto - 1);
                  }
            break
            default:
            break;
        }
    }
    useEffect(() => {
        if (stockProducto === 0) {
          setContadorProducto(0);
        }
      }, [stockProducto]);

  return (
    <div className="ItemCounter__container">
        <div className="ItemCounter__col">
            <p>
                Cantidad
            </p>
            <div className="itemCouter__buttons">
            <button className="aumentar" name="agregar" onClick={(e) => handleChange(e)}>
                +
            </button>
            <div className="count">{contadorProducto}</div>
            <button className="disminuir" name="sacar" onClick={(e) => handleChange(e)}>
                -
            </button>
            </div>
        </div>
        <div ClassName="itemCounter__final">
            
                <button 
                    className="itemCount_buttom"
                    onClick={() => onAdd(contadorProducto)}
                    disabled={stockProducto === 0 && true}
                >
                    Agregar
                </button>
        </div>
    </div>
    
    
  )
}
export default ItemCount