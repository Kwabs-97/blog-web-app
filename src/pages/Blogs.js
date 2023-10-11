/** @format */

import React from "react";
import BlogList from "../components/BlogList";
import { useLoaderData, json } from "react-router-dom";

function Events() {
  const data = useLoaderData();
  const blogs = data.b1
  console.log(blogs);
  return (
    <div>
      <BlogList />
    </div>
  );
}

export default Events;

export async function loader() {
  const response = await fetch("https://blogdata-392a9-default-rtdb.firebaseio.com/blogs.json");
  if (!response.ok) {
    throw json({ message: "Could not fetch blog data" }, { status: 500 });
  }
  return response;
}
