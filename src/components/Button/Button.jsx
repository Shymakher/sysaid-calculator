const Button = ({ className, name, buttonType, onClick, id }) => {
  return (
    <button className={className} key={id} type={buttonType} onClick={onClick}>
      {name}
    </button>
  );
};

Button.defaultProps = {
  buttonType: "button",
  className: "",
  id: "",
  onClick: () => {},
};

export default Button;
