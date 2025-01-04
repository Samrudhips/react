import CompB from "./CompB"
let CompA=()=>{
    let ename="Rahul"
    let eid=101
    let locations=["Wayanad"," Bangalore"," New delhi"]

    return  <div>
                <h3>Component A</h3>
                <CompB name={ename} id={eid} loc={locations}/>
            </div>
}
export default CompA