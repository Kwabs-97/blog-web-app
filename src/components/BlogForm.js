/** @format */

import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/BlogForm.module.css";
import { useState, useEffect } from "react";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { db } from "../config/firebase";
import Spinner from "../Features/Spinner";

import { imageDb } from "../config/firebase";
import { ref, uploadBytes } from "firebase/storage";


function BlogForm({ blog }) {
  //Accepting blog fields from BlogItem and EditBlogPage as props

  // managing input states
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const [image, setImage] = useState("");
  const [id, setId] = useState("");
  const [description, setDescription] = useState("");
  const [imageUpload, setImageUpload] = useState("");

  //submission state
  const [isSubmitting, setIsSubmitting] = useState(false);

  //creating a reference to the Firebase Firestone Database Collection
  const blogsCollectionRef = collection(db, "blogs");

  // navigate to home after submission
  const navigate = useNavigate();
  function cancelHandler() {
    navigate("..");
  }

  const currDate = new Date();

  useEffect(() => {
    // If existing blog, populate the input fields with the blog data
    if (blog) {
      setTitle(blog.title);
      setCategory(blog.category);
      setDate(new Date().toDateString());
      setImage(blog.image);
      setId(blog.id);
      setDescription(blog.description);
    }
  }, [blog]);

  const imageReference = ref(imageDb, `images/${imageUpload.name + id}`);
  async function imageUploadHandler() {
    await uploadBytes(imageReference, imageUpload);
    alert("Image uploaded");
  }

  async function submitHandler(e) {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      if (blog) {
        // If it's an existing blog, update the existing document with the specified fields
        const blogDocRef = doc(db, "blogs", blog.id);
        await updateDoc(blogDocRef, {
          title,
          category,
          image,
          description,
        });
        navigate("/");
      } else {
        await addDoc(blogsCollectionRef, {
          title: title,
          category: category,
          date: date,
          image: image,
          description: description,
        });

        navigate("/");
      }

      setIsSubmitting(false);
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
          placeholder="Please enter a title"
          defaultValue={blog ? title : ""}
          onChange={(e) => setTitle(e.target.value)}
        />
      </p>
      <p>
        <label htmlFor="category">Category</label>
        <input
          id="category"
          type="text"
          name="category"
          placeholder="Please a category for blog"
          required
          onChange={(e) => setCategory(e.target.value)}
          defaultValue={blog ? category : ""}
        />
      </p>
      <p>
        <label htmlFor="image">Image url</label>
        <input
          id="image"
          type="url"
          name="image"
          placeholder="Optional"
          defaultValue={blog ? image : ""}
          onChange={(e) => {
            setImage(e.target.value);
          }}
        />
      </p>
      <p>
        <label htmlFor="image">Image</label>
        <input
          id="image"
          type="file"
          name="image"
          onChange={(e) => {
            setImageUpload(e.target.files[0]);
          }}
        />
        <button onClick={imageUploadHandler}>upload</button>
      </p>
      <p>
        <label htmlFor="date">Date</label>
        <input id="date" type="text" name="date" required defaultValue={currDate.toDateString()} />
      </p>
      <p>
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          rows="5"
          required
          placeholder="Description"
          defaultValue={blog ? description : ""}
          onChange={(e) => setDescription(e.target.value)}
        />
      </p>
      <div className={styles.actions}>
        <button type="button" onClick={cancelHandler}>
          Cancel
        </button>
        {isSubmitting ? <Spinner /> : <button> {blog ? "Update" : "Save"}</button>}
      </div>
    </form>
  );
}

export default BlogForm;
