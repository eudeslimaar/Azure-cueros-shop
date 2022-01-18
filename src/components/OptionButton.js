import React from "react";
import { Link } from "react-router-dom";
import "./OptionButton.css"

const OptionButton = ({
  text,
  onClick,
  disabled,
  isLink,
  to = "/",
  className,
}) => {
  return (
    <div className="button_ajust" >
      {!isLink ? (
        <button onClick={onClick} disabled={disabled}>
          {text}
        </button>
      ) : (
        <Link
          className={`OptionButton ${className}`}
          to={to}
          disabled={disabled}
        >
          {text}
        </Link>
      )}
    </div>
  );
};

export default OptionButton