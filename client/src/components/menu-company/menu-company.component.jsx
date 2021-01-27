import { NavLink } from 'react-router-dom';

import './menu-company.styles.scss';

const MenuCompany = ({ nameCompany }) => {
  return (
    <NavLink 
      className="menu-company"
      to = {`/${nameCompany.toLowerCase()}`}
      activeClassName = 'active'
    >
      {nameCompany}
    </NavLink>
  );
};

export default MenuCompany;