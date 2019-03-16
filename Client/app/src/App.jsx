import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { UserProvider, defaultState } from "./context/auth-context";
import AuthRoute from "./routes/auth-route";

import Home from './views/home';
import NotFound from './views/not-found';
import Login from './views/login';
import Register from './views/register';
import Logout from "./views/logout";
import CreateGuitar from './views/create-guitar';

import AllGuitars from './views/all-guitars';
import GuitarDetails from './views/guitar-details';
import EditGuitar from './views/edit-guitar';

import Header from './components/header';
import Footer from './components/footer';

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
  };

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
                <Route exact path="/register" component={Register} />
                <Route exact path="/all" component={AllGuitars} />
                <Route path="/details/:guitarId" component={GuitarDetails} />
                <AuthRoute exact path="/create" component={CreateGuitar} allowedRoles={['admin']} />
                <AuthRoute path="/edit/:guitarId" component={EditGuitar} allowedRoles={['admin']} />
                <AuthRoute exact path="/logout" component={Logout} />
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
