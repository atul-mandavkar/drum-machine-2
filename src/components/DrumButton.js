import "./DrumButton.css";




const DrumButton = ({value, onClick, children}) =>{
  return <div className="drumButton" onClick={onClick}>{value}
            {children}
         </div>
};





export default DrumButton;