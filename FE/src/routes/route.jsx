import LayoutDefault from "~/components/admin/LayoutDefault/LayoutAdmin";
import Dashboard from "~/pages/admin/Dashboard/Dashboard";
import Login from "~/pages/admin/Login/Login.jsx";

const routes = [
  {
    path: "/login",
    element: <Login />,
  },

  {
    path: "/",
    element: <LayoutDefault />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
    ],
  },
];

export default routes;
