import Wrapper from "./components/Wrapper";
import DrumBox from "./components/DrumBox";
import DisplayBox from "./components/DisplayBox";
import DrumButton from "./components/DrumButton";

const buttonNames = [
  ["Q", "W", "E"],
  ["A", "S", "D"],
  ["Z", "X", "C"]
]

const App = () => {
  return (
    <Wrapper>
      <DrumBox>
        {
          buttonNames.flat().map((btn, i)=>{
            return (
              <DrumButton 
                key={i}
                value={btn}
              />
            );
          })
        }
      </DrumBox>
      <DisplayBox></DisplayBox>
    </Wrapper>
  );
}

export default App;
