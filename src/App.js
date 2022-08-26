import './App.css';
import {Howl, Howler} from 'howler';
import sound1 from "./audio/80s-Bdrum1.wav"
import sound2 from "./audio/80s-CRASH1.wav"
import sound3 from "./audio/80s-HHCLOSE1.wav"
import sound4 from "./audio/80s-HHOPEN2.wav"
import sound5 from "./audio/80s-HICONGA.wav"
import sound6 from "./audio/80s-LOWCONGA.wav"
import sound7 from "./audio/80s-SNARE1.wav"
import sound8 from "./audio/80s-TOM1.wav"
import sound9 from "./audio/80s-TOM2.wav"
import { useEffect, useState } from 'react';

const soundArray = [sound1, sound2,sound3,sound4,sound5,sound6,sound7,sound8,sound9];
const soundObjectArray = soundArray.map((soundClip) => {
const sound = new Howl({
    src: [soundClip],
    onload: () => console.log('sound loaded'),
    onloaderror: (e, msg) => console.log(e,msg)
  })
  return sound
})

const keyObject = {q:'0', w:'1', e:'2', a:'3', s:'4', d:'5', z:'6', x:'7', c:'8'}
const whichSound = ['BDRUM', 'CRUSH1', 'HHCLOSE1', 'HHOPEN2','HICONGA','LOWCONGA','SNARE1','TOM1','TOM2']

function App() {
  const [keyDisplay, setKeyDisplay] = useState('');

  const handleClick = (e) => {
    soundObjectArray[e.target.id].play()
    setKeyDisplay(whichSound[e.target.id]);
  }

  useEffect(() => {
    document.addEventListener('keydown', (ev) => {
      let keyIndex = keyObject[ev.key];
      soundObjectArray[keyIndex].play()
      setKeyDisplay(whichSound[keyIndex]);
    })
  },[])

  return (
    <div className="App">
      <div id="drum-machine">
      <div id="container-func">
          <div id="display">{keyDisplay}</div>
        </div>
        <div id="container-pads">
          <button className="drum-pad" id="0" onClick={handleClick}>Q</button>
          <button className="drum-pad" id="1" onClick={handleClick}>W</button>
          <button className="drum-pad" id="2" onClick={handleClick}>E</button>
          <button className="drum-pad" id="3" onClick={handleClick}>A</button>
          <button className="drum-pad" id="4" onClick={handleClick}>S</button>
          <button className="drum-pad" id="5" onClick={handleClick}>D</button>
          <button className="drum-pad" id="6" onClick={handleClick}>Z</button>
          <button className="drum-pad" id="7" onClick={handleClick}>X</button>
          <button className="drum-pad" id="8" onClick={handleClick}>C</button>
        </div>  
      </div>
    </div>
  );
}

export default App;
