import  { React, useState} from "react";
import { Link } from "react-router-dom";
import boy from "../../images/photo-of-boy-using-vr-headset-4145356.svg";
import man from "../../images/people-working-in-front-of-the-computer-3184357.svg";
import man2 from "../../images/man-in-brown-button-up-shirt-3785079.png";
import woman1 from "../../images/woman-wearing-eyeglasses-1878522.png";
import man3 from "../../images/photography-of-a-guy-wearing-green-shirt-1222271.png";
import woman2 from "../../images/woman-smiling-at-the-camera-1181686.png";
import woman3 from "../../images/woman-in-collared-shirt-774909.png";
import Whyus from "../../components/whyus/whyUs";
function Blog() {
  
  const data = [
    {
      images: woman3,
      headline: "7 Automation use cases that foster excellent CX",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt.",
      date: "Luke Matthews l November 8, 2021",
    },
    {
      images: man2,
      headline: "Managing Rails application secrets with encrypted credentials",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt.",
      date: "Luke Matthews l November 8, 2021",
    },
    {
      images: man3,
      headline: "How to Make Data-driven Pricing Decisions",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt.",
      date: "Luke Matthews l November 8, 2021",
    },
    {
      images: woman1,
      headline: "Managing Rails application secrets with encrypted credentials",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt.",
      date: "Luke Matthews l November 8, 2021",
    },
    {
      images: woman2,
      headline: "How to Calculate Your SaaS Gross Margin",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt.",
      date: "Luke Matthews l November 8, 2021",
    },
    {
      images: woman3,
      headline:
        "The Five Main Benefits of Automating your Accounts Receivable Process",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt.",
      date: "Luke Matthews l November 8, 2021",
    },
    {
      images: woman1,
      headline: "How to Reduce Checkout Abandonment for more Conversions",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt.",
      date: "Luke Matthews l November 8, 2021",
    },
    {
      images: [man3],
      headline: " 10 Customer Retention Strategies for better Dwell time",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt.",
      date: "Luke Matthews l November 8, 2021",
    },
    {
      images: woman2,
      headline: "How to Calculate Your SaaS Gross Margin",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt.",
      date: "Luke Matthews l November 8, 2021",
    },
  ];

  return (
    <div className="bg-gradient-to-b from blue-100 to white-10 ">
      <div className="m-auto w-12/12  item-center  justify-center text-center">
        <h1 className="text-3xl sm:text-5xl font-bold mb-2 text-center ">
          Read our latest blogs
        </h1>
        <p className="text-center font-semibold">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique. Duis cursus, mi quis viverra
          ornare, eros dolor.
        </p>
      </div>
      <div className="md:flex justify-center item-center m-auto w-10/12 mt-10 max-w-7xl w-2xl gap-10 bg-#F0F2FE">
        <Whyus
          headLine="Our Goal"
          itemHeading="To upscale your business to the next level"
          info="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua invidunt ut labore."
        />
        <div>
          <img className="w-4xl mt-4" src={man} alt="gort" />
        </div>
      </div>
      <Link to= "/blogPost">
      <div className="sm:grid grid-cols-3 m-auto px-10 my-8 gap-4">
        {data.map((data, index) => (
          <div>
            <img src={data.images} alt="gort" />
            <div className="w-full pr-4">
              <h3 className="font-bold">{data.headline}</h3>
              <p className="font-semibold">{data.body}</p>
              <p>{data.date}</p>
            </div>
          </div>
        ))}
      </div>
      </Link>

    </div>
  );
}

export default Blog;
