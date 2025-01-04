import React from 'react'
const Product=()=>{
    let[product,setProduct]=React.useState({product_Name:"cycle",qty:1,price:4500})
    // let incrHandler=()=>{
    //     setProduct({qty:product.qty+1})
    // }
 
    return(
    <div>
        <h3>Product Component</h3>
        <h4>Product name:{product.product_Name}</h4>
        <h4>Product Price:{product.price}</h4>
        <button onClick={()=>{setProduct({...product,qty:product.qty-1})}}>Decr</button>{product.qty}<button onClick={()=>{setProduct({...product,qty:product.qty+1})}}>Incr</button>
    </div>
    )
}

export default Product