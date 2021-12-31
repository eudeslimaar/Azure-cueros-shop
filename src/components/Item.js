import ItemCount from "./ItemCount"
import "./Item.css"
import {Link} from "react-router-dom"


const Item = ({ item }) => {
    return(
    <div className="card">
        <div className="card__img">
          <img src={item.image} alt={item.title} />
        </div>
          <h3>{item.nombre}</h3>
            <span>
              Stock disponible: <b>{item.stock}</b>
            </span>
            <ItemCount stockProducto={item.stock} />
            <div >
              <button className="detalle"><Link to="/detalle/">Detalles</Link></button>
            </div>
    </div>
    )
}
export default Item