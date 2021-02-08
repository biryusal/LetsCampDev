import React, { useEffect } from "react";
import Main from "./js/components/Main";
import {
  BrowserRouter as Router, 
  Route, Switch
} from "react-router-dom";
import { connect } from "react-redux";
import Campings from "./js/components/Campings";
import CampingPage from "./js/components/Campings/CampingPage";
import Auth from "./js/components/Auth";
import { initializeUser } from "./js/redux/actions/CampingsActions";

function App(props) {
  let {initializeUser} = props;
  
  useEffect(() => {
    initializeUser();
  }, []);

  return (
    <Router>
      <Switch>
        <Route exact path = "/" render = {() => <Main />}></Route>
        <Route exact path = "/campings/page/:page" render = {() => <Campings />}></Route>
        <Route path = "/campings/:id" render = {() => <CampingPage />}></Route>
        <Route path = "/signin" render = {() => <Auth />}></Route>
        <Route path = "/signup" render = {() => <Auth />}></Route>
      </Switch>
    </Router>
  )
}

const MapDispatchToProps = dispatch => ({
  initializeUser: () => dispatch(initializeUser())
})

export default connect(null, MapDispatchToProps)(App);