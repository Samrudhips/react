import { INCR,DECR } from "./product.action";
let initialState={
    product_Name:"Marker Pen",
    price:30,
    qty:1,
    image:""
}
let productReducer = (state=initialState,action)=>{
    switch(action.type){
        case 'INCR':
            return {}
            case 'DECR':
                return {}
                default:
                    return state
    }

}
export {productReducer}