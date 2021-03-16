import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SignIn from './components/SignIn';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/*" exact>
          <SignIn />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
