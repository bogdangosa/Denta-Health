import './Button.css';

const Button = (props) => {
  return (
    <div className={"Button "+props.className} onClick={()=>props.onClick()}>
        <p>{props.children}</p>
    </div>
  );
}

export default Button;
