/** @format */

import React from "react";
import BlogList from "../components/BlogList";
import { useLoaderData, json } from "react-router-dom";

import { useState } from "react";
function Events() {
  const data = useLoaderData();
  const blogs = data.b1;
  let loadedBlogs = [];
  loadedBlogs.push(blogs);
  console.log(loadedBlogs);
  return (
    <div>
      <BlogList blogs={loadedBlogs} key={loadedBlogs.map((blog) => blog.b1)} />
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
