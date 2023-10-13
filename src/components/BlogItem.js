/** @format */

import React from "react";
import styles from "../styles/BlogItem.module.css";
import { Link } from "react-router-dom";
import { db } from "../config/firebase";
import { deleteDoc, doc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

function BlogItem({ blog }) {
  const navigate = useNavigate();
  console.log(blog);

  async function deleteBlog(id) {
    try {
      const blogsDoc = doc(db, "blogs", id);

      const proceed = window.confirm("Are you sure you want to delete");
      if (proceed) {
        await deleteDoc(blogsDoc);
      }
      navigate("/");
      // Display a success message, navigate back, or perform other actions.
    } catch (error) {
      console.error("Error deleting the blog:", error);
      // Display an error message to the user or take other error-handling actions.
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
        <Link to={`/${blog.id}/edit`}>Edit</Link>
        <button onClick={() => deleteBlog(blog.id)}>Delete</button>
      </menu>
    </article>
  );
}

export default BlogItem;
