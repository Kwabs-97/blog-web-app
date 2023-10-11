/** @format */

import React from "react";
import BlogForm from "../components/BlogForm";
import { json, redirect } from "react-router-dom";

function NewEventPage() {
  return <BlogForm />;
}

export default NewEventPage;
export async function action({ request, params }) {
  const data = await request.formData();

  const eventData = {
    title: data.get("title"),
    image: data.get("image"),
    date: data.get("date"),
    description: data.get("description"),
    category: data.get("category"),
  };

  console.log(eventData.title);

  const response = await fetch("https://blogdata-392a9-default-rtdb.firebaseio.com/blogs.json", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(eventData),
  });

  if (!response.ok) {
    throw json({ message: "Could not save event." }, { status: 500 });
  }

  return redirect("/");
}
