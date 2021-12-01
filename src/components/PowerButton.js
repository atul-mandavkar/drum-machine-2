import "./PowerButton.css";




const PowerButton = ({onClick}) => {
  return(
    <div className="powerContainer">
      <h3>Power Button</h3>
      <i className="fa fa-power-off" id="powerIcon"></i>
      <input type="checkbox" className="powerButton" onClick={onClick} />      
    </div>
  );
};





export default PowerButton;