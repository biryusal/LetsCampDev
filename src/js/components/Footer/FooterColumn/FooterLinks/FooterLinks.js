import React from "react";
import { NavLink } from "react-router-dom";
import "./FooterLinks.scss";

export default (props) => {
  let {links} = props,
      navlinks = [];

  console.log(links);
  
  for (let name in links) {
    navlinks.push(
      <NavLink to = {links[name] ? links[name] : "/error"} className = "footerColumn__link"
      activeClassName = "footerColumn__link_active">{name ? name : "Введите название ссылки"}</NavLink>
    )
  }
  return navlinks.map((curr) => {
    return curr;
  })
}
