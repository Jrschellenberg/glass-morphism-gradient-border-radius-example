import { useRef, useEffect, useState } from 'react';
import './App.scss';

import { LineLeft, LineRight, } from './components'


function GlassMorphism({ children , colorLeft, colorRight, borderRadius, borderWidth}) {
  const [height, setHeight] = useState(0);
  const ref = useRef(null)

  useEffect(() => {
    if(!ref?.current?.clientHeight){
      return;
    }
    setHeight(ref?.current?.clientHeight)

    console.log("ref", ref?.current?.clientHeight);
  }, [setHeight])

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
                height={height}
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