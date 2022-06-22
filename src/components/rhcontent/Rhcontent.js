import React from "react";
import "./rhcontent.css";

const Rhcontent = ({ itemHeading, info }) => {
  return (
    <heroContainer className="bgimg sm:w-4/5">
      <div className="heroContainer sm:w-2/4">
        <h2 className="heroHeading text-3xl sm:text-5xl text-primary font-bold">{itemHeading}</h2>
        <p className="heroInfo">{info}</p>
      </div>
    </heroContainer>
  );
};

export default Rhcontent;
