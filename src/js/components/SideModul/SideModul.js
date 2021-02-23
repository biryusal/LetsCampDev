import React from "react";
import {NavLink} from "react-router-dom";
import "./SideModul.less";

export default () => {  
  function closeSideModul() {
    document.getElementById("sideModul").style.display = "none";
    document.getElementById("header__auth").classList.remove("header__auth_active");
  }

  return (
    <div id = "sideModul">
      <div className = "sideModul__header">
        <h2 className = "sideModul__header">Меню</h2>
        <button className = "sideModul__closer" onClick = {closeSideModul}>X</button>
      </div>
      <div className = "sideModul__auth">
        <div className = "sideModul__composer">
          <NavLink to = "/signin" className = "sideModul__link">Войти</NavLink>
          <NavLink to = "/signup" className = "sideModul__link">Зарегистрироваться</NavLink>
        </div>
      </div>
      <div className = "sideModul__help">
        <NavLink to = "/help" className = "sideModul__link">Помощь</NavLink>
      </div>
    </div>
  )
}