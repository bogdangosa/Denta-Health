import './CircleLogo.css';

const CircleLogo = (props) => {
  return (
    <div className="CircleLogo">
        <img src={props.src}></img>
    </div>
  );
}

export default CircleLogo;
