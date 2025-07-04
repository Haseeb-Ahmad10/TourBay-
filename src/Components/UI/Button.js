import './Button.module.css';

const Button = function (props) {
  return (
    <button
      className={`btn ${props.className}`}
      onClick={props.onClick}
      disabled={props.disabled}
      type={props.type || 'button'}
    >
      {props.children}
    </button>
  );

}

export default Button;