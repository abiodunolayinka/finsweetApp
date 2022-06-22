import React from "react";
import Tele from "../../images/tele.svg";
import Email from "../../images/email.svg";
import Msg from "../../images/msg.svg";

function contact() {
  return (
    <div>
      
        <h1 classname="m-auto text-5xl ">Get in touch with us</h1>
  
      <div className="bg-faq  m-auto rounded-2xl  w-10/12">
        <div class="w-6/10 px-44 justify-center pt-24 pb-8">
          <h1 className="font-primary text-5xl mb-4 bolder">
            Drop us a message
          </h1>
          <p className="font-primary text-xl ">
            We will get back to you as soon as possible.
          </p>
        </div>
        <div class="md:flex flex-cols justify-center pb-24 gap-10 m-auto ">
          <div className="md:w-2/4 w-8/10 ">
            <div class=" md:flex flex-cols gap-4 w-full item-center">
              <input
                className=" rounded  border border-black text-black mb-4 sm:mb-0 py-4 px-4 text-lg w-full md:w-7/12"
                type="text"
                placeholder="Full Name "
              />
              <input
                className=" rounded border border-black text-black py-4 px-4 text-lg w-full md:w-7/12"
                type="text"
                placeholder="Company Name"
              />
            </div>

            <div class="my-5">
              <input
                type="text"
                label="email"
                placeholder="Work Email"
                class="w-full py-4 px-4 text-lg m-auto border border-black  text-black color-"
              />
            </div>

            <div class="my-5">
              <input
                type="text"
                label="text"
                placeholder="Subject"
                class="w-full py-4 px-4 text-lg m-auto border border-black  text-black color-"
              />
            </div>
            <div>
              <input
                className="pb-48 rounded p-10 border border-black px-4 text-lg text-black w-full"
                type="text"
                placeholder="Text"
              />
            </div>
            <button className="w-full bg-black text-white text-3xl rounded mt-5 py-4 m-auto px-4">
              send
            </button>
          </div>
          <div classname="w-2/4 ">
            <div className="flex justify-center gap-4 w-full mb-4 items-center">
              <div>
                <img src={Tele} alt="tele" />
              </div>
              <div>
                <h3 className="font-primary text-xl font-bold ">+ 1800 145 276</h3>
                <p class="text-lg">Free support</p>
              </div>
            </div>
            <div className="flex justify-center gap-4 w-full  mb-4 items-center">
              <div>
                <img src={Email} alt="tele" />
              </div>
              <div>
                <h3 className="font-primary text-xl font-bold mb-4">finsweet@gmail.com</h3>
                <p class="text-lg">Help Email support</p>
              </div>
            </div>
            <div className="flex justify-center gap-4 w-full items-center">
              <div>
                <img src={Msg} alt="tele" />
              </div>
              <div>
                <h3 className="font-primary text-xl font-bold mb-4">sales@finsweet.com</h3>
                <p class="text-lg">Sales Enquiry</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default contact;
