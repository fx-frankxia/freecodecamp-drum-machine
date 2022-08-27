import './App.css';
import { useEffect, useState } from 'react';
import data from './data.js'

function App() {

  const [keyDisplay, setKeyDisplay] = useState('');

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
  })

  const handleClick = (ev) => {
    ev.target.firstChild.play();
    setKeyDisplay(ev.target.name)
  }

  const handleKeyDown = (ev) => {
    data.forEach(item => {
      if(ev.key.toUpperCase() === item.key) {
        document.getElementById(item.key).play()
        setKeyDisplay(item.name)
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
          {data.map((item, index) => {
            return (
              <button key={index} className="drum-pad" id={index} onClick={handleClick} name={item.name}>               
                <audio src={item.soundSrc} className="clip" id={item.key} ></audio>
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
