import React, { useState } from "react";
import "./TabCircle.css";

export default function TabCircle({ data }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="sectionCircleTab">
      <div className="CircleTabcontent">
        <h1 className="tabCirclehead">{data.head}</h1>
        <div className="Circlebuttons">
          {data.circles.map((value, index) => (
            <div
              key={index}
              className={`my-element ${
                activeIndex === index ? "Circlebuttonactive" : "Circlebutton"
              }`}
              onClick={() => handleClick(index)}
            >
              <h1 className="circlebtnheading">{value.head}</h1>
            </div>
          ))}
        </div>
        <div className="rectangals">
        {data.circles[activeIndex].rectangal.map((value, index) => {
          return (
            <div key={index} className="rectangal">
              <h1>{value.title}</h1>
              <p>{value.para}</p>
            </div>
          );
        })}
        </div>
      </div>
    </div>
  );
}
