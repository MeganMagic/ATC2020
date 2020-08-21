import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import './css/App.css';

import Home from './routes/Home';
import Tour from './routes/Tour';
import Tour2 from './routes/Tour2';
import Tour3 from './routes/Tour3';
import Detail from './routes/Detail';

function App() {
  return (
    <HashRouter>
      <Route path="/" exact={true} component={Home} />
      <Route path="/tour" exact={true} component={Tour} />
      <Route path="/tour2" exact component={Tour2} />
      <Route path="/tour3" exact component={Tour3} />
      <Route path="/detail" exact component={Detail} />
    </HashRouter>
  );
}

export default App;
