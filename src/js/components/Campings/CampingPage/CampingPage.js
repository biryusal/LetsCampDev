import React, {useEffect} from "react";
import { useLocation } from "react-router-dom";
import {connect} from "react-redux";
import "./CampingPage.less";
import CampingFull from "../CampingFull";
import { getCampingById } from "../../../redux/actions/CampingsActions";

function CampingPage(props) {

  const {getCampingById} = props;

  const location = useLocation();

  const currentID = Number(location.pathname.match(/campings\/id\/(\d+)/)[1]);

  useEffect(() => {
    getCampingById(currentID);
  }, []);  

  let {currentCamping} = props;

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

const MapDispatchToProps = dispatch => {
  return {
    getCampingById: (id) => dispatch(getCampingById(id))
  }
}

export default connect(MapStateToProps, MapDispatchToProps)(CampingPage);

