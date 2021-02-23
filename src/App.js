import React, { useEffect } from "react";
import Main from "./js/components/Main";
import {
  BrowserRouter, 
  Route, Switch
} from "react-router-dom";
import { connect } from "react-redux";
import Campings from "./js/components/Campings/Campings";
import CampingPage from "./js/components/Campings/CampingPage/CampingPage";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path = "/" render = {() => <Main />}></Route>
        <Route exact path = "/campings/page/:page" render = {() => <Campings />}></Route>
        <Route exact path = "/campings/id/:id" render = {() => <CampingPage />}></Route>
      </Switch>
    </BrowserRouter>
  )
}

const MapDispatchToProps = dispatch => ({
  initializeUser: () => dispatch(initializeUser())
})

export default connect(null, MapDispatchToProps)(App);