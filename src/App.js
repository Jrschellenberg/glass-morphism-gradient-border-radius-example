import { useRef, useEffect, useState } from 'react';
import { LineLeft, LineRight, } from './components';
import './App.scss';


function GlassMorphism({ children , colorLeft, colorRight, borderRadius, borderWidth}) {
  const [height, setHeight] = useState(0);
  const ref = useRef(null)

  useEffect(() => {
    if(!ref?.current?.clientHeight){
      return;
    }
    setHeight(ref?.current?.clientHeight)
  }, [setHeight])

  return (
    <div className="wrapper"
         style={{
           '--color-left': colorLeft ? colorLeft : "inherit",
           '--color-right': colorRight ? colorRight : "inherit",
           '--border-radius': borderRadius ? borderRadius : "inherit",
           '--border-width': borderWidth ? borderWidth : "inherit",
         }}

         ref={ref}>
      <div className="left" >
        <LineLeft
          height={height}
        />
      </div>
      <div className="right" >
        <LineRight
            height={height}
        />
      </div>

      <div className="top" />
      <div className="bottom" />
      <div className="glass-morphism">
        {children}
      </div>
    </div>

  );
}

function App () {
  return (
      <GlassMorphism
      >
      </GlassMorphism>
  )

}

export default App;