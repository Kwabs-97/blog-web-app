/** @format */

import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/BlogForm.module.css";
import { useState } from "react";
import { addDoc, collection, updateDoc } from "firebase/firestore";
import { db } from "../config/firebase";
import { redirect } from "react-router-dom";
function BlogForm({ blog }) {
  // adding new blog input states
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");

  // updating existing blog input states
  const [updateTitle, setUpdateTitle] = useState("");
  const [updateCategory, setUpdateCategory] = useState("");
  const [updateDate, setUpdateDate] = useState("");
  const [updateImage, setUpdateImage] = useState("");
  const [updateDescription, setUpdateDescription] = useState("");

  const blogsCollectionRef = collection(db, "blogs");

  const navigate = useNavigate();
  function cancelHandler() {
    navigate("..");
  }

  console.log(blog);
  async function submitHandler(e) {
    e.preventDefault();
    try {
      await addDoc(blogsCollectionRef, {
        title: title,
        category: category,
        date: date,
        image: image,
        description: description,
      });

      await updateDoc(blogsCollectionRef);

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
        <button>Save</button>
      </div>
    </form>
  );
}

redirect("/");
export default BlogForm;
