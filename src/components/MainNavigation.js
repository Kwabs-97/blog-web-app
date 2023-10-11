/** @format */

import React from "react";
import styles from "../styles/MainNavigation.module.css";
import { NavLink } from "react-router-dom";
function MainNavigation() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">All Blogs</NavLink>
        </li>
        <li>
          <NavLink to="/new">New Blog</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default MainNavigation;
