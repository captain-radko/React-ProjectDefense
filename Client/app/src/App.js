import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './views/home';
import NotFound from './views/not-found';
import Header from './components/header';
import Footer from './components/footer';
import Login from './views/login';
import Register from './views/register';
import { UserProvider, defaultState } from "./context/auth-context";

class App extends Component {
  constructor(props) {
    super(props);

    const userFromStorage = window.localStorage.getItem('user');

    const parsedUser = userFromStorage ? JSON.parse(userFromStorage) : {};

    this.state = {
      user: {
        ...defaultState,
        ...parsedUser,
        updateUser: this.updateUser,
      }
    }

  }

  updateUser = (user) => {
    this.setState({ user });
  }

  render() {
    const { user } = this.state;

    return (
      <div>
        <Router>
          <Fragment>
            <UserProvider value={user}>
              <Header />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={Register} />
                <Route component={NotFound} />
              </Switch>
              <Footer />
            </UserProvider>
          </Fragment>
        </Router>
      </div>
    );
  }
}

export default App;
