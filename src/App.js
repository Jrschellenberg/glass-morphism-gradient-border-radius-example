import './App.css';


function OurBoxElem({ children}) {
  return (
    <div className="App">
      <div className="App-header">
        <div className="center-horizontal">
          <div className="wrapper">
            <div className="left" />
            <div className="right" />
            <div className="top" />
            <div className="bottom" />
            <div>
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
      <OurBoxElem>
        <span>Element text is here wow!</span>
      </OurBoxElem>
  )

}

export default App;