import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import useGetItems from "../../firebase/hooks/useGetItems";


const NavBarCategoria = () => {
  const [items] = useGetItems();

  const [categorias, setCategorias] = useState();

  useEffect(() => {
    let cat = items.map((item) => {
      return item.categoria;
    });
    cat = cat.filter((categoria, index) => cat.indexOf(categoria) === index);
    return setCategorias(cat);
  }, [items]);

    return (
      <div className="navbar_categoria">
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
      </div>
    );
  };

  export default NavBarCategoria;