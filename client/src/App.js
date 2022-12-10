import React, { useEffect } from 'react';
import history from './history';
import ScrollToTop from "./ScrollToTop";
import PrivateRoute from './hocs/PrivateRoute';
import UnPrivateRoute from './hocs/UnPrivateRoute';
import { Router, Route, Switch } from 'react-router-dom';
import "./index.css";

// Pages
import NoMatchPage from "./pages/noMatchPage";
import Login from "./pages/UserAuth/Login";
import Register from "./pages/UserAuth/Register";
import Home from "./pages/Home/home";
import PayPalMiddle from './pages/Home/PayPalMiddle';
import Account from "./pages/Account/account";
import AddItem from './pages/addItem/AddItem';


function App() {
  useEffect(() => {
    appHeight();
    window.addEventListener('resize', appHeight);
  }, [])
  
  function appHeight() {
    const doc = document.documentElement
    doc.style.setProperty('--app-height', `${window.innerHeight}px`)
  }
  
  return (
    <Router history={history}>
      <ScrollToTop />
      <Switch>
        <UnPrivateRoute path="/login" component={Login} />
        <UnPrivateRoute path="/register" component={Register} />
        <Route exact path="/" component={PayPalMiddle} />
        <PrivateRoute exact path="/admin" component={Account} />
        <PrivateRoute path="/admin/add-item" component={AddItem} />
        <Route path="/" component={NoMatchPage} />
      </Switch>
    </Router>
  );
}

export default App;
