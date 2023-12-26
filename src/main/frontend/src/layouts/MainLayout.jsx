import React from "react";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
// import "../assets/scss/Animation.scss";
// import "../services/Animation.js";

const MainLayout = () => {
  const locate = useLocation();
  // Begin: Scroll to top when route changes
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [locate.pathname]);
  // End: Scroll to top when route changes
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default MainLayout;
