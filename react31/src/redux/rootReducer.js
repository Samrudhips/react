//to combine different reducers together
import { combineReducers } from "redux"
import { productReducer } from "./product/product.reducer"
import { messageReducer } from "./Msg/message.reducer"
let rootReducer=combineReducers({"product":productReducer,"message":messageReducer

})
export{rootReducer}