//react application root file
// React Components-set of reusable codes
//import Header from './components/Header'
// import Product from './components/Product'
// import Service from './components/Service'
// import Footer from './components/Footer'
// function App(){
//     return <div>
//         <h1>App Component</h1>
//         <hr/>
//         <Header/>
//         <hr/>
//         <Product/>
//         <Service/>
//         <hr/>
//         <Footer/>
//         <hr/>

       
//     </div>
// }
// export default App;
// let App=()=>{
//     return <div>
//         <h1>App Component</h1>
//     </div>
// }
// export default App

//class component
import React from "react";
import Header from './components/Header'
import Footer from './components/Footer'
class App extends React.Component{
         render(){
            return <div>
                <h1>App-class component</h1>
                <hr/>
                <Header/>
                <hr/>
                <Footer/>

            </div>
         }
}
export default App