import React from "react";
import { useRoutes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import TrustedIdentityVerification from "../pages/TrustedIdentityVerification";
const context = "";
const Routers = () => {
  const routing = useRoutes([
    {
      path: context,
      element: <MainLayout />,
      children: [
        {
          path: `${context}/home`,
          element: <HomePage />,
        },
        {
          path: `${context}/truted-identity-verification`,
          element: <TrustedIdentityVerification />,
        },
      ],
    },
  ]);
  return routing;
};

export default Routers;
