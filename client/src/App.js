import logo from './logo.svg';
import './App.css';
import { AppContext, useAppContext } from './AppContext/AppContext';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Containers/Home';


function App() {
  return (
    <div className="App">
      <AppContext.Provider value={useAppContext()}>
        <Router>
          <Switch>
            <Route path="/" component={Home} />
          </Switch>
        </Router>
      </AppContext.Provider>
    </div>

    
    
  );
}

export default App;
