import style from "./ButtonsContainer.module.css"


function ButtonsContainer({btnHandler}) {
    const values = ["c","1","2","+","3","4","-","5","6","*","7","8","/","=","9","0","."];


    return (
        
        <div className={style.outerdiv}>
       
            {values.map((value) => (
                // {console.log(value)}
               <button onClick={btnHandler} key={value} className={style.divbtn}>{value}</button>   
            ))}
            
        </div>
    )
  }
  
  export default ButtonsContainer
  