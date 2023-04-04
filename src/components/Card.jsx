import React from "react";

function Card({ className, title, icon }) {
  return (
    <div className={className}>
      <img src={icon} />
      <h3>{title}</h3>
    </div>
  );
}

export default Card;
