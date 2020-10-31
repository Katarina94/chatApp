import React from "react";
import PropTypes from "prop-types";

/* Styles */
import "./Button.scss";

const Button = ({ children }) => {
  return <button className="Button">test</button>;
};

Button.propTypes = {
  children: PropTypes.string,
};

Button.defaultProps = {
  children: "",
};

export default Button;
