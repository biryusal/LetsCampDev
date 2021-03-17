import React from "react";
import "./City.scss";

export default (props) => {
  const {nameOfRegion} = props;
  return (
    <span className = "region__option">{nameOfRegion}</span>
  )
}