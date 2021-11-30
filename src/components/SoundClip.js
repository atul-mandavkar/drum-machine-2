import "./SoundClip.css";




const SoundClip = ({url, value}) => {
  return <audio className="soundClip" src={url}>{value}</audio>
};




export default SoundClip;