import React from "react";
import CampingCard from "../CampingCard";
import "./CampingsList.scss";

export default (props) => {
  let {campings} = props;
  return(
    campings.map((item) => {
      return <CampingCard {...item} key = {item.number + "key"} />
    })
  )
}