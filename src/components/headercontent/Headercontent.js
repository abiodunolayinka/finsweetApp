import React from "react";
import heroimg from "../../images/svg-1.svg";
import "./headercontent.css";
import Rhcontent from "../rhcontent/Rhcontent";
// import FormGroup from "../../components/Form/Form";
import Button from "../Button"

function Headercontent() {
  return (
    <div className="heroContainer p-4">
      <div className="hero_content">
        <Rhcontent
          itemHeading="The Best Software to Grow your Sales and Services"
          info="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat."
        />
        <div className="w-full flex justify-center my-4">
          <input
            className="border border-gray-300 p-4 sm:w-80 rounded-md"
            type="text"
            placeholder="Enter your Email"
          />
          <Button
            label="Get Free Trial"
            color="white"
            bg="primary"
            height="100%"
          />
        </div>
      </div>
      <div className="w-full flex justify-center">
        <img className="" src={heroimg} alt="heroimg" />
      </div>
    </div>
  );
}

export default Headercontent;
