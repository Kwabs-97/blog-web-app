/** @format */

import React from "react";
import BlogForm from "../components/BlogForm";
import { useRouteLoaderData } from "react-router-dom";
function EditEventPage() {
  const data = useRouteLoaderData('blog-detail');
  const blog = data.b1;
  console.log(blog)
  return <BlogForm blog={blog} />;
}

export default EditEventPage;
