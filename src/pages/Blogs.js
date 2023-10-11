/** @format */

import React, { useState } from "react";
import BlogList from "../components/BlogList";
import { useLoaderData, json } from "react-router-dom";

function Events() {
  const data = useLoaderData();
  let blog = [];

  for (let key in data) {
    blog.push({
      id: key,
      title: data[key].title,
      description: data[key].description,
      img: data[key].image,
      date: data[key].date,
      category: data[key].category,
    });
  }

  console.log(blog)

  return <div>{<BlogList blogs={blog} />}</div>;
}

export default Events;

export async function loader() {
  const response = await fetch("https://blogdata-392a9-default-rtdb.firebaseio.com/blogs.json");
  if (!response.ok) {
    throw json({ message: "Could not fetch blog data" }, { status: 500 });
  }
  return response;
}
