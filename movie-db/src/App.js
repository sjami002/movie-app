import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./elements/Header/Header";
import Homepage from "./Homepage/Homepage";
import Movie from "./Movie/Movie";
import NotFound from "./elements/NotFound/NotFound";

const App = () => (
  <BrowserRouter>
    <React.Fragment>
      <Header />
      <Switch>
        <Route path="/" component={Homepage} exact />
        <Route path="/:movieId" component={Movie} exact />
        <Route component={NotFound} />
      </Switch>
    </React.Fragment>
  </BrowserRouter>
);

export default App;
