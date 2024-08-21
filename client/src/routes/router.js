import { useRoutes } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../pages/Dashboard/Dashboard";
import Login from "../pages/Auth/Login/Login";
import Signup from "../pages/Auth/Signup/Signup";
import BuyToken from "../pages/BuyToken/BuyToken";
import Distribution from "../pages/Distribution/Distribution";
import Profile from "../pages/Profile/Profile";
import Layout from "../layouts";
import Forgot from "../pages/Auth/Forgot/Forgot";
import Transactions from "../pages/Transactions/Transactions";
import Regular from "../pages/Regular";
import FAQ from "../pages/FAQ";
import Verification from "../pages/Verification/Verification";
import Submission from "../pages/Submission/Submission";
export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: (
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          ),
        },
        {
          path: "/dashboard",
          element: (
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          ),
        },
        {
          path: "/buy-token",
          element: (
            <PrivateRoute>
              <BuyToken />
            </PrivateRoute>
          ),
        },
        {
          path: "/distribution",
          element: (
            <PrivateRoute>
              <Distribution />
            </PrivateRoute>
          ),
        },
        {
          path: "profile",
          element: (
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          ),
        },
        {
          path: "Transactions",
          element: (
            <PrivateRoute>
              <Transactions />
            </PrivateRoute>
          ),
        },
        {
          path: "/faq",
          element: (
            <PrivateRoute>
              <FAQ />
            </PrivateRoute>
          ),
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
    {
      path: "/forgot",
      element: <Forgot />,
    },
    {
      path: "/regular",
      element: <Regular />,
    },
    {
      path: "/verification/:emailToken/:email",
      element: <Verification />,
    },
    {
      path: "/email-verification",
      element: <Submission />,
    },
  ]);
}
