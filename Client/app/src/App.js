import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './views/home';
import NotFound from './views/not-found';
import Header from './components/header';
import Footer from './components/footer';
import Login from './views/login';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Fragment>
            <Header />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              {/* <Route exact path="/signup" component={Register} /> */}
              <Route component={NotFound} />
            </Switch>
            <Footer />
          </Fragment>
        </Router>
      </div>
    );
  }
}

export default App;
