import React, { useEffect } from "react";
import Main from "./js/components/Main";
import {
  BrowserRouter as Router, 
  Route, Switch
} from "react-router-dom";
import { connect } from "react-redux";
import Campings from "./js/components/Campings/Campings";

function App(props) {
  return (
    <Router>
      <Switch>
        <Route exact path = "/" render = {() => <Main />}></Route>
        <Route exact path = "/campings/page/1" render = {() => <Campings />}></Route>
      </Switch>
    </Router>
  )
}

const MapDispatchToProps = dispatch => ({
  initializeUser: () => dispatch(initializeUser())
})

export default connect(null, MapDispatchToProps)(App);