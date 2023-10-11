/** @format */

import React from "react";
import styles from "../styles/BlogItem.module.css";
import { Link } from "react-router-dom";
import { useSubmit } from "react-router-dom";

function BlogItem(props) {
  const submit = useSubmit();

 
  function deleteHandler() {
    const proceed = window.confirm('Are you sure you want to delete');
    if (proceed) {
      submit(null, {method: 'DELETE'});
    }
  }
  return (
    <article className={styles.blog}>
      <img src={props.img} alt={props.title} />
      <h1>{props.title}</h1>
      <p>{props.date}</p>
      <p>{props.description}</p>
      <menu className={styles.actions}>
        <Link to={`/${props.id}/edit`}>Edit</Link>
        <button onClick={deleteHandler}>Delete</button>
      </menu>
    </article>
  );
}

export default BlogItem;
