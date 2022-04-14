import "./feature.css";

const Feature = ({ img, heading, info }) => {
  return (
    <div className="feaflex">
      <div className="img-container">
        <img className="feaimg" src={img} alt="img" />
      </div>
      <div classClass="cardcont">
        <div className="feaItem">
          <h4 className="feheading">{heading}</h4>
          <p className="feainfo">{info}</p>
        </div>
      </div>
    </div>
  );
};

export default Feature;
