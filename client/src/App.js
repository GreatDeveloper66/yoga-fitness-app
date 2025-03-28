
import './App.css';
import { AppContext, useAppContext } from './AppContext/AppContext';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Containers/Home';


function App() {
  return (
    <div className="App">
      <AppContext.Provider value={useAppContext()}>
        <Router>
          <Routes></Routes>
          <Route path="/" exact component={Home} />
        </Router>
      </AppContext.Provider>
    </div>

    
    
  );
}

export default App;
