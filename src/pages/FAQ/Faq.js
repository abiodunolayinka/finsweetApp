
import { faq } from "../../components/constants/index";
import FaqItem from "../../components/FaqItem/FaqItem";
import { useState } from "react";

const Faq = () => {
  const [faqs, setFaqs] = useState(faq);

  const handleToggle = (id) => {
    console.log(id);

    const transformedFaq = faqs.map((item) => {
      if (item.id === id) {
        item.open = !item.open;
      } else item.open = false;
      return item;
    });
    console.log(transformedFaq);
    setFaqs(transformedFaq);
  };

  return (
    <section id="FAQ" className="section-6">
      <div class="md:flex justify-center item-center m-auto bg-faq rounded-lg p-4  w-10/12">
        <div className="more-faq  w-2/4 px-20">
          <h1 class="font-bold text-3xl md:text-5xl">Frequently Asked Questions</h1>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod <br />tempor invidunt. {" "}
            <a href="#Contact" className="link-contact">
              {" "}
              contact us
            </a>
            . We will answer to you shortly!
          </p>
        </div>

        <div className="container_1">
          {faqs.map((item) => (
            <FaqItem
              question={item.question}
              answer={item.answer}
              click={handleToggle}
              id={item.id}
              open={item.open}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Faq;
