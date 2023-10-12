/** @format */

import React from "react";
import { useParams } from "react-router-dom";
import BlogForm from "../components/BlogForm";
import { useRouteLoaderData } from "react-router-dom";
function EditEventPage() {
  const data = useRouteLoaderData("blog-detail");
  const { id } = useParams();
  const blog = data[id];

  console.log(blog)

  return (
    <>
      <BlogForm blog={blog} />
    </>
  );
}

export default EditEventPage;
