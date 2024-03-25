import './button.scss';

function Button({ children, position, border }) {
  
  const buttonClassName = `button ${position || border || ''}`;

  return (
    <div className={buttonClassName}>
      {children}
    </div>
  );
}

export default Button;
