// import React from 'react'
import "./item.css";

const Item = ({ Logo, itemHeading, info }) => {
  return (
    <div className="pb-4">
      <img className="" src={Logo} alt="Logo" />

      <div className="">
        <h2 className="text-3xl font-bold my-3 text-primary">{itemHeading}</h2>
        <p className="text-primary font-semibold">{info}</p>
      </div>
    </div>
  );
};

export default Item;
