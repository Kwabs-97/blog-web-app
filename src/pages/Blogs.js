/** @format */

import React from "react";
import BlogList from "../components/BlogList";
import { useLoaderData } from "react-router-dom";

function Events() {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      <BlogList />
    </div>
  );
}

export default Events;

async function loader() {
  const response = await fetch("https://blogdata-392a9-default-rtdb.firebaseio.com/blogs.json");
  if (!response.ok) {
    throw json({ message: "Could not fetch blog data" }, { status: 500 });
  }
}
