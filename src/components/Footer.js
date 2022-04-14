import React from "react";
import Button from "./Button";
import TwitterLogo from "../images/Twitter.svg";
import FacebookLogo from "../images/Facebook.svg";
import InstagramLogo from "../images/Instagram.svg";
import LinkedInLogo from "../images/LinkedIn.svg";
import { Link } from "react-router-dom";


export default function Footer() {
  return (
    <div>
      <div
        className="py-20 px-4 mt-16"
        style={{
          background:
            "radial-gradient(483.9% 2719.65% at -49.5% -250%, #D798E1 17.55%, #9BFFA5 27.56%, #AED3FF 49.89%, #C9D4EF 56.53%, #CACFFA 65.69%)",
          backdropFilter: "blur(4px)",
        }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-primary mb-5 text-xl sm:text-5xl font-bold">
            Are you ready to grow your business with us?
          </h1>
          <p className="mb-5 text-primary text-sm font-semibold">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy.
          </p>
          <Link to="/Pricing">  <Button label="View Pricing" color="white" bg="primary" /></Link>
        </div>
      </div>
      <div className="bg-primary p-10 flex flex-col gap-10 md:gap-0 md:flex-row justify-between">
        <ul className="no-underline text-white text-sm">
          <li className="font-semibold mb-2 text-lg">Company</li>
          <li className="mb-2">About Us</li>
          <li className="mb-2">Why Choose Us</li>
          <li className="mb-2">Pricing</li>
          <li className="mb-2">Testimonial</li>
        </ul>
        <ul className="no-underline text-white text-sm">
          <li className="font-semibold mb-2 text-lg">Resources</li>
          <li className="mb-2">Privacy Policy</li>
          <li className="mb-2">Terms and Conditions</li>
          <li className="mb-2">Blog</li>
          <li className="mb-2">Contact Us</li>
        </ul>
        <ul className="no-underline text-white text-sm">
          <li className="font-semibold mb-2 text-lg">Product</li>
          <li className="mb-2">Product Management</li>
          <li className="mb-2">Time Tracker</li>
          <li className="mb-2">Time Schedule</li>
          <li className="mb-2">Lead Generate</li>
          <li className="mb-2">Remote Collaboration</li>
        </ul>
        <div className="">
          <svg
            width="139"
            height="32"
            viewBox="0 0 139 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.17823 5.328V11.7287C2.17823 12.7786 2.17823 13.9581 0 13.9581V15.6873V15.7106V17.3967C2.17823 17.3967 2.17823 18.5753 2.17823 19.6259V26.0261C2.17823 30.9934 4.89982 31.3539 9.52762 31.3539V27.4906C7.34939 27.4906 6.53333 27.1699 6.53333 25.9306V19.5934C6.53333 18.1299 6.63379 16.6014 5.35638 15.6767C6.63379 14.7534 6.53333 13.2247 6.53333 11.76V5.424C6.53333 4.186 7.35007 3.864 9.52762 3.864V9.16678e-07C4.89982 -0.000664831 2.17823 0.360001 2.17823 5.328ZM14.4247 5.12066C13.2347 6.126 12.6401 7.57 12.6401 9.45134V11.1413H10.1544V14.6727H12.6401V27.4699H18.0416V14.6727H21.3879V11.1413H18.0416V9.936C18.0416 9.32266 18.2221 8.85 18.583 8.518C18.9439 8.186 19.4599 8.02066 20.129 8.02066C20.4577 8.02066 22.137 8.026 22.137 8.026V3.928C22.137 3.928 19.1386 3.89534 18.7101 3.89534C17.4061 3.89534 15.6146 4.114 14.4247 5.12066ZM24.5128 8.01134H29.915V3.928H24.5128V8.01134ZM24.5128 27.4706H29.915V11.1413H24.5128V27.4706ZM43.2359 10.8393C42.2161 10.8393 41.2913 11.0687 40.463 11.5259C39.6346 11.9833 38.9389 12.6207 38.3757 13.4346L38.1686 11.1413H33.117V27.4699H38.4871V15.7299C38.7632 15.428 39.0953 15.1901 39.4829 15.0207C39.8704 14.8513 40.3139 14.764 40.8136 14.764C41.6105 14.764 42.2134 14.9579 42.6221 15.3447C43.0309 15.7327 43.2359 16.3927 43.2359 17.3294V27.4713H48.6216V17.3447C48.6216 15.0807 48.1459 13.4306 47.1959 12.3941C46.2451 11.3573 44.9247 10.8393 43.2359 10.8393ZM64.9102 19.4193C63.8959 18.64 62.3362 18.0527 60.2331 17.6607C58.8949 17.4207 58.0043 17.1473 57.5642 16.8454C57.1233 16.5447 56.9026 16.176 56.9026 15.744C56.9026 15.2906 57.0939 14.9207 57.476 14.628C57.8581 14.336 58.3311 14.1894 58.8942 14.1894C59.659 14.1894 60.2141 14.356 60.5592 14.688C60.9043 15.02 61.0773 15.508 61.0773 16.1513H66.3038L66.3359 16.0614C66.4001 14.52 65.7522 13.2673 64.3921 12.296C63.032 11.3247 61.2043 10.8387 58.9099 10.8387C56.7317 10.8387 55.0059 11.34 53.7306 12.3414C52.4559 13.3426 51.8189 14.5614 51.8189 15.9993C51.8189 17.3574 52.3288 18.4299 53.3486 19.2139C54.3682 19.9993 55.8822 20.5774 57.8902 20.9499C59.1649 21.2014 60.0438 21.4854 60.5271 21.8019C61.011 22.1193 61.2522 22.48 61.2522 22.88C61.2522 23.3734 61.0663 23.7546 60.6945 24.0193C60.3226 24.2859 59.7759 24.4214 59.0535 24.4214C58.1827 24.4214 57.5102 24.2487 57.0379 23.9073C56.5649 23.5661 56.3182 23.0073 56.297 22.2327H51.4211L51.3897 22.3226C51.3262 23.712 51.9761 24.9699 53.3417 26.096C54.7066 27.2233 56.5629 27.7859 58.9106 27.7859C61.1736 27.7859 62.9923 27.3106 64.3681 26.3593C65.7447 25.4087 66.4322 24.2 66.4322 22.7301C66.4322 21.3026 65.9245 20.1986 64.9102 19.4193ZM84.1369 20.604H84.0413L81.2055 11.1427H77.8107L75.0064 20.6807H74.9107L73.0147 11.1427H68.0432L72.1064 27.4713H76.6488L79.4681 18.8094H79.5638L82.3688 27.4713H86.9262L90.9737 11.1427H86.0022L84.1369 20.604ZM100.118 10.8392C97.5576 10.8293 95.5886 11.612 94.2134 13.1866C92.8362 14.7607 92.1486 16.7906 92.1486 19.2753V19.8494C92.1486 22.1226 92.9059 24.0146 94.4184 25.524C95.9323 27.0339 97.9595 27.788 100.499 27.788C101.869 27.788 103.152 27.6146 104.347 27.2673C105.542 26.9207 106.517 26.4859 107.271 25.9626L105.996 22.8534C105.061 23.2266 104.288 23.4873 103.677 23.6386C103.066 23.7906 102.25 23.8659 101.231 23.8659C100.221 23.8659 99.4146 23.5967 98.809 23.0586C98.2029 22.5186 97.8426 21.8327 97.725 20.9979L97.7578 20.9066H107.605V18.2339C107.605 15.9607 106.94 14.16 105.613 12.8313C104.287 11.5033 102.454 10.8392 100.118 10.8392ZM102.349 17.7221H97.7114L97.6635 17.6473C97.749 16.7713 97.9855 16.072 98.3737 15.5487C98.7606 15.0266 99.3429 14.7647 100.119 14.7647C100.883 14.7647 101.445 14.9859 101.808 15.4287C102.169 15.8713 102.35 16.5054 102.35 17.3299L102.349 17.7221ZM118.192 10.8392C115.631 10.8293 113.664 11.612 112.287 13.1866C110.912 14.7607 110.223 16.7906 110.223 19.2753V19.8494C110.223 22.1226 110.98 24.0146 112.494 25.524C114.009 27.0339 116.034 27.788 118.573 27.788C119.944 27.788 121.227 27.6146 122.423 27.2673C123.618 26.9207 124.592 26.4859 125.346 25.9626L124.072 22.8534C123.137 23.2266 122.365 23.4873 121.753 23.6386C121.141 23.7906 120.326 23.8659 119.306 23.8659C118.297 23.8659 117.49 23.5967 116.885 23.0586C116.278 22.5186 115.918 21.8327 115.8 20.9979L115.832 20.9066H125.68V18.2339C125.68 15.9607 125.016 14.16 123.688 12.8313C122.36 11.5033 120.529 10.8392 118.192 10.8392ZM120.422 17.7221H115.786L115.738 17.6473C115.824 16.7713 116.059 16.072 116.447 15.5487C116.833 15.0266 117.416 14.7647 118.192 14.7647C118.957 14.7647 119.52 14.9859 119.882 15.4287C120.245 15.8713 120.424 16.5054 120.424 17.3299V17.7226H120.422V17.7221ZM136.745 23.2353C136.077 23.2353 135.56 23.0701 135.199 22.7381C134.839 22.4061 134.657 21.932 134.657 21.3186V14.7014H137.459V11.1687H134.657V3.902H129.256V11.1687H126.769V14.7014H129.256V21.8033C129.256 23.6847 129.85 25.1287 131.04 26.1353C132.229 27.1426 134.019 27.3607 135.326 27.3607C135.755 27.3607 138.753 27.328 138.753 27.328V23.2301C138.753 23.2301 137.075 23.2353 136.745 23.2353Z"
              fill="white"
            />
          </svg>
          <h3 className="text-white text-lg my-6">
            Subscribe to our Newsletter
          </h3>
          <div className="h-14 flex">
            <input
              className="h-4/12 rounded px-4 text-white w-full md:w-80"
              type="text"
              placeholder="Enter your Email"
              style={{ backgroundColor: "#2B2E3C" }}
            />
            <Button label="Subscribe" color="black" bg="white" height="100%" />
          </div>
        </div>
      </div>
      {/* divider */}
      <div className="flex items-center gap-4 px-4 py-10 sm:p-10 bg-primary">
        <div className="h-0.5 bg-divider w-full flex">&nbsp;</div>
        <h6 className="text-sm text-white text-center whitespace-nowrap">
          &copy; Copyright Finsweet 2022
        </h6>
        <img src={FacebookLogo} alt="fb" />
        <img src={TwitterLogo} alt="fb" />
        <img src={InstagramLogo} alt="fb" />
        <img src={LinkedInLogo} alt="fb" />
        <div className="h-0.5 bg-divider w-full">&nbsp;</div>
      </div>
    </div>
  );
}
