import { NavLink } from "react-router-dom";
//----------------DATA--------------
import categorias from "../data/categorias";

const NavBarCategoria = () => {
    return (
      <ContainerNavBarCat>
        <ul>
          {categorias.map((categoria) => {
            return (
              <li key={categoria.id}>
                <NavLink to={`/shop/category/${categoria.name.toLowerCase()}`}>
                  {categoria.name}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </ContainerNavBarCat>
    );
  };

  export default NavBarCategoria;