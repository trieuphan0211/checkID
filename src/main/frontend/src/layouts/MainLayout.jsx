import React, { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

const MainLayout = () => {
  const locate = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (locate.pathname === "/" || locate.pathname === "") {
      navigate(`/home`);
    }
  }, [locate]);
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default MainLayout;
