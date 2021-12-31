import './App.css'
import NavBar from './components/NavBar'
import Home from './components/Home'
import ItemListContainer from "./components/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer"
import {BrowserRouter, Routes, Route} from "react-router-dom"


function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <NavBar/>
          <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/productos/" element={<ItemListContainer/>}>
              <Route path="/productos/category/:categoryId" element={<ItemListContainer/>}/>
              </Route>
              <Route path="/detalle/" element={<ItemDetailContainer/>}>
              <Route  path=":detalleId" element={<ItemDetailContainer/>}/>
              </Route>
          </Routes>
        </BrowserRouter>
        
    </div>  
  );
}

export default App;
