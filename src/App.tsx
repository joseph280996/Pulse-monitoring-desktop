import React, { ReactElement } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function Main(): ReactElement {
  return (
    <>
      <div>
        <h1>Pulse Monitoring</h1>
      </div>
      <div>
        <input
          onChange={(event) => {
            console.log('clicked');
          }}
        />
      </div>
    </>
  );
}

export default function App(): ReactElement {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Main} />
      </Switch>
    </Router>
  );
}
