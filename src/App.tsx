import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function Main() {
  return (
    <div>
      <h1>Pulse Monitoring</h1>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Main} />
      </Switch>
    </Router>
  );
}
