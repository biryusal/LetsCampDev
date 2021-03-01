import React from "react";
import AdditionalFilter from "./AdditionalFilter";
import "./Filters.scss";
import SpecialFilter from "./SpecialFilter";

export default () => {
  return (
    <>
      <SpecialFilter />
      <AdditionalFilter />
    </>
  )
}