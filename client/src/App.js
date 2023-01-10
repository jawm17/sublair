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
import Home from './pages/Home/Home';
import Account from "./pages/Account/account";
import AddItem from './pages/addItem/AddItem';
import EditItem from './pages/editItem/EditItem';
import PayPalMiddle2 from './pages/itemPage/PayPalMiddle2';
import TestHome from './pages/TestHome';
import ItemPage2 from './pages/itemPage/ItemPage2';
import Checkout from './pages/Checkout/Checkout';
import PayPalWrapper from "./pages/Checkout/PayPalWrapper";

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
        <Route exact path="/" component={Home} />
        <Route exact path="/test" component={TestHome} />
        {/* <Route exact path="/item/:id" component={PayPalMiddle2} /> */}
        <Route exact path="/item/:id" component={ItemPage2} />
        <Route exact path="/checkout" component={PayPalWrapper} />
        <PrivateRoute exact path="/admin" component={Account} />
        <PrivateRoute path="/admin/add-item" component={AddItem} />
        <PrivateRoute path="/admin/item/:id" component={EditItem} />
        <Route path="/" component={NoMatchPage} />
      </Switch>
    </Router>
  );
}

export default App;
