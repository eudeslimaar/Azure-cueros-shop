import "./Item.css"

const Item = ({ item }) => {
  
  
  return (
    
    <div className="card">
      <div className="card__img">
        <img src={item.image} alt={item.title} />
      </div>
      
      <div className="description">
      <h3>{item.nombre}</h3>
        <span>
          <p>{item.precio} ARS</p>
        </span>
        <span>
          Stock disponible: <b>{item.stock}</b>
        </span>
        
        <span>Color: {item.categoria}</span>
      </div>
     
      <div>
          <button className="detalle">Detalles</button>
      </div>
    </div>
  )
}
export default Item