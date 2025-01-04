
let intialState = {
    msg:"Hello"
}
let messageReducer = (state=intialState,action)=>{
    console.log(action)
    console.log(action.type)
    switch(action.type){
        case 'GM':
            return {msg:"Hello,Good Morning"}
        case 'GN':
            return {msg:"Hello,Good Night"}
        default :
        return state
    }
}
export {messageReducer}


