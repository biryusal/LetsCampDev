import React from "react";
import { NavLink } from "react-router-dom";
import "./FooterColumn.scss";
import FooterLinks from "./FooterLinks";

export default (props) => {
  let {header, links} = props;
  return (
    <div className = "footerColumn__wrapper">
      <h2 className = "footerColumn__links">{header ? header : "Укажите header-свойство для компонента."}</h2>
      <FooterLinks links = {links}/>
    </div>
  )
}