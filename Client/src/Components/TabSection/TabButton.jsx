import './TabSection.css'
import React from "react";

// eslint-disable-next-line react/prop-types
export default function TabButton({ children, onSelect, isSelected }) {
  console.log('TABBUTTON COMPONENT EXECUTING');
  return (
    <li id="tabbutton"style={{listStyleType:'none' ,backgroundColor:'none' , cursor:'pointer'}} className={isSelected ? 'activee' : undefined} onClick={onSelect}>
        {children}
    </li>
  );
}
