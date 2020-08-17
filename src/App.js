import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import './css/App.css';

import Home from './routes/Home';
import Tour from './routes/Tour';
import Tour2 from './routes/Tour2';

function App() {
  return (
    <HashRouter>
      <Route path="/" exact={true} component={Home} />
      <Route path="/tour" exact={true} component={Tour} />
      <Route path="/tour2" exact component={Tour2} />
    </HashRouter>
  );
}

export default App;
