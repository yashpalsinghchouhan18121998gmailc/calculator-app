import style from "./Display.module.css"

function Display({calVal}) {

  return (
    <div ><input className={style.inputdisplay} type="text" value={calVal} readOnly/></div>
  )
}

export default Display
