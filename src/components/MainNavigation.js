/** @format */

import React from "react";
import styles from "../styles/MainNavigation.module.css";
import { NavLink } from "react-router-dom";
function MainNavigation() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? styles.active : styles.nav)} end>
            All Blogs
          </NavLink>
        </li>
        <li>
          <NavLink to="/new" className={({ isActive }) => (isActive ? styles.active : styles.nav)}>
            New Blog
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default MainNavigation;
