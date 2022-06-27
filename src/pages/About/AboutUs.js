import React from "react";
import Whyus from "../../components/whyus/whyUs";
import person3 from "../../images/img1.svg";
import person2 from "../../images/img2.png";
import person1 from "../../images/img3.svg";
import Item from "../../components/Item/Item";
import icon4 from "../../images/Icon-1.svg";
import icon5 from "../../images/Icon2.svg";
import icon6 from "../../images/Icon3.png";
import man1 from "../../images/man-wearing-blue-crew-neck-t-shirt-2379005.png";
import man2 from "../../images/man-in-brown-button-up-shirt-3785079.png";
import woman1 from "../../images/woman-wearing-eyeglasses-1878522.png";
import man3 from "../../images/photography-of-a-guy-wearing-green-shirt-1222271.png";
import woman2 from "../../images/woman-smiling-at-the-camera-1181686.png";
import woman3 from "../../images/woman-in-collared-shirt-774909.png";

function AboutUs() {
  return (
    <div>
      <div className="m-auto w-7/12  items-center  justify-center  py-10 text-center">
        <h1 className=" sm:text-5xl font-bold mb-2 text-2xl text-center ">
          We are proud of our products
        </h1>
        <p className="text-center font-semibold">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua.
        </p>
      </div>
      <div className="flexcard flex-col sm:flex-row p-4">
        <div>
          <img src={person1} alt="gort" />
        </div>
        <div>
          <img src={person2} alt="gort" />
        </div>
        <div>
          <img src={person3} alt="gort" />
        </div>
      </div>                                     

      <div className="w-10/12 font-primary  sm: m-auto ">

        <Whyus
          headLine="About Us"
          itemHeading="We’re a team of data analysts"
          info="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua invidunt ut labore."
        />
      </div>
      <div className="md:flex justify-center item-center mt- m-auto bg-faq p-4 md:p-24 w-full w-2xl gap-10 ">
        <Whyus
          headLine="Our Goal"
          itemHeading="To upscale your business to the next level"
          info="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua invidunt ut labore."
        />
        <Whyus
          headLine="Our Vison"
          itemHeading="To upscale your business to the next level"
          info="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua invidunt ut labore."
        />
      </div>
      <div>
        <div className="m-auto max-w-9/12 item-center justify-center py-10 ">
          <h1 className="text-3xl sm:text-5xl font-bold mb-2 text-lg text-center ">
            We are proud of our products
          </h1>
          <p className="text-center font-semibold">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua.
          </p>
        </div>
        <div>
          <div className="flex flex-col gap-4">
            <div className="item_container sm:mx-32 mb-20">
              <div className="flex flex-col sm:flex-row p-5 sm:p-10 gap-5 ">
                <Item
                  Logo={icon4}
                  itemHeading="High security to protect from piracy"
                  info="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy."
                />
                <Item
                  Logo={icon5}
                  itemHeading="High security to protect from piracy"
                  info="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy."
                />
                <Item
                  Logo={icon6}
                  itemHeading="High security to protect from piracy"
                  info="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy."
                />
              </div>
              <div className="flex flex-col sm:flex-row p-5 sm:p-10 gap-5 ">
                <Item
                  Logo={icon4}
                  itemHeading="High security to protect from piracy"
                  info="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy."
                />
                <Item
                  Logo={icon5}
                  itemHeading="High security to protect from piracy"
                  info="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy."
                />
                <Item
                  Logo={icon6}
                  itemHeading="High security to protect from piracy"
                  info="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:flex justify-center item-center mt-4 m-auto w-11/12 gap-8">
        <Whyus
          itemHeading="Our talented Team"
          info="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat."
        />
        <div className="sm:grid grid-cols-3 mx-auto px-20 gap-4">
          <div>
            <img src={man1} alt="gort" />
            <h3 className="font-bold">Blake Matthews</h3>
            <p className="font-semibold">CEO & Co-Founder</p>
          </div>
          <div>
            <img src={man2} alt="gort" />
            <h3  className="font-bold">Blake Matthews</h3>
            <p className="font-semibold">CEO & Co-Founder</p>
          </div>
          <div>
            <img src={woman1} alt="gort" />
            <h3 className="font-bold">Blake Matthews</h3>
            <p className="font-semibold">CEO & Co-Founder</p>
          </div>
          <div>
            <img src={man3} alt="gort" />
            <h3 className="font-bold">Blake Matthews</h3>
            <p className="font-semibold">CEO & Co-Founder</p>
          </div>
          <div>
            <img src={woman2} alt="gort" />
            <h3 className="font-bold">Blake Matthews</h3>
            <p className="font-semibold">CEO & Co-Founder</p>
          </div>
          <div>
            <img src={woman3} alt="gort" />
            <h3 className="font-bold">Blake Matthews</h3>
            <p className="font-semibold">CEO & Co-Founder</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
