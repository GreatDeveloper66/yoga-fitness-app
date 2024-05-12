import logo from './logo.svg';
import './App.css';
import { AppContext, useAppContext } from './AppContext/AppContext';


function App() {
  return (
    <div className="App">
      <AppContext.Provider value={useAppContext()}>
      <p>App</p>
      </AppContext.Provider>
    </div>

    
    
  );
}

export default App;
