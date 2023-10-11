/** @format */

import React from "react";
import BlogItem from "../components/BlogItem";
import { redirect, useRouteLoaderData } from "react-router-dom";
function BlogDetailPage() {
  const data = useRouteLoaderData("blog-detail");
  const blogs = data.b1;

  console.log(blogs);
  return <BlogItem blog={blogs} />;
}

export default BlogDetailPage;
export async function loader({ request, params }) {
  const id = params.id;
  const response = await fetch("https://blogdata-392a9-default-rtdb.firebaseio.com/blogs.json");
  if (!response.ok) {
    throw new Error("Could not load blog data");
  }
  return response;
}

export async function action({ request, params }) {
  const response = await fetch("https://blogdata-392a9-default-rtdb.firebaseio.com/blogs.json", {
    method: request.method,
  });
  if (!response.ok) {
    throw new Error("Could not delete blog");
  }
  return redirect('/')
}
