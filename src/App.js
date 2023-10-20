import { useRef } from 'react';
import './App.css';

import { LineLeft, LineRight, } from './components'


function GlassMorphism({ children , colorLeft, colorRight, borderRadius, borderWidth}) {
  const ref = useRef()

  console.log("ref", ref.current);
  return (
    <div className="App"
      style={{
        '--color-left': colorLeft ? colorLeft : "inherit",
        '--color-right': colorRight ? colorRight : "inherit",
        '--border-radius': borderRadius ? borderRadius : "inherit",
        '--border-width': borderWidth ? borderWidth : "inherit",
      }}

    >
      <div className="App-header">
        <div className="center-horizontal">
          <div className="wrapper" ref={ref}>
            <div className="left" >
              <LineLeft
                height={484}
              />
            </div>
            <div className="right" >
              <LineRight />
            </div>

            <div className="top" />
            <div className="bottom" />
            <div className="glass-morphism">
              {children}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

function App () {
  return (
      <GlassMorphism

        borderRadius="20px"
      >
        <span>Element text is here wow!</span>
      </GlassMorphism>
  )

}

export default App;