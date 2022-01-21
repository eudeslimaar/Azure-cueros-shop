import CartWidjet from '../../components/Cart/CartWidjet'
import '../NavBar/NavBar.css'
import {Link} from "react-router-dom"
import {NavLink} from "react-router-dom"




const NavBar = () => {

return(
   <header>
      <nav>
        
        <Link to="/" exact="true" id="logo">Azure Cueros</Link>      
        <ul id="nav-bar">
          <li>
          <NavLink to="/" exact="true">Home</NavLink>
          </li>
          <li>
          <NavLink to="/shop/">Productos</NavLink>
          </li>
          <li>
          <NavLink to="/contacto">Contacto</NavLink>
          </li>
          <li>
            <CartWidjet cantidad="0"/>
          </li>
        </ul>
      
      
      </nav>
      
   </header>
  )
}
export default NavBar