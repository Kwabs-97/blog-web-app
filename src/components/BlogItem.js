/** @format */

import React from "react";
import styles from '../styles/BlogItem.module.css'

function BlogItem() {
  return (
    <article className={styles.event}>
      <img src={blogs.image} alt={event.title} />
      <h1>{blog.title}</h1>
      <time>{blog.date}</time>
      <p>{blog.description}</p>
      <menu className={styles.actions}>
        <Link to={`/events/${blog.id}/edit`}>Edit</Link>
        <button onClick={startDeleteHandler}>Delete</button>
      </menu>
    </article>
  );
}

export default BlogItem;
