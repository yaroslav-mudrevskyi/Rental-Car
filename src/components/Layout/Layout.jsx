import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import Loader from "../Loader/Loader";
import Navigation from "../Navigation/Navigation";

const Layout = () => {
  return (
    <div>
      <Navigation />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Layout;
