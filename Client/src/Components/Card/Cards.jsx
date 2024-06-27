/* eslint-disable react/jsx-key */
import {Card} from './Card.js'
import {Arrowbutton2} from '../Arrow Button/Arrowbutton.jsx'
import './Card.css'
export const Cards = () =>{
    return(
        <div className="cards">
            {
                Card.map((item, index) => {
                    return(
                        <div className='card' key={index}>
                            <div className='upper'>
                            <img src={item.image} alt="img" className='img' />
                            <h1 className='title'>{item.title}</h1>
                            <p className='description'>{item.des}</p>
                            </div>
                            <div className='lower'>
                                <Arrowbutton2 name={item.btn}/>
                            </div>
                        </div>
                    );

                })
            }
        </div>
    )
}