import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import './css/App.css';

import Home3 from './routes/Home3';
import Level from './routes/Level';

import Level6 from './routes/Level6_ver2';
import Level5 from './routes/Level5';
import Level2 from './routes/Level2';
import Level1 from './routes/Level1';

import Detail from './routes/Detail';

import Lobby2 from './routes/Lobby2';


function App() {
  return (
    <HashRouter>
      <Route path="/" exact={true} component={Home3} />
      <Route path="/Level/:num" exact component={Level} />
      <Route path="/Level2" exact component={Level2} />
      <Route path="/Level1" exact component={Level1} />
      <Route path="/Level6" exact component={Level6} />
      <Route path="/Level5" exact component={Level5} />

      <Route path="/Lobby2" exact component={Lobby2} />


      <Route path="/detail" component={Detail} />

    </HashRouter>
  );
}

export default App;
