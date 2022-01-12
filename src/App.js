import './App.css'
import NavBar from './components/NavBar'
import Home from './components/Home'
import ItemListContainer from "./components/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { CartContextProvider } from "./context/CartContext"


const App = () => {
  return (
    
    <div className="App">
      <CartContextProvider>
        <BrowserRouter>
        <NavBar/>
          <Routes>
              <Route path="/" exact="true" element={<Home />}/>
              <Route path="/shop/" exact="true" element={<ItemListContainer />} />
              <Route path="/shop/category/:categoryId" element={<ItemListContainer/>}/>
              
              <Route path="/item/:id" element={<ItemDetailContainer />} />
          </Routes>
        </BrowserRouter>
        </CartContextProvider>
        
    </div>  
  );
}

export default App;
