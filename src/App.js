import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './App.css';

import Home from './routes/Home';
import Tour from './route/Tour';

function App() {
  return (
    <HashRouter>
      <Route path="/" exact={true} component={Home} />
      <Route path="/tour" exact={true} component={Tour} />
    </HashRouter>
  );
}

export default App;
