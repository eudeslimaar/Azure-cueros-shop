import Item from "./Item"
import "./ItemList.css"
import { Link } from "react-router-dom";
import useGetItems from "../../firebase/hooks/useGetItems";


const ItemList = ({ soloCategoria }) => {
  const [items] = useGetItems();

 
  return (
    <div className="itemlist__container">
      {soloCategoria
        ? items.map((item) => {
            return (
              item.categoria === soloCategoria && (
                <Link key={item.id} to={`/item/${item.id}`}>
                  <Item item={item} />
                </Link>
              )
            );
          })
        : items.map((item) => {
            return (
              <Link key={item.id} to={`/item/${item.id}`}>
                <Item item={item} />
              </Link>
            );
          })}
    </div>
  );
};
export default ItemList;