import './App.css';
import { useEffect, useState } from 'react';
import data from './data.js'
import sound1 from "./audio/mp3/80s-Bdrum1.mp3"
import sound2 from "./audio/mp3/80s-CRASH1.mp3"
import sound3 from "./audio/mp3/80s-HHCLOSE1.mp3"
import sound4 from "./audio/mp3/80s-HHOPEN2.mp3"
import sound5 from "./audio/mp3/80s-HICONGA.mp3"
import sound6 from "./audio/mp3/80s-LOWCONGA.mp3"
import sound7 from "./audio/mp3/80s-SNARE1.mp3"
import sound8 from "./audio/mp3/80s-TOM1.mp3"
import sound9 from "./audio/mp3/80s-TOM2.mp3"

const soundSrcArray = [sound1,sound2,sound3,sound4,sound5,sound6,sound7,sound8,sound9];


function App() {

  const [keyDisplay, setKeyDisplay] = useState('');

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
  })

  const handleClick = (ev) => {
    ev.target.firstChild.play();
    setKeyDisplay(ev.target.innerText)
  }

  const handleKeyDown = (ev) => {
    data.forEach(sound => {
      if(ev.key.toUpperCase() === sound.key) {
        document.getElementById(sound.key).play()
        setKeyDisplay(ev.key.toUpperCase())
      }
    })

  }

  return (
    <div className="App">
      <div id="drum-machine">
        <div id="container-func">
            <div id="display">{keyDisplay}</div>
        </div>
        <div id="container-pads">
          {soundSrcArray.map((eachSrc, index) => {
            return (
              <button key={index} className="drum-pad" id={index} onClick={handleClick}>               
                <audio src={eachSrc} className="clip" id={data[index].key} ></audio>
                {data[index].key}                
              </button>
            )
          })}
        </div>  
      </div>
    </div>
  );
}

export default App;
