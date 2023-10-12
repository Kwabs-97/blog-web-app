/** @format */
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Blogs, { loader as blogsLoader } from "./pages/Blogs";
import Root from "./components/Root";
import NewBlogPage from "./pages/NewBlogPage";
import BlogDetailPage, {
  loader as BlogDetailLoader,
  action as deleteBlogAction,
} from "./pages/BlogDetailPage";
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
        loader: blogsLoader,
      },
      {
        path: "/:id",
        id: "blog-detail",
        loader: BlogDetailLoader,
        children: [
          {
            path: "/:id",
            element: <BlogDetailPage />,
            action: deleteBlogAction,
          },
          {
            path: "/:id/edit",
            element: <EditBlogPage />,
            action: manipulateBlogAction
          },
        ],
      },
      {
        path: "/new",
        element: <NewBlogPage />,
        action: manipulateBlogAction,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
