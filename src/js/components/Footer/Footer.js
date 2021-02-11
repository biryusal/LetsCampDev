import React from "react";
import {NavLink} from "react-router-dom";
import "./Footer.scss";

export default () => {
  return(
    <footer className = "footer">
      <div className = "footer__wrapper container">
        <div className = "footer__column">
          <h2 className = "footer__links">О нас</h2>
          <NavLink to = "/" className = "footer__link" activeClassName = "footer__link_active">О чем платформа</NavLink>
          <NavLink to = "/" className = "footer__link" activeClassName = "footer__link_active">О чем платформа</NavLink>
          <NavLink to = "/" className = "footer__link" activeClassName = "footer__link_active">О чем платформа</NavLink>
          <NavLink to = "/" className = "footer__link" activeClassName = "footer__link_active">О чем платформа</NavLink>
          <NavLink to = "/" className = "footer__link" activeClassName = "footer__link_active">О чем платформа</NavLink>
          <NavLink to = "/" className = "footer__link" activeClassName = "footer__link_active">О чем платформа</NavLink>
        </div>
        <div className = "footer__column">
          <h2 className = "footer__links">О нас</h2>
          <NavLink to = "/" className = "footer__link" activeClassName = "footer__link_active">О чем платформа</NavLink>
          <NavLink to = "/" className = "footer__link" activeClassName = "footer__link_active">О чем платформа</NavLink>
          <NavLink to = "/" className = "footer__link" activeClassName = "footer__link_active">О чем платформа</NavLink>
          <NavLink to = "/" className = "footer__link" activeClassName = "footer__link_active">О чем платформа</NavLink>
          <NavLink to = "/" className = "footer__link" activeClassName = "footer__link_active">О чем платформа</NavLink>
          <NavLink to = "/" className = "footer__link" activeClassName = "footer__link_active">О чем платформа</NavLink>
        </div>
        <div className = "footer__column">
          <h2 className = "footer__links">О нас</h2>
          <NavLink to = "/" className = "footer__link" activeClassName = "footer__link_active">О чем платформа</NavLink>
          <NavLink to = "/" className = "footer__link" activeClassName = "footer__link_active">О чем платформа</NavLink>
          <NavLink to = "/" className = "footer__link" activeClassName = "footer__link_active">О чем платформа</NavLink>
          <NavLink to = "/" className = "footer__link" activeClassName = "footer__link_active">О чем платформа</NavLink>
          <NavLink to = "/" className = "footer__link" activeClassName = "footer__link_active">О чем платформа</NavLink>
          <NavLink to = "/" className = "footer__link" activeClassName = "footer__link_active">О чем платформа</NavLink>
        </div>
        <div className = "footer__column">
          <h2 className = "footer__links">О нас</h2>
          <NavLink to = "/" className = "footer__link" activeClassName = "footer__link_active">О чем платформа</NavLink>
          <NavLink to = "/" className = "footer__link" activeClassName = "footer__link_active">О чем платформа</NavLink>
          <NavLink to = "/" className = "footer__link" activeClassName = "footer__link_active">О чем платформа</NavLink>
          <NavLink to = "/" className = "footer__link" activeClassName = "footer__link_active">О чем платформа</NavLink>
          <NavLink to = "/" className = "footer__link" activeClassName = "footer__link_active">О чем платформа</NavLink>
          <NavLink to = "/" className = "footer__link" activeClassName = "footer__link_active">О чем платформа</NavLink>
        </div>
      </div>
    </footer>
  )
}