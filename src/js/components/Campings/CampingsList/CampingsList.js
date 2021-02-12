import React from "react";
import CampingCard from "../CampingCard";
import "./CampingsList.less";

export default (props) => {
  let {campings} = props;
  return(
    campings.map((item) => {
      return <CampingCard {...item} />
    })
  )
}