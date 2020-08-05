import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import './App.css';

import Home from './routes/Home';
import Tour from './routes/Tour';

function App() {
  return (
    <HashRouter>
      <Route path="/" exact={true} component={Home} />
      <Route path="/tour" exact={true} component={Tour} />
    </HashRouter>
  );
}

export default App;
