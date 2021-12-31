import CartWidjet from '../components/CartWidjet'
import './NavBar.css'
import {Link} from "react-router-dom"
import {NavLink} from "react-router-dom"



const NavBar = () => {
  const categories = [
    { id: 'Todos', address: '/productos/', text: 'TODOS LOS PRODUCTOS' },
    { id: 'Amarillo', address: '/category/amarillo', text: 'Amarillo' },
    { id: 'Azul', address: '/category/azul', text: 'Azul' },
    { id: 'Rojo', address: '/category/rojo', text: 'Rojo' },
    { id: 'Otros', address: '/category/otros', text: 'Otros' },
  ];

return(
   <header>
      <nav>
        
        <a href="#home" id="logo">Azure Cueros</a>      
        <ul id="nav-bar">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/productos/">Productos</Link>
          </li>
          <li>
            <Link to ="/detalle/">Detalles del Producto</Link>
          </li>
          <li>
            <CartWidjet cantidad="0"/>
          </li>
        </ul>
      
      
      </nav>
      <div>
      <ul className="categories">
              {categories.map((cat) => {
                return (
                  <div className="links" key={cat.id}>
                    <NavLink
                      to={cat.address}
                      className={({ isActive }) => (isActive ? 'activeClass' : '')}
                    >
                      {cat.text}
                    </NavLink>
                  </div>
                );
              })}
       </ul>
      </div>
   </header>
  )
}
export default NavBar