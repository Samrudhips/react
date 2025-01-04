import React from 'react'
import Navbar from './components/Navbar/Navbar'
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import Home from './components/ProductApp/Home';
import Products from './components/ProductApp/Products';
import CreateProduct from './components/ProductApp/CreateProduct';
import Admin from './components/ProductApp/Admin'
const App = () => {
  return (
    <div>
      <Router>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/index" element={<Home/>}/>
            <Route path="/products" element={<Products/>}/>
            <Route path="/admin" element={<Admin/>}/>
            <Route path="/create" element={<CreateProduct/>}/>
          </Routes>
      </Router>
    </div>
  )
}

export default App