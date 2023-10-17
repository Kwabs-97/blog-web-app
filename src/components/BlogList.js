/** @format */

import React, { useState, useEffect } from "react";
import styles from "../styles/BlogList.module.css";
import { Link } from "react-router-dom";
import { AiOutlinePlus } from "react-icons/ai";
import { imageDb } from "../config/firebase";
import { listAll, ref } from "firebase/storage";

function BlogList({ blogs }) {





  const imageRef = ref(imageDb, "images");
  useEffect(() => {
    listAll(imageRef).then((response) => {
      console.log(response);
    });
  }, []);

  
  




  if (blogs.length < 1) {
    return (
      <div className={styles.notFound}>
        No blogs found Kindly add blogs! <br />
        <Link to="/new">
          Add blog <AiOutlinePlus />
        </Link>
      </div>
    );
  } else {
    return (
      <div className={styles.blogs}>
        <h1>All Blogs</h1>
        <ul className={styles.list}>
          {blogs.map((blog) => (
            <li key={blog.id} className={styles.item}>
              <Link to={blog.id}>
                {blog.image ? (
                  <img src={blog.image} alt={blog.title} />
                ) : (
                  <small>No image set</small>
                )}

                <div className={styles.content}>
                  <h2>{blog.title}</h2>
                  <small>{blog.category}</small>
                  <br />
                  <time>{blog.date}</time>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default BlogList;
