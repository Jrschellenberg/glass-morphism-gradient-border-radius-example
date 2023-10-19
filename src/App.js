import './App.css';


function GlassMorphism({ children , colorLeft, colorRight, borderRadius, borderWidth}) {
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
          <div className="wrapper">
            <div className="left" />
            <div className="right" />
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