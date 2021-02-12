import React, {useEffect} from "react";
import { useLocation } from "react-router-dom";
import {connect} from "react-redux";
import "./CampingPage.less";
import CampingFull from "../CampingFull";

function CampingPage(props) {
  let {currentCamping} = props;

  const location = useLocation();

  const currentID = Number(location.pathname.match(/campings\/id\/(\d+)/)[1]);

  return (
    <CampingFull {...currentCamping}></CampingFull>
  )
}

const MapStateToProps = state => {
  return {
    isFetching: state.isFetching,
    currentCamping: state.currentCamping
  }
}

const MapDispatchToProps = state => {
  return {
    getSoloCampings: () => dispatch(getSoloCamping())
  }
}

export default connect(MapStateToProps, MapDispatchToProps)(CampingPage);

