import React, {useState} from "react";
import Wrapper from "./components/Wrapper";
import DrumBox from "./components/DrumBox";
import DisplayBox from "./components/DisplayBox";
import DrumButton from "./components/DrumButton";
import SoundClip from "./components/SoundClip";
import PowerButton from "./components/PowerButton";
import DisplayScreen from "./components/DisplayScreen";
import SoundButton from "./components/SoundButton";


const App = () => {
  let [res, setRes] = useState({
    powVal: -1
  });
  const powerChange = () => {
    const p1 = document.getElementById("powerIcon");
    // To make screen content invisible
    document.getElementsByClassName("displayScreen")[0].innerHTML="";
    if(res.powVal < 0){
      console.log("on");
      p1.style.color="aqua";
    }
    else{
      console.log("off");
      p1.style.color="salmon";
    }
    setRes({
      ...res,
      powVal: res.powVal * -1
    });
  }
  const soundChange = () =>{
    console.log(document.getElementsByClassName("soundButton")[0].value);
    // The volume is starting from 0.1 to 1 so
    let v2 = document.getElementsByClassName("soundButton")[0].value * 0.1; 
    const aud = document.querySelectorAll("audio");
    for(let i = 0; i < aud.length; i++){
      aud[i].volume=v2;
    }
  }

  const playQ = () => {
    if(res.powVal === 1){
      document.getElementsByClassName("soundClip")[0].play();
      document.getElementsByClassName("displayScreen")[0].innerHTML=document.getElementsByClassName("soundClip")[0].innerHTML;
    }
  };
  const playW = () => {
    if(res.powVal === 1){
      document.getElementsByClassName("soundClip")[1].play();
      document.getElementsByClassName("displayScreen")[0].innerHTML=document.getElementsByClassName("soundClip")[1].innerHTML;
    }
  };
  const playE = () => {
    if(res.powVal === 1){
      document.getElementsByClassName("soundClip")[2].play();
      document.getElementsByClassName("displayScreen")[0].innerHTML=document.getElementsByClassName("soundClip")[2].innerHTML;
    }
  };
  const playA = () => {
    if(res.powVal === 1){
      document.getElementsByClassName("soundClip")[3].play();
      document.getElementsByClassName("displayScreen")[0].innerHTML=document.getElementsByClassName("soundClip")[3].innerHTML;
    }
  };
  const playS = () => {
    if(res.powVal === 1){
      document.getElementsByClassName("soundClip")[4].play();
      document.getElementsByClassName("displayScreen")[0].innerHTML=document.getElementsByClassName("soundClip")[4].innerHTML;
    }
  };
  const playD = () => {
    if(res.powVal === 1){
      document.getElementsByClassName("soundClip")[5].play();
      document.getElementsByClassName("displayScreen")[0].innerHTML=document.getElementsByClassName("soundClip")[5].innerHTML;
    }
  };
  const playZ = () => {
    if(res.powVal === 1){
      document.getElementsByClassName("soundClip")[6].play();
      document.getElementsByClassName("displayScreen")[0].innerHTML=document.getElementsByClassName("soundClip")[6].innerHTML;
    }
  };
  const playX = () => {
    if(res.powVal === 1){
      document.getElementsByClassName("soundClip")[7].play();
      document.getElementsByClassName("displayScreen")[0].innerHTML=document.getElementsByClassName("soundClip")[7].innerHTML;
    }
  };
  const playC = () => {
    if(res.powVal === 1){
      document.getElementsByClassName("soundClip")[8].play();
      document.getElementsByClassName("displayScreen")[0].innerHTML=document.getElementsByClassName("soundClip")[8].innerHTML;
    }
  };

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
      <DisplayBox>
        <PowerButton onClick={powerChange} />
        <DisplayScreen />
        <SoundButton onChange={soundChange} />
      </DisplayBox>
    </Wrapper>
  );
}

export default App;
