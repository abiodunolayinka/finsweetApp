import { useState } from "react";

const FaqItem = (props) => {
  const [click, setClick] = useState(true);
  const handleClick = () => {
    setClick(!click);
  };

  return (
    <div className="wrapper_1">
      <button className="toggle_1" onClick={handleClick}>
        <p> {props.question}</p>
        {click ? (
          <i className="fa fa-plus icon" >
            ...
          </i>
        ) : (
          <i>...</i>
        )}
      </button>
      {!click ? (
        <div>
          <p>{props.answer}</p>
        </div>
      ) : (
        null
      )}
    </div>
  );
};

export default FaqItem;

// components
// containers/pages
