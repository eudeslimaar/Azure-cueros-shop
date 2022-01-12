import { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import "./ItemCount.css"


const ItemCount = ({
    stockProducto,
    onAdd,
    contadorProducto,
    setContadorProducto,
  }) => {
const [count, setCount] = useState(1);
    const contador = 10
    const handleChange = (e) => {
        let name = e.target.name;
        switch (name) {
        case "agregar":
            if (contador === 0) {
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
            <div className="count">{count}</div>
            <button className="disminuir" name="sacar" onClick={(e) => handleChange(e)}>
                -
            </button>
            </div>
        </div>
        <div ClassName="itemCounter__final">
            <div>
                <Link
                    className="comprar"
                    to="/cart"
                    disabled={stockProducto === 0 && true}
                >
                <button className="itemCount_buttom">Comprar</button>
                </Link>
            </div>
                    
            <div>
                <button 
                    className="itemCount_buttom"
                    onClick={() => onAdd(contadorProducto)}
                    disabled={stockProducto === 0 && true}
                >
                    Agregar
                </button>
            </div>
        </div>
    </div>
    
    
  )
}
export default ItemCount