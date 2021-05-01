import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Components/Home';
import Starred from './Components/Starred';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/">
          <Starred />
        </Route>
        <Route>
          <div>Not Found 404</div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
