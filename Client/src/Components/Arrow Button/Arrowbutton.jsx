/* eslint-disable react/prop-types */
import React from "react";
import { PiArrowCircleRightFill } from "react-icons/pi";
import './Arrowbutton.css'
// eslint-disable-next-line react/prop-types
export const Arrowbutton = ({name}) =>{
    return(<div className='herobutton'>
        <div style={{display:'flex', justifyContent:'center' ,alignItems:'center'}}>
        <div className='herobtntext'><p >{name}</p></div>
        <div className='herobtnicon'><PiArrowCircleRightFill/></div>
        </div>
      </div>)
}
export const Arrowbutton2 = ({name}) =>{
  return(
    <div className='herobutton' id="arr2">
      <div style={{display:'flex', justifyContent:'center' ,alignItems:'center'}}>
      <div className='herobtntext' style={{color:'black'}}><p className="p">{name}</p></div>
      <div className='herobtnicon'><PiArrowCircleRightFill/></div>
      </div>
    </div>
  )
}

