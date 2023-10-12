/** @format */
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Blogs from "./pages/Blogs";
import Root from "./components/Root";
import NewBlogPage from "./pages/NewBlogPage";
import BlogDetailPage from "./pages/BlogDetailPage";
import EditBlogPage from "./pages/EditBlogPage";

import { action as manipulateBlogAction } from "./components/BlogForm";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Blogs />,
      },
      {
        path: "/:id",
        id: "blog-detail",
        children: [
          {
            path: "/:id",
            element: <BlogDetailPage />,
          },
          {
            path: "/:id/edit",
            element: <EditBlogPage />,
          },
        ],
      },
      {
        path: "/new",
        element: <NewBlogPage />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
