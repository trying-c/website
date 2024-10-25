import React, { useState } from "react";
import "../assets/styles/menu.scss";

function Menu() {
  const routes = [
    { name: "home", label: "首页" },
    { name: "portfolio", label: "作品" },
    { name: "about", label: "关于" },
    { name: "other", label: "其他" },
  ];
  let menuList = routes.map(({ label, name }, i) => ({
    label: label || name || "--",
    name,
    id: `nav_${i}`,
  }));
  const [activeItem, setActiveItem] = useState("home");
  return (
    <>
      {menuList.map((item) => (
        <input
          type="radio"
          key={item.id}
          id={item.id}
          name="nav"
          style={{ display: "none" }}
        />
      ))}
      <ul className="website-menu">
        {menuList.map((item) => (
          <li
            className={`website-menu-item ${
              activeItem == item.name ? "website-menu-active-item" : ""
            }`}
            key={item.name}
          >
            <label htmlFor={item.id} onClick={() => setActiveItem(item.name)}>
              {item.label}
            </label>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Menu;
