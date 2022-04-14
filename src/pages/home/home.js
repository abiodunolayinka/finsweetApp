import React from "react";
import "./home.css";
import Headercontent from "../../components/headercontent/Headercontent";
import Item from "../../components/Item/Item.js";
import icon1 from "../../images/Icon1.svg";
import icon2 from "../../images/Icon-2.svg";
import icon3 from "../../images/Icon-3.svg";
// import Btn from '../../components/btn/btn'
import Whyus from "../../components/whyus/whyUs";
// import logo from "../../images/arrow.svg";
import heroimge from "../../images/svg-2.svg";
import Logo2 from "../../images/Logo-1.svg";
import Logo3 from "../../images/Logo-2.svg";
import Logo4 from "../../images/Logo-3.svg";
import Logo5 from "../../images/Logo-4.svg";
import Logo6 from "../../images/Logo-5.svg";
import feature1 from "../../images/feature1.png";
import feature2 from "../../images/feature2.svg";
import feature3 from "../../images/feature3.svg";
import Testcard from "../../components/testCard/testCard";
import person1 from "../../images/person-1.svg";
import person2 from "../../images/person-2.svg";
import person3 from "../../images/person-3.svg";
import icon4 from "../../images/Icon-1.svg";
import icon5 from "../../images/Icon2.svg";
import icon6 from "../../images/Icon3.png";
import Feature from "../../components/features/feature";
import Arrow from "../../images/arrow.svg";
import Logo from "../../components/logo/logo";
import Button from "../../components/Button";



const home = () => {
  return (
    <section>
      <Headercontent />
      <section classname="section1 bg-herobg">
        <div className="p-6 text-center">
          <h4 className="heading-label">High quality</h4>
          <h1 className="text-3xl sm:text-5xl text-primary font-bold">
            We have the Best Solution for your Business
          </h1>
        </div>
        <div className="item_container sm:mx-32 mb-20">
          <div className="flex flex-col sm:flex-row p-10 sm:p-16 gap-10">
            <Item
              Logo={icon1}
              itemHeading="High security to protect from piracy"
              info="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy."
            />

            <Item
              Logo={icon2}
              itemHeading="Premium quality performance"
              info="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy."
            />

            <Item
              Logo={icon3}
              itemHeading={`Full time customer support - 24/7`}
              info="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy."
            />
          </div>
          {/* <img scr={logo} alt="Arrowimg" /> */}
        </div>
      </section>
      <div className="max-w-7xl p-4 mx-auto flex justify-center items-center flex-col md:flex-row md:gap-20">
        <Whyus
          headLine="Why should you work with us?"
          itemHeading="To upscale your business to the next level"
          info="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua invidunt ut labore."
        />
        <div className="flex flex-col gap-4">
          <Feature
            img={Arrow}
            info="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy."
          />
          <Feature
            img={Arrow}
            info="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy."
          />
          <Feature
            img={Arrow}
            info="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy."
          />
        </div>
      </div>
      <div className="Cta">
        <div className="Ctacontent md:flex:cols">
          <div>
            <Whyus
              itemHeading="To upscale your business to the next level"
              info="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua invidunt ut labore."
            />
            <Button 
            label="Get Free Trial"
            color="white"
            bg="primary"
            height="20%"
            />
          </div>
          <div>
            <img src={heroimge} alt="gort" />
          </div>
        </div>
      </div>

      <section className="hidden sm:flex p-4 max-w-6xl mx-auto py-10 justify-between">
        <Logo img={Logo2} />
        <Logo img={Logo3} />
        <Logo img={Logo4} />
        <Logo img={Logo5} />
        <Logo img={Logo6} />
      </section>
      <div className="max-w-7xl p-4 mx-auto flex justify-center items-center flex-col md:flex-row md:gap-20">
        <Whyus
          headLine="Discover more"
          itemHeading="Analyze your sales and marketing leads"
          info="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua invidunt ut labore."
        />

        <div class="md:flex flex-col gap-4 sm:w-7/12">
          <Feature
            img={feature1}
            heading="Sales Tracking"
            info="Lorem ipsum dolor sit amet, consetetur sadipscing elitr."
          />
          <Feature
            img={feature2}
            heading="Project Management"
            info="Lorem ipsum dolor sit amet, consetetur sadipscing elitr."
          />
          <Feature
            img={feature3}
            heading="Activity Report"
            info="Lorem ipsum dolor sit amet, consetetur sadipscing elitr."
          />
        </div>
      </div>
      <feature>
        <h1 className="heroHeading text-2xl sm:text-5xl">Features</h1>
        <div className="item_container sm:mx-32 mb-20">
          <div className="flex flex-col sm:flex-row p-10 sm:p-10 gap-10 my-4">
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
      </feature>
      <testimonial>
        <div className="heroHeading text-3xl p-4 sm:text-5xl">
          The stunning results our customers have experienced
        </div>
        <div className="flexcard flex-col md:flex-row p-4">
          <Testcard
            info="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
            img={person1}
            name="Ron Wood"
            rank="CEO"
          />

          <Testcard
            info="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
            img={person2}
            name="Mark Mason"
            rank="Marketing Manager"
          />

          <Testcard
            info="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
            img={person3}
            name="Sam Preson"
            rank="CTO"
          />
        </div>
      </testimonial>
    </section>
  );
};

export default home;
