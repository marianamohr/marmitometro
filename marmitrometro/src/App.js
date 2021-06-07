import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Infos from './components/Infos';
import Calculos from './components/Calculos';

function App() {
  return (
    <BrowserRouter>
      <Switch>
      <div className="App">
        <Header />
        <Route exact path="/" component={Infos} />
        <Route
              exact
              path="/calculos"
              render={ (props) => <Calculos { ...props } /> }
            />
        
       

      </div>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
