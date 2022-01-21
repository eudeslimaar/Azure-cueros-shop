import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { CartContextProvider } from "./context/CartContext"
//components
import NavBar from './components/NavBar/NavBar'
import Home from './components/Home/Home'
import Cart from "./components/Cart/Cart";
import ItemListContainer from "./components/Item/ItemListContainer"
import ItemDetailContainer from "./components/Item/ItemDetailContainer"


const App = () => {
  return (
    
    <div className="App">
      <CartContextProvider>
        <BrowserRouter>
        <NavBar/>
          <Routes>
              <Route path="/"  element={<Home />}/>
              <Route path="/shop/" exact="true" element={<ItemListContainer />} />
              <Route path="/shop/category/:categoryId" element={<ItemListContainer/>}/>
              
              <Route path="/item/:id" element={<ItemDetailContainer />} />
              <Route path="/cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
        </CartContextProvider>
        
    </div>  
  );
}

export default App;
