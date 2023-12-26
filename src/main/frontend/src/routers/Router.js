import React from "react";
import { useRoutes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import TrustedIdentityVerification from "../pages/identityVerification/TrustedIdentityVerification";
import RemoteIdentityVerification from "../pages/identityVerification/RemoteIdentityVerification";
import FaceToFaceIdentityVerification from "../pages/identityVerification/FaceToFaceIdentityVerification";
import ProductLayout from "../layouts/ProductLayout";
import {
  AM001Product,
  AllProducts,
  CheckIDET100,
  CheckIDSRProduct,
  R301C11Product,
  R502CLProduct,
  V10PProduct,
  V20Product,
} from "../pages/Products";
import { Partnerships, UseCase } from "../pages/customers";
import NotFound from "../pages/NotFound";
import UseCaseLayout from "../layouts/UseCaseLayout";
import { Test } from "../pages/Test";
import SolutionsLayout from "../layouts/SolutionsLayout";
import { ClientMiddleware, MobileSDK } from "../pages/solutions";
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
            // {
            //   path: `${context}/products/v11`,
            //   element: <V11Product />,
            // },
            {
              path: `${context}/products/v20`,
              element: <V20Product />,
            },
            {
              path: `${context}/products/r502-cl`,
              element: <R502CLProduct />,
            },
            {
              path: `${context}/products/r301-c11`,
              element: <R301C11Product />,
            },
            {
              path: `${context}/products/BioR502-MRZ`,
              element: <AM001Product />,
            },
            {
              path: `${context}/products/checkid-sr`,
              element: <CheckIDSRProduct />,
            },
            {
              path: `${context}/products/v10p`,
              element: <V10PProduct />,
            },
            {
              path: `${context}/products/checkid-et100`,
              element: <CheckIDET100 />,
            },
          ],
        },
        {
          path: `${context}`,
          element: <SolutionsLayout />,
          children: [
            {
              path: `${context}/solutions/client-middleware`,
              element: <ClientMiddleware />,
            },
            {
              path: `${context}/solutions/mobile-sdk`,
              element: <MobileSDK />,
            },
          ],
        },
        {
          path: `${context}/use-cases`,
          element: <UseCaseLayout />,
          children: [
            {
              path: `${context}/use-cases`,
              element: <UseCase />,
            },
            // {
            //   path: `${context}/use-cases/abn-moneyou`,
            //   element: <AbnMoneyou />,
            // },
            // {
            //   path: `${context}/use-cases/uk-home-office-euss`,
            //   element: <UkHomeOfficeEuss />,
            // },
            // {
            //   path: `${context}/use-cases/thirdfort`,
            //   element: <ThirdFort />,
            // },
            // {
            //   path: `${context}/use-cases/asb-bank`,
            //   element: <AsbBank />,
            // },
          ],
        },
        {
          path: `${context}/partnerships`,
          element: <Partnerships />,
        },
        {
          // path: `${context}/financial-services`,
          // element: ,
        },
        {
          // path: `${context}/trust-service-providers`,
          // element: ,
        },
        {
          // path: `${context}/egovernment`,
          // element: ,
        },
        {
          // path: `${context}/law-enforcement`,
          // element: ,
        },
        {
          // path: `${context}/travel`,
          // element: ,
        },
        {
          // path: `${context}/hiring`,
          // element: ,
        },
        {
          // path: `${context}/gambling`,
          // element: ,
        },
        {
          // path: `${context}/real-estate`,
          // element: ,
        },
        {
          // path: `${context}/blog`,
          // element: ,
        },
        {
          // path: `${context}/papers-reports`,
          // element: ,
        },
        {
          // path: `${context}/webinars`,
          // element: ,
        },
        {
          // path: `${context}/company`,
          // element: ,
        },
        {
          // path: `${context}/certifications`,
          // element: ,
        },
        {
          // path: `${context}/awards`,
          // element: ,
        },
        {
          // path: `${context}/careers`,
          // element: ,
        },
        {
          // path: `${context}/history`,
          // element: ,
        },
      ],
    },
    { path: "*", element: <NotFound /> },
    { path: "/test", element: <Test /> },
  ]);
  return routing;
};

export default Routers;
