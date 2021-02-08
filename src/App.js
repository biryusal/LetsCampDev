import React, { useEffect } from "react";
import Main from "./js/components/Main";
import {
  BrowserRouter as Router, 
  Route, Switch
} from "react-router-dom";
import { connect } from "react-redux";

function App(props) {
  return (
    <Router>
      <Switch>
        <Route exact path = "/" render = {() => <Main />}></Route>
      </Switch>
    </Router>
  )
}

const MapDispatchToProps = dispatch => ({
  initializeUser: () => dispatch(initializeUser())
})

export default connect(null, MapDispatchToProps)(App);