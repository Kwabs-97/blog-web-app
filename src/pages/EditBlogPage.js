/** @format */

import React, { useEffect, useState } from "react";
import BlogForm from "../components/BlogForm";
import { db } from "../config/firebase";
import { doc, getDoc } from "firebase/firestore";
import { useParams } from "react-router-dom";
import Spinner from "../Features/Spinner";
function EditEventPage() {
  const { id } = useParams();
  const [blogData, setBlogData] = useState(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getBlog() {
      try {
        const blogDocRef = doc(db, "blogs", id);
        const blogSnapshot = await getDoc(blogDocRef);

        if (blogSnapshot.exists()) {
          const blog = { ...blogSnapshot.data(), id: blogSnapshot.id };
          setBlogData(blog);
        } else {
          setError("Blog not found.");
        }
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    }

    getBlog();
  }, [id]);

  return (
    <>{isLoading ? <Spinner /> : error ? <p>Error: {error}</p> : <BlogForm blog={blogData} />}</>
  );
}

export default EditEventPage;
