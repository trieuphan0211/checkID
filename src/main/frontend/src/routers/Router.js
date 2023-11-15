import React from "react";
import { useRoutes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import TrustedIdentityVerification from "../pages/TrustedIdentityVerification";
import RemoteIdentityVerification from "../pages/RemoteIdentityVerification";
import FaceToFaceIdentityVerification from "../pages/FaceToFaceIdentityVerification";
import ProductLayout from "../layouts/ProductLayout";
import {
  AM_001Product,
  AllProducts,
  CheckID_SRProduct,
  R301_C11Product,
  R502_CLProduct,
  V10PProduct,
  V11Product,
  V20Product,
} from "../pages/Products";
import NotFound from "../pages/NotFound";
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
          element: <RemoteIdentityVerification />,
        },
        {
          path: `${context}/face-to-face-identity-verification`,
          element: <FaceToFaceIdentityVerification />,
        },
        {
          path: `${context}/products`,
          element: <ProductLayout />,
          children: [
            {
              path: `${context}/products`,
              element: <AllProducts />,
            },
            {
              path: `${context}/products/v11`,
              element: <V11Product />,
            },
            {
              path: `${context}/products/v20`,
              element: <V20Product />,
            },
            {
              path: `${context}/products/r502-cl`,
              element: <R502_CLProduct />,
            },
            {
              path: `${context}/products/r301-c11`,
              element: <R301_C11Product />,
            },
            {
              path: `${context}/products/am-001`,
              element: <AM_001Product />,
            },
            {
              path: `${context}/products/checkid-sr`,
              element: <CheckID_SRProduct />,
            },
            {
              path: `${context}/products/v10p`,
              element: <V10PProduct />,
            },
          ],
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
    { path: "*", element: <NotFound /> },
  ]);
  return routing;
};

export default Routers;
