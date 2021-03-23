import React from "react";
import { NavLink } from "react-router-dom";
import "./FooterLinks.scss";

export default (props) => {
  let {links} = props,
      keyCounter = 0,
      navlinks = [];
  
  for (let name in links) {
    keyCounter++;
    navlinks.push(
      <NavLink key = {keyCounter} to = {links[name] ? links[name] : "/error"} className = "footerColumn__link"
      activeClassName = "footerColumn__link_active">{name ? name : "Введите название ссылки"}</NavLink>
    )
  }
  return navlinks.map((curr) => {
    return curr;
  })
}
