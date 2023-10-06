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
          path: `${context}/`,
          element: <HomePage />,
        },
        {
          path: `${context}/trusted-identity-verification`,
          element: <TrustedIdentityVerification />,
        },
        {
          path: `${context}/remote-identity-verification`,
          // element: ,
        },
        {
          path: `${context}/face-to-face-identity-verification`,
          // element: ,
        },
        {
          path: `${context}/use-cases`,
          // element: ,
        },
        {
          path: `${context}/partnerships`,
          // element: ,
        },
        {
          path: `${context}/use-cases/abn-moneyou`,
          // element: ,
        },
        {
          path: `${context}/use-cases/uk-home-office-euss`,
          // element: ,
        },
        {
          path: `${context}/use-cases/thirdfort`,
          // element: ,
        },
        {
          path: `${context}/use-cases/asb-bank`,
          // element: ,
        },
        {
          path: `${context}/financial-services`,
          // element: ,
        },
        {
          path: `${context}/trust-service-providers`,
          // element: ,
        },
        {
          path: `${context}/egovernment`,
          // element: ,
        },
        {
          path: `${context}/law-enforcement`,
          // element: ,
        },
        {
          path: `${context}/travel`,
          // element: ,
        },
        {
          path: `${context}/hiring`,
          // element: ,
        },
        {
          path: `${context}/gambling`,
          // element: ,
        },
        {
          path: `${context}/real-estate`,
          // element: ,
        },
        {
          path: `${context}/blog`,
          // element: ,
        },
        {
          path: `${context}/papers-reports`,
          // element: ,
        },
        {
          path: `${context}/webinars`,
          // element: ,
        },
        {
          path: `${context}/company`,
          // element: ,
        },
        {
          path: `${context}/certifications`,
          // element: ,
        },
        {
          path: `${context}/awards`,
          // element: ,
        },
        {
          path: `${context}/careers`,
          // element: ,
        },
        {
          path: `${context}/history`,
          // element: ,
        },
        {
          path: `${context}/partnerships`,
          // element: ,
        },
        {
          path: `${context}`,
          // element: ,
        },
        {
          path: `${context}`,
          // element: ,
        },
        {
          path: `${context}`,
          // element: ,
        },
        {
          path: `${context}`,
          // element: ,
        },
      ],
    },
  ]);
  return routing;
};

export default Routers;
