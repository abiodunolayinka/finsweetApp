import "./logo.css";

const Logo = ({ img }) => {
  return (
    <div className="logoflex">
      <div className="img-container">
        <img className="testimg" src={img} alt="img" />
      </div>
    </div>
  );
};

export default Logo;
