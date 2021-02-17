import React from "react";
import { NavLink } from "react-router-dom";

import "./menu-company.styles.scss";

const MenuCompany = ({ onNameCompany }) => (
  <NavLink
    className="menu-company"
    to={`/${onNameCompany.toLowerCase()}`}
    activeClassName="active"
  >
    {onNameCompany}
  </NavLink>
);

export default MenuCompany;
