import './TabSection.css'
import React from "react";

// eslint-disable-next-line react/prop-types
export default function TabButton({ children, onSelect, isSelected }) {
  console.log('TABBUTTON COMPONENT EXECUTING');
  return (
    <li style={{listStyleType:'none' ,backgroundColor:'none' }}>
      <button style = {{width:'100%',height:'150px', textAlign:'left' , marginRight:'20px'}}className={isSelected ? 'activee' : undefined} onClick={onSelect}>
        {children}
      </button>
    </li>
  );
}
