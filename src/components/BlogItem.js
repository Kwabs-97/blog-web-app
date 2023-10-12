/** @format */

import React from "react";
import styles from "../styles/BlogItem.module.css";
import { Link } from "react-router-dom";
import { useSubmit } from "react-router-dom";

function BlogItem({ blog, blogId }) {
  const submit = useSubmit();
  console.log(blogId[0].id);

  function deleteHandler() {
    const proceed = window.confirm("Are you sure you want to delete");
    if (proceed) {
      submit(null, { method: "DELETE" });
    }
  }
  return (
    <article className={styles.blog}>
      <img src={blog.image} alt={blog.title} />
      <h1>{blog.title}</h1>
      <p>{blog.date}</p>
      <p>{blog.category}</p>
      <p>{blog.description}</p>
      <menu className={styles.actions}>
        <Link to={`/${blogId.id}/edit`}>Edit</Link>
        <button onClick={deleteHandler}>Delete</button>
      </menu>
    </article>
  );
}

export default BlogItem;
