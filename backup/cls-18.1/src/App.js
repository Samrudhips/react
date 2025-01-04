//Incase of react-router-dom version 7
import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Navbar from './navbar/Navbar'
import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'
import Contact from './components/Contact'
import Reg from './Registration/Reg'
import Login from './components/Login'
const App = () => {
  return (
    <div>
        <Router>
                <Navbar/>
                <Routes>
                <Route path="/index" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/services" element={<Services/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/reg" element={<Reg/>}/>
                </Routes>
        </Router>
    </div>
  )
}

export default App