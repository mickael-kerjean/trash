import React, { useContext } from 'react';
import './App.css';
import { stateManager, configContext } from "./model";

const Debug = stateManager(function(props) {
    return (
        <React.Fragment>
          <strong onClick={ () => props.dispatch("CLEAR") }>GLOBAL STATE (HOC)</strong>
          <pre>{ JSON.stringify(props.state, null, 4) }</pre>

          <br/>
          
          <strong>SITECORE CONFIG (WITH CONTEXT)</strong>
          <pre>{ JSON.stringify(useContext(configContext), null, 4) }</pre>

          <br/>

          <button onClick={() => window.localStorage.removeItem("state")}>LOCALSTORAGE CLEAR</button>
        </React.Fragment>
    );  
});

function App(){
    return (
        <div className="App">
		  <header className="App-header">
            <Debug />
          </header>
        </div>
    );
}

export default App;
