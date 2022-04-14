import React from "react";
import boy from "../../images/photo-of-boy-using-vr-headset-4145356.svg";
import man from "../../images/people-working-in-front-of-the-computer-3184357.svg";
import man2 from "../../images/man-in-brown-button-up-shirt-3785079.png";
import woman1 from "../../images/woman-wearing-eyeglasses-1878522.png";
import man3 from "../../images/photography-of-a-guy-wearing-green-shirt-1222271.png";
import woman2 from "../../images/woman-smiling-at-the-camera-1181686.png";
import woman3 from "../../images/woman-in-collared-shirt-774909.png";
import Whyus from "../../components/whyus/whyUs"
import Button from "../../components/Button";
import { Link } from "react-router-dom";



function blog() {
  return (
    <div class="bg-gradient-to-b from blue-100 to white-10 "> 
      <div class="mx-auto w-12/12 sm:8 md:px-40  item-center  justify-center text-center">
        <h1 class="text-3xl sm:text-5xl font-bold mb-2 text-lg text-center ">
          Read our latest blogs
        </h1>
        <p class="text-center font-semibold">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique. Duis cursus, mi quis viverra
          ornare, eros dolor.
        </p>
      </div>
      <div class="md:flex justify-center item-center  w-9/12 mt-10 mx-20 max-w-7xl w-2xl gap-10 bg-#F0F2FE">
        <Whyus
          headLine="Our Goal"
          itemHeading="To upscale your business to the next level"
          info="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua invidunt ut labore."
        />
        <div>
          <img class="w-4xl mt-4" src={man} alt="gort" />
        </div>
      </div>
      <div class="grid grid-cols-3 w-9/12 m-auto gap-4">
        <div>
          <img src={boy} alt="gort" />
          <div class="w-full">
            <h3 class="font-bold">
              7 Automation use cases that foster excellent CX
            </h3>
            <p class="font-semibold">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </p>
            <p>Luke Matthews l November 8, 2021</p>
          </div>
        </div>
        <div>
          <img src={man2} alt="gort" />
          <div class="w-full">
            <h3 class="font-bold">
              Managing Rails application secrets with encrypted credentials
            </h3>
            <p class="font-semibold">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </p>

            <p>Luke Matthews l November 8, 2021</p>
          </div>
        </div>
        <div>
          <img src={woman1} alt="gort" />
          <div class="w-full">
            <h3 class="font-bold">
              Account-based marketing: Data-driven selection for ABM success
            </h3>
            <p class="font-semibold">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </p>

            <p>Luke Matthews l November 8, 2021</p>
          </div>
        </div>
        <div>
          <img src={man3} alt="gort" />
          <div class="w-full">
            <h3 class="font-bold"> How to Calculate Your SaaS Gross Margin</h3>
            <p class="font-semibold">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </p>

            <p>Luke Matthews l November 8, 2021</p>
          </div>
        </div>
        <div>
          <img src={woman2} alt="gort" />
          <div class="w-full">
            <h3 class="font-bold">
              The Five Main Benefits of Automating your Accounts Receivable
              Process
            </h3>
            <p class="font-semibold">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </p>

            <p>Luke Matthews l November 8, 2021</p>
          </div>
        </div>
        <div>
          <img src={woman3} alt="gort" />
          <div class="w-full">
            <h3 class="font-bold">How to Make Data-driven Pricing Decisions</h3>
            <p class="font-semibold">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </p>

            <p>Luke Matthews l November 8, 2021</p>
          </div>
        </div>
        <div>
          <img src={boy} alt="gort" />
          <div class="w-full">
            <h3 class="font-bold">
              How to Make Recurring Invoicing More Efficient
            </h3>
            <p class="font-semibold">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </p>

            <p>Luke Matthews l November 8, 2021</p>
          </div>
        </div>
        <div>
          <img src={man2} alt="gort" />
          <div class="w-full">
            <h3 class="font-bold">
              How to Reduce Checkout Abandonment for more Conversions
            </h3>
            <p class="font-semibold">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </p>

            <p>Luke Matthews l November 8, 2021</p>
          </div>
        </div>
        <div>
          <img src={woman1} alt="gort" />
          <div class="w-full">
            <h3 class="font-bold">
              10 Customer Retention Strategies for better Dwell time
            </h3>
            <p class="font-semibold">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </p>

            <p>Luke Matthews l November 8, 2021</p>
          </div>
        </div>
      </div>
      <Link to="/BlogPost">  <Button class="m-auto  sm:8  item-center  justify-center text-center" label="Free Trial" color="white" bg="primary" /></Link>
      

    </div>
  );
}

export default blog;
