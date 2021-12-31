import ItemList from "./ItemList"
import "./ItemListContainer.css"
import Categoria from "./Categoria"
import { useParams } from "react-router-dom"


const ItemListContainer = () => {
  const { categoryId } = useParams()
    return (
      <>
      <Categoria/>
      <div className="itemList__container">
        
        {categoryId ? <ItemList soloCategoria={categoryId} /> : <ItemList />}
      </div>
      </>
    );
  };
  
  export default ItemListContainer;