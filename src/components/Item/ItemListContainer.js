import ItemList from "./ItemList"
import "./ItemListContainer.css"

import { useParams } from "react-router-dom"
import NavBarCategoria from "../NavBar/NavBarCategoria";


const ItemListContainer = () => {
  const { categoryId } = useParams()
    return (
      <div className="itemList__container">
      <NavBarCategoria />
        {categoryId ? <ItemList soloCategoria={categoryId} /> : <ItemList />}
      </div>
    );
  };
  
  export default ItemListContainer;