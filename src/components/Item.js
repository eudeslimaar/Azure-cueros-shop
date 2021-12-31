import ItemCount from "./ItemCount"
import "./Item.css"



const Item = ({ item }) => {
  return (
    
    <div className="card">
      <div className="card__img">
        <img src={item.image} alt={item.title} />
      </div>
      <h3>{item.nombre}</h3>
      <span>
        Stock disponible: <b>{item.stock}</b>
      </span>
      <span>Color: {item.categoria}</span>
      <ItemCount stockProducto={item.stock} />
      <div>
          <button className="detalle">Detalles</button>
      </div>
    </div>
  )
}
export default Item