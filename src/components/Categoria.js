import categorias from "../data/categorias"
import {NavLink} from "react-router-dom"
const Categoria = () =>{
return(
    <div>
      <ul className="categories">
      {categorias.map((categoria) => {
          return (
            <li key={categoria.id}>
              <img className="categoria__img"src={categoria.image} alt="categoria"></img>
              <NavLink to={categoria.address}>
                {categoria.name}
              </NavLink>
            </li>
          );
        })}
       </ul>
      </div>
)


    

            }
export default Categoria