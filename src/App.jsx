import { useState } from "react"
import style from "./App.module.css"
import ButtonsContainer from "./components/ButtonsContainer"
import Display from "./components/Display"



function App() {
  
  const [calVal , setCalVal ] = useState("");


  const btnHandler = (e)=>{
    let val = e.target.innerText;
    // console.log(e.target.innerText);
    if(val==="c"){
      setCalVal("")
    }else if(val==="="){
       const result = eval(calVal)
       setCalVal(result)
    }else{
      const newVal = calVal + val;
      setCalVal(newVal)
    }
    
  }




  return (
   <div className={style.outerdiv}>
  <h2>calculator</h2>
    <Display calVal={calVal}></Display>
    <ButtonsContainer btnHandler={btnHandler}></ButtonsContainer>
  
   </div>
  )
}

export default App
