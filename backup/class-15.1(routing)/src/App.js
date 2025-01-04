import React from 'react'
//install react-router-dom 
import {Link,BrowserRouter as Router,Switch,Route} from'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact' 
import Services from './components/Services'

let  App = () => {
  return (
    <div>
      <Router>
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
          <Link to="/index" className="navbar-brand">Logo</Link>
          <div className="ml-auto">
            <ul className="navbar-nav">
              <li><Link to="/index" className="nav-link">Home</Link></li>
              <li><Link to="/about" className="nav-link">About</Link></li>
              <li><Link to="/services" className="nav-link">Services</Link></li>
              <li><Link to="/contact" className="nav-link">Contact</Link></li>
            </ul>
          </div>
        </nav>
        <Switch>
          <Route path="/index" component={Home}></Route>
          <Route path="/index" component={About}></Route>
          <Route path="/index" component={Contact}></Route>
          <Route path="/index" component={Services}></Route>
        </Switch>
      </Router>

     
    </div>
  )
}

export default App
 