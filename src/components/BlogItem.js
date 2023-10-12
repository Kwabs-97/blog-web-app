/** @format */

import React from "react";
import styles from "../styles/BlogItem.module.css";
import { Link} from "react-router-dom";


function BlogItem({ blog }) {


 
  function deleteHandler() {
  
  }
  return (
    <article className={styles.blog}>
      <img src={blog.image} alt={blog.title} />
      <h1>{blog.title}</h1>
      <p>{blog.date}</p>
      <p>{blog.category}</p>
      <p>{blog.description}</p>
      <menu className={styles.actions}>
        <Link >Edit</Link>
        <button onClick={deleteHandler}>Delete</button>
      </menu>
    </article>
  );
}

export default BlogItem;
