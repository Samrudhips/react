//actions
let GM="GM"
let GN="GN"
//action is a function return actionable objects
let gmAction=()=>{
    return{type:GM}
}
let gnAction=()=>{
    return{type:GN}
}
export{gmAction,gnAction,GN,GM}