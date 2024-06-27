/* eslint-disable react/prop-types */
import { FaArrowCircleRight } from "react-icons/fa";
import './Arrowbutton.css'
// eslint-disable-next-line react/prop-types
export const Arrowbutton = ({name}) =>{
    return(<div className='herobutton'>
        <div style={{display:'flex', justifyContent:'center' ,alignItems:'center'}}>
        <div className='herobtntext'><p >{name}</p></div>
        <div className='herobtnicon'><FaArrowCircleRight /></div>
        </div>
      </div>)
}
export const Arrowbutton2 = ({name}) =>{
  return(<div className='herobutton' id="arr2" >
      <div style={{display:'flex', justifyContent:'center' ,alignItems:'center'}}>
      <div className='herobtntext'><p >{name}</p></div>
      <div className='herobtnicon'><FaArrowCircleRight /></div>
      </div>
    </div>)
}

