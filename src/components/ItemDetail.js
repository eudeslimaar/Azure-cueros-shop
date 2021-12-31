import "./ItemDetail.css"


const ItemDetail = ({ item }) => {
  return(
    <div className="itemDetail">
      
      <div className="cardDetail" >
        <div >
          <img className="Detail_img"src={item.image} alt={item.nombre}></img>
        </div>
        <div className=".card__descript">
            <h3>{item.nombre}</h3>
            <p>{item.descp}</p>
        </div>
      </div>
    </div>
  
  )
  } 

export default ItemDetail