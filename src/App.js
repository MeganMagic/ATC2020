import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import './css/App.css';

import Home2 from './routes/Home2';

import Level from './routes/Level';
import Level2 from './routes/Level2';
import Level1 from './routes/Level1';

import Detail from './routes/Detail';


function App() {
  return (
    <HashRouter>
      <Route path="/" exact={true} component={Home2} />
      <Route path="/Level/:num" exact component={Level} />
      <Route path="/Level2" exact component={Level2} />
      <Route path="/detail" component={Detail} />
      <Route path="/Level1" exact component={Level1} />

    </HashRouter>
  );
}

export default App;
