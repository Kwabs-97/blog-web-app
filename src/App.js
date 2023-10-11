/** @format */
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Blogs, { loader as blogsLoader } from "./pages/Blogs";
import Root from "./components/Root";
import NewBlogPage, { action as addBlogAction } from "./pages/NewBlogPage";
import BlogDetailPage, {
  loader as BlogDetailLoader,
  action as deleteBlogAction,
} from "./pages/BlogDetailPage";
import EditBlogPage from "./pages/EditBlogPage";
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
          },
        ],
      },
      {
        path: "/new",
        element: <NewBlogPage />,
        action: addBlogAction,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
