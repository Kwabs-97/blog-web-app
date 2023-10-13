/** @format */

import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/BlogForm.module.css";
import { useState, useEffect } from "react";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { db } from "../config/firebase";
function BlogForm({ blog }) {
  // adding new blog input states
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");

  const blogsCollectionRef = collection(db, "blogs");

  const navigate = useNavigate();

  function cancelHandler() {
    navigate("..");
  }



  useEffect(() => {
    // If the component is used for updating an existing blog, populate the input fields with the blog data
    if (blog) {
      setTitle(blog.title);
      setCategory(blog.category);
      setDate(blog.date);
      setImage(blog.image);
      setDescription(blog.description);
    }
  }, [blog]);

  async function submitHandler(e) {
    e.preventDefault();
    try {
      if (blog) {
        const blogDocRef = doc(db, "blogs", blog.id);
        await updateDoc(blogDocRef, {
          title,
          category,
          image,
          image,
          description,
        });
      } else {
        await addDoc(blogsCollectionRef, {
          title: title,
          category: category,
          date: date,
          image: image,
          description: description,
        });
      }

      navigate("/");
    } catch (error) {
      throw new Error(error);
    }
  }

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <p>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          name="title"
          required
          onChange={(e) => setTitle(e.target.value)}
          defaultValue={blog ? blog.title : ""}
        />
      </p>
      <p>
        <label htmlFor="category">Category</label>
        <input
          id="category"
          type="text"
          name="category"
          required
          onChange={(e) => setCategory(e.target.value)}
          defaultValue={blog ? blog.category : ""}
        />
      </p>
      <p>
        <label htmlFor="image">Image</label>
        <input
          id="image"
          type="url"
          name="image"
          required
          defaultValue={blog ? blog.image : ""}
          onChange={(e) => {
            setImage(e.target.value);
          }}
        />
      </p>
      <p>
        <label htmlFor="date">Date</label>
        <input
          id="date"
          type="date"
          name="date"
          required
          onChange={(e) => setDate(e.target.value)}
          defaultValue={blog ? blog.date : ""}
        />
      </p>
      <p>
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          rows="5"
          required
          onChange={(e) => setDescription(e.target.value)}
          defaultValue={blog ? blog.description : ""}
        />
      </p>
      <div className={styles.actions}>
        <button type="button" onClick={cancelHandler}>
          Cancel
        </button>
        <button> {blog ? "Update" : "Save"}</button>
      </div>
    </form>
  );
}

export default BlogForm;
