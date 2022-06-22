import Link from "../link/link";
// import Popular from "../../Images/popular.svg";

const Card = (props) => {
    return (
        <div className={props.cssStyle}>
            <div className="content">
                <div className="pro">
                    <h4>{props.plan}</h4>
                </div>
                <ul className="features">
                    {props.feat.map((item) => (
                        <li key={item.id}>
                            <span>{item.title}</span>
                            <br />
                            <div>{item.image}</div>
                            {/* <p>{item.text}</p> */}
                        </li>
                    ))}
                </ul>
                <div className="price1">
                    <span className="amount pro-price">${props.price}</span>
                    <span className="month1 plan-duration">/{props.time}</span>

                </div>
                <div className="get-btn">
                    <Link link="/contact">Get Started</Link>{" "}
                </div>
            </div>
        </div>
    );
};

export default Card;
