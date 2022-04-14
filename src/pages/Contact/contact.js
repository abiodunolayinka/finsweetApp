import React from "react";

function contact() {
  return (
    <div class="block max-w-10 mx-10">
      <div>
        <div class=" flex gap-4 item-center">
          <input
            className="h-8 rounded p-10 text-white w-full md:w-1/4"
            type="text"
            placeholder="Enter your Email"
            style={{ backgroundColor: "#2B2E3C" }}
          />
          <input
            className="h-50 rounded p-5 text-white w-full md:w-3/12"
            type="text"
            placeholder="Enter your Email"
            style={{ backgroundColor: "#2B2E3C" }}
          />
        </div>
      </div>

      <div class="my-5">
        <input
          type="text"
          label="email"
          placeholder=""
          style={{ backgroundColor: "#2B2E3C" }}
          class="w-2/4 py-5 m-auto border-1 bg-black text-white color-"
        />
      </div>

      <div class="my-5">
        <input
          type="text"
          label="email"
          placeholder=""
          style={{ backgroundColor: "#2B2E3C" }}
          class="w-2/4 py-5 m-auto border-1 bg-black text-white color-"
        />
      </div>
      <div>
        <input
          className="h-70 rounded p-10 text-white w-full md:w-6/12"
          type="text"
          placeholder="Enter your Email"
          style={{ backgroundColor: "#2B2E3C" }}
        />
      </div>
    </div>
  );
}

export default contact;
