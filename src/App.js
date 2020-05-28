import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { VideoList, CreateVideo, UpdateVideo } from './videoFeature';
import About from './about';
import NotFound from './notFound';
import Player from './player';

const App = () => (
  <Router>
    <Switch>
      <Route path="/video/create">
        <CreateVideo />
      </Route>
      <Route path="/video/:id/update">
        <UpdateVideo />
      </Route>
      <Route path="/video/:id">
        <Player />
      </Route>
      <Route exact path="/about">
        <About />
      </Route>
      <Route path="/">
        <VideoList />
      </Route>
      <Route path="**">
        <NotFound />
      </Route>
    </Switch>
  </Router>
);

export default App;
