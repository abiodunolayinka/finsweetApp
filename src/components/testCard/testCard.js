import "./testCard.css";

const testCard = ({ info, img, name, rank }) => {
  return (
    <div className="card">
      <div classClass="cardcont">
        <div className="testItem">
          <h5 className="testinfo">{info}</h5>
        </div>
        <div className="img-container flex justify-center">
          <img className="testimg" src={img} alt="img" />
        </div>
        <div className="testItem">
          <h5 className="itemname">{name}</h5>
          <p className="rank">{rank}</p>
        </div>
      </div>
    </div>
  );
};

export default testCard;
