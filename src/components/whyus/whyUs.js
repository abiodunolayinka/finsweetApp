import "./whyUs.css";

const whyUs = ({ headLine, itemHeading, info }) => {
  return (
    <div className="my-8 sm:w-9/12">
      <div className="whyContainer">
        <h5 className="whyHeadLine">{headLine}</h5>
        <h2 className="text-3xl sm:text-5xl text-primary font-bold my-6">
          {itemHeading}
        </h2>
        <p className="whyInfo">{info}</p>
      </div>
    </div>
  );
};

export default whyUs;