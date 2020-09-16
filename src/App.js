import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import './css/App.css';

import Home2 from './routes/Home2';
import Level from './routes/Level';
import Level2 from './routes/Level2';
import Detail from './routes/Detail';


function App() {
  return (
    <HashRouter>
      <Route path="/" exact={true} component={Home2} />
      <Route path="/Level/:num" exact component={Level} />
      <Route path="/Level2" exact component={Level2} />
      <Route path="/detail" component={Detail} />

    </HashRouter>
  );
}

export default App;
