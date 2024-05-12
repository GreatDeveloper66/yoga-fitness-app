import logo from './logo.svg';
import './App.css';
import { AppContext, useAppContext } from './AppContext/AppContext';


function App() {
  return (
    <Provider>
      <AppContext.Provider value={useAppContext()}>
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
        <App />
      </AppContext.Provider>
    </Provider>
    
  );
}

export default App;
