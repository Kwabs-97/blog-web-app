/** @format */

import React, { useEffect, useState } from "react";
import BlogForm from "../components/BlogForm";
import { db } from "../config/firebase";
import { collection, getDocs } from "firebase/firestore";
import { useParams } from "react-router-dom";
console.log(useParams);
function EditEventPage() {
  const { id } = useParams();
  const [blogList, setBlogList] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const blogsCollectionRef = collection(db, "blogs");

  useEffect(() => {
    async function getBlogList() {
      try {
        const data = await getDocs(blogsCollectionRef);
        const blog = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        setBlogList(blog);
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    }

    getBlogList();
  }, [blogsCollectionRef]);

  const blogPost = blogList.find((post) => post.id === id);

  return (
    <>
      <BlogForm blog={blogPost} />
    </>
  );
}

export default EditEventPage;
