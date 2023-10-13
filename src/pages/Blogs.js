/** @format */

import BlogList from "../components/BlogList";
import { db } from "../config/firebase";
import { useEffect, useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import Spinner from "../Features/Spinner";
function Events() {
  const [blogList, setBlogList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const blogsCollectionRef = collection(db, "blogs");

  useEffect(() => {
    async function getBlogList() {
      //read the data
     
      try {
        const data = await getDocs(blogsCollectionRef);
        const blog = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        //set it to the state
        setBlogList(blog);
        setIsLoading(false);
      } catch (error) {
        throw new Error(error.message);
        setIsLoading(false);
      }

    }

    getBlogList();
  }, []);

  if (isLoading) {
    return <Spinner />
  }
  return (
    <div>
      <BlogList blogs={blogList} />
    </div>
  );
}

export default Events;
