import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Articles from './pages/Articles';
import Navigation from './comonents/navigation/Navigation';

const App = () => {
  return (
    <>
      <Navigation></Navigation>
      <Switch>
        <Route exact path="/simple-blog">
          <Home />
        </Route>
        <Route exact path="/simple-blog/about">
          <About />
        </Route>
        <Route path="/simple-blog/articles/:articleId">
          <Articles />
        </Route>
      </Switch>
    </>
  );
};
export default App;
