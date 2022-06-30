// import Popular from "../../Images/popular.svg";

import { useState } from "react";
import Card from "../../components/Card/Card";
import Faq from "../FAQ/Faq";

import { pricing } from "../../components/constants/index";
const plans = {
  Regular: {
    monthly: "FREE",
    yearly: "FREE",
  },
  Platinum: {
    monthly: 394,
    yearly: 1328,
  },
  Standard: {
    monthly: 234,
    yearly: 1299,
  },
};

const data = {
  id: 1,
  plan: "Something ese ",
  class: "table",
  price: "49",
  features: [
    {
      id: "1",
      title: "Local delivery",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Malesuada",
    },
    {
      id: "2",
      title: "Local delivery",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Malesuada",
    },
    {
      id: "3",
      title: "Local delivery",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Malesuada",
    }
  ],
};

const Price = () => {
  const [time, setTime] = useState("monthly");
  const [plan, setPlan] = useState(pricing);

  const handlePrice = (priceType) => {
    setTime(priceType);
    setPlan(
      plan.map((item) => {
        return {
          ...item,
          price:
            priceType === "monthly"
              ? plans[item.plan].monthly
              : plans[item.plan].yearly,
        };
      })
    );
  };
  return (
    <section id="Pricing" className="section-4 ">
      <div className="price-text">
        <h2>For the best results</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non
          tellus
          <br /> nullam ultrices netus mauris, phasellus.
        </p>
      </div>
      <div className="main-price ">
        <div className="plan-switch-container md:w-1/4">
          <span
            className={`monthly ${time === "monthly" && "active"}`}
            onClick={() => handlePrice("monthly")}
          >
            Monthly
          </span>
          <span
            className={`yearly ${time === "yearly" && "active"}`}
            onClick={() => handlePrice("yearly")}
          >
            Yearly
          </span>
        </div>
      </div>
      <div className="pricing-table">
        {plan.map((item) => (
          <Card
            key={item.id}
            plan={item.plan}
            feat={item.features}
            // img={item.img}
            price={item.price}
            cssStyle={item.class}
            time={time}
          />
        ))}
      </div>
      <Faq />
    </section>
  );
};

export default Price;
