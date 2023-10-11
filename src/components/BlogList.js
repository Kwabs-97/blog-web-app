/** @format */

import React from "react";
import styles from "../styles/BlogList.module.css";
import { Link } from "react-router-dom";
function BlogList({ blogs }) {
  return (
    <div className={styles.blogs}>
      <h1>All Blogs</h1>
      <ul className={styles.list}>
        {blogs.map((blog) => (
          <li key={blog.id} className={styles.item}>
            <Link to={blog.id}>
              <img src={blog.img} alt={blog.title} />
              <div className={styles.content}>
                <h2>{blog.title}</h2>
                <time>{blog.date}</time>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BlogList;
