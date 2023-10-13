/** @format */

import React from "react";
import BlogForm from "../components/BlogForm";
import { db } from "../config/firebase";
import { useEffect, useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import { useParams } from "react-router-dom";
function EditEventPage() {
  const [blog, setBlog] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();

  const blogsCollectionRef = collection(db, "blogs");

  useEffect(() => {
    async function getBlogList() {
      //read the data

      try {
        const data = await getDocs(blogsCollectionRef);
        const blog = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        //set it to the state
        setBlog(blog);
        setIsLoading(false);
      } catch (error) {
        throw new Error(error.message);
        setIsLoading(false);
      }
    }

    getBlogList();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const blogs = blog.find((blog) => blog.id === id);

  return (
    <>
      <BlogForm blog={blogs} />
    </>
  );
}

export default EditEventPage;
