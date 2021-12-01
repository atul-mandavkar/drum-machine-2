import "./SoundButton.css";




const SoundButton = ({onChange}) => {
  return (
    <div className="soundContainer">
      <h3>volumn</h3>
      <input className="soundButton" type="range" min="1" max="10" defaultValue="5" onChange={onChange} />
    </div>
  );
};






export default SoundButton;