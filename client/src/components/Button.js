import PropTypes from "prop-types";

const Button = ({ classes, text, btnType, clickAction }) => {
  return (
    <input type={btnType} value={text} className={`btn mb-3 ${classes}`} onClick={ clickAction}/>
  );
};

Button.defaultProps = {
  classes: "btn-primary",
};

Button.propTypes = {
  text: PropTypes.string,
  classes: PropTypes.string,
  btnType: PropTypes.string,
};

export default Button;
