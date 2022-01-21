import { useState } from "react";
import "./ItemDetail.css"
import ItemCount from "./ItemCount";
import { useCart } from "../../context/CartContext";


const ItemDetail = ({ item }) => {
  const { addItem } = useCart();
  const [contadorProducto, setContadorProducto] = useState(1);
  

    const onAdd = (cantidad) => {
      setContadorProducto(cantidad);
      addItem(item, cantidad);
    }
    return(
    <div className="itemDetail">
      
      <div className="cardDetail" >
        <div >
          <img className="Detail_img"src={item.image} alt={item.nombre}></img>
        </div>
        <div className="card__descript">
            <h3>{item.nombre}</h3>
            <p>{item.descp}</p>
        </div>
        <div className="body__bottom">
              <ItemCount
                stockProducto={item.stock}
                onAdd={onAdd}
                contadorProducto={contadorProducto}
                setContadorProducto={setContadorProducto}
              />
            </div>
      </div>
    </div>
  
  )
  } 

export default ItemDetail