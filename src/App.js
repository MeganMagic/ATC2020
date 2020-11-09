import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import './css/App.css';

import Home3 from './routes/Home3';

import Lobby2 from './routes/Lobby2';
import Level1 from './routes/Level1';

import Detail from './routes/Detail';



function App() {
  return (
    <HashRouter>
      <Route path="/" exact={true} component={Home3} />
      <Route path="/Level1" exact component={Level1} />

      <Route path="/Lobby2" exact component={Lobby2} />


      <Route path="/detail" component={Detail} />

    </HashRouter>
  );
}

export default App;
