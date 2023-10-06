import React, { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default MainLayout;
