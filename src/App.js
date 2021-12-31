import './App.css'
import NavBar from './components/NavBar'
import Home from './components/Home'
import ItemListContainer from "./components/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer"
import {BrowserRouter, Routes, Route} from "react-router-dom"


const App = () => {
  return (
    <div className="App">
        <BrowserRouter>
        <NavBar/>
          <Routes>
              <Route path="/" exact="true" element={<Home />}/>
              <Route path="/shop/" exact="true" element={<ItemListContainer />} />
              <Route path="/shop/category/:categoryId" element={<ItemListContainer/>}/>
              
              <Route path="/item/:id" element={<ItemDetailContainer />} />
            
          </Routes>
        </BrowserRouter>
        
    </div>  
  );
}

export default App;
