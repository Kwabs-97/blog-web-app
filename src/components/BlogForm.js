/** @format */

import React from "react";
import { useNavigate, Form, json, redirect } from "react-router-dom";
import styles from "../styles/BlogForm.module.css";

function BlogForm({ method, blog }) {
  const navigate = useNavigate();
  function cancelHandler() {
    navigate("..");
  }

  return (
    <Form method={method} className={styles.form}>
      <p>
        <label htmlFor="title">Title</label>
        <input id="title" type="text" name="title" required defaultValue={blog ? blog.title : ""} />
      </p>
      <p>
        <label htmlFor="category">Category</label>
        <input
          id="category"
          type="text"
          name="category"
          required
          defaultValue={blog ? blog.category : ""}
        />
      </p>
      <p>
        <label htmlFor="image">Image</label>
        <input id="image" type="url" name="image" required defaultValue={blog ? blog.image : ""} />
      </p>
      <p>
        <label htmlFor="date">Date</label>
        <input id="date" type="date" name="date" required defaultValue={blog ? blog.date : ""} />
      </p>
      <p>
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          rows="5"
          required
          defaultValue={blog ? blog.description : ""}
        />
      </p>
      <div className={styles.actions}>
        <button type="button" onClick={cancelHandler}>
          Cancel
        </button>
        <button>Save</button>
      </div>
    </Form>
  );
}

export default BlogForm;

export async function action({ request, params }) {
  const data = await request.formData();
  const method = request.method;

  const eventData = {
    title: data.get("title"),
    image: data.get("image"),
    date: data.get("date"),
    description: data.get("description"),
    category: data.get("category"),
    id: Math.random().toString,
  };

  let url = "https://blogdata-392a9-default-rtdb.firebaseio.com/blogs.json";
  if (method === "PATCH") {
    const id = params.id;
    url = "https://blogdata-392a9-default-rtdb.firebaseio.com/blogs.json";
  }

  const response = await fetch(url, {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(eventData),
  });

  if (!response.ok) {
    throw json({ message: "Could not save event." }, { status: 500 });
  }

  return redirect("/");
}
