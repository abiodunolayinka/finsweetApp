import React from "react";
import Button from "../../components/Button";
// import Headercontent from '../../components/headercontent/Headercontent'
// import Rhcontent from "../../components/rhcontent/Rhcontent";
import heroimg from "../../images/svg-1.svg";
import Logo2 from "../../images/Logo-1.svg";
import Logo3 from "../../images/Logo-2.svg";
import Logo4 from "../../images/Logo-3.svg";
import Logo5 from "../../images/Logo-4.svg";
import Logo6 from "../../images/Logo-5.svg";
import Logo from "../../components/logo/logo";
import Product1 from "../../images/Image (1).png";

import heroimge from "../../images/svg-2.svg";
import Whyus from "../../components/whyus/whyUs";
import Item from "../../components/Item/Item";
import icon4 from "../../images/Icon-1.svg";
import icon5 from "../../images/Icon2.svg";
import icon6 from "../../images/Icon3.png";

// const Items = [
//   {
//     Logo: icon4,
//     itemHeading: "High security to protect from piracy",
//     info: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.",
//   },
//   {
//     Logo: icon5,
//     itemHeading: "High security to protect from piracy",
//     info: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.",
//   },
//   {
//     Logo: icon6,
//     itemHeading: "High security to protect from piracy",
//     info: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.",
//   },
// ];

function Product() {
  return (
    <div>
      <div className="md:flex  w-10/12  px=auto justify-center item-center m-auto sm:mb-10 sm:p-10 ">
        <div classname=" w-6/12 flex justify-center item-center">
          <Whyus
            itemHeading="To upscale your business to the next level"
            info="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua invidunt ut labore."
          />
          <div className=" max-w-1/12 flex  item-center gap-4">
            <Button
              label="Get Free Trial"
              color="white"
              bg="primary"
              height="80%"
            />
            <Button
              label="Get Free Trial"
              color="white"
              bg="primary"
              height="80%"
            />
          </div>
        </div>
        <div class="w-11/12 sm: py-8">
          <img src={heroimg} alt="gort" />
        </div>
      </div>

      <div className="hidden sm:flex p-4 max-w-6xl mx-auto py-10 justify-between">
        <Logo img={Logo2} />
        <Logo img={Logo3} />
        <Logo img={Logo4} />
        <Logo img={Logo5} />
        <Logo img={Logo6} />
      </div>
      <div>
        <div className="heroHeading text-3xl sm:text-4xl py-8">
          Get the best out of your company with our service
        </div>
        <div>
          <div className="flex flex-col gap-4 md:w-10/12 h-2/4">
            <div className="item_container sm:mx-32">
              <div className="md:flex p-10 gap-5 ">
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
              <div className="md:flex  p-auto p-10 gap-5 ">
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
      <div class="m-auto ">
        <div class="md:flex gap-10 justify-center w-10/12 m-24 ">
          <div>
            <Whyus
              headLine="Market insights"
              itemHeading="Data-driven client feedback"
              info="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua invidunt ut labore."
            />
          </div>
          <div>
            <img class="hidden" src={Product1} alt="gort" />
          </div>
        </div>
      </div>
      <div class=" m-auto w-11/12">
        <div class="md:flex gap-10 justify-center w-10/12 m-24 ">
          <div class="mr-9">
            <img class="hidden" src={heroimge} alt="gort" />
          </div>
          <div>
            <Whyus
              headLine="Time tracker"
              itemHeading="Track your project performance"
              info="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua invidunt ut labore."
            />
          </div>
        </div>
      </div>
      <div class="m-auto ">
        <div class="md:flex gap-10 justify-center w-10/12 m-24 ">
          <div>
            <Whyus
              headLine="Lead generation"
              itemHeading="More leads that convert"
              info="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua invidunt ut labore."
            />
          </div>
          <div>
            <img class="hidden" src={Product1} alt="gort" />
          </div>
        </div>
      </div>
      <div class="b-24 m-auto w-11/12">
        <div class="md:flex flex-cols sm:flex-row gap-10 justify-center w-10/12 m-24 ">
          <div class="mr-9">
            <img class="hidden" src={heroimge} alt="gort" />
          </div>
          <div>
            <Whyus
              headLine="Remote teams"
              itemHeading="Real-time collaboration"
              info="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua invidunt ut labore."
            />
          </div>
        </div>
      </div>
      <div>
        <h1 className="heroHeading text-3xl sm:text-5xl">Features</h1>
        <div className="item_container sm:mx-32 mb-20">
          <div className="flex flex-col sm:flex-row p-10 sm:p-16 gap-10 my-4">
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
  );
}

export default Product;
