import Wrapper from "./components/Wrapper";
import DrumBox from "./components/DrumBox";
import DisplayBox from "./components/DisplayBox";
import DrumButton from "./components/DrumButton";
import SoundClip from "./components/SoundClip";


const App = () => {
  const playQ = () => {
    console.log("play Q");
    console.log(document.getElementsByClassName("soundClip")[0]);
    document.getElementsByClassName("soundClip")[0].play();
  };
  const playW = () => {console.log("play W");};
  const playE = () => {console.log("play E");};
  const playA = () => {console.log("play A");};
  const playS = () => {console.log("play S");};
  const playD = () => {console.log("play D");};
  const playZ = () => {console.log("play Z");};
  const playX = () => {console.log("play X");};
  const playC = () => {console.log("play C");};

  const buttonNames = [
    [
      ["Q", playQ,  "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3", "Heater-1"],
      ["W", playW, "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3", "Heater-2"],
      ["E", playE, "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3", "Heater-3"]],
    [
      ["A", playA, "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3", "Heater-4_1"],
      ["S", playS, "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3", "Heater-6"],
      ["D", playD, "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3", "Dsc_Oh"]],
    [
      ["Z", playZ, "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3", "Kick_n_Hat"],
      ["X", playX, "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3", "RP4_KICK_1"],
      ["C", playC, "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3", "Cev_H2"]]
  ]

  return (
    <Wrapper>
      <DrumBox>
        {
          buttonNames.flat().map((btn, i)=>{
            return (
              <DrumButton 
                key={i}
                value={btn[0]}
                onClick={btn[1]}
              >
                <SoundClip url={btn[2]} value={btn[3]} />
              </DrumButton>
            );
          })
        }
      </DrumBox>
      <DisplayBox></DisplayBox>
    </Wrapper>
  );
}

export default App;
