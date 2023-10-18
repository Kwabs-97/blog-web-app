/** @format */

import React, { useEffect, useState } from "react";
import BlogItem from "../components/BlogItem";
import { db } from "../config/firebase";
import { collection, getDocs } from "firebase/firestore";
import { useParams } from "react-router-dom";
import Spinner from "../Features/Spinner";

function BlogDetailPage() {
  const [blogList, setBlogList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const { id } = useParams();
  const blogsCollectionRef = collection(db, "blogs");

  useEffect(() => {
    async function getBlogList() {
      try {
        const data = await getDocs(blogsCollectionRef);
        const blog = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        setBlogList(blog);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    }

    getBlogList();
  }, []);

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const blogPost = blogList.find((post) => post.id === id);
 

  return (
    <>
      <BlogItem blog={blogPost} id={blogPost.id} />
    </>
  );
}

export default BlogDetailPage;
