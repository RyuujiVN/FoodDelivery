import Dashboard from "~/pages/admin/Dashboard/Dashboard";
import Login from "~/pages/admin/Login/Login.jsx";

const routes = [
  {
    path: "/login",
    element: <Login />,
  },

  {
    path: '/',
    element: <Dashboard />
  }
];

export default routes;
