/** @format */

import BlogList from "../components/BlogList";
import { db } from "../config/firebase";
import { useEffect, useState } from "react";
import { getDocs, collection } from "firebase/firestore";
function Events() {
  const [blogList, setBlogList] = useState([]);

  const blogsCollectionRef = collection(db, "blogs");

  useEffect(() => {
    async function getBlogList() {
      //read the data
      try {
        const data = await getDocs(blogsCollectionRef);
        const blog = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        setBlogList(blog);
      } catch (error) {
        throw new Error(error.message);
      }

      //set it to the state
    }

    getBlogList();
  }, []);

  console.log(blogList);
  return (
    <div>
      <BlogList blogs={blogList} />
    </div>
  );
}

export default Events;
