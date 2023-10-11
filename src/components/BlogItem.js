/** @format */

import React from "react";
import styles from "../styles/BlogItem.module.css";
import { Link } from "react-router-dom";
import { useSubmit } from "react-router-dom";

function BlogItem({ blog }) {
  const submit = useSubmit();
  function deleteHandler() {
    const proceed = window.confirm('Are you sure you want to delete');
    if (proceed) {
      submit(null, {method: 'DELETE'});
    }
  }
  return (
    <article className={styles.blog}>
      <img src={blog.img} alt={blog.title} />
      <h1>{blog.title}</h1>
      <p>{blog.date}</p>
      <p>{blog.description}</p>
      <menu className={styles.actions}>
        <Link to={`/${blog.id}/edit`}>Edit</Link>
        <button onClick={deleteHandler}>Delete</button>
      </menu>
    </article>
  );
}

export default BlogItem;
