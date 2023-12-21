import { Outlet } from "react-router-dom";
import { Suspense } from "react";

import { NavigationHeader, NavigationNavLink } from "./Navigation.styled";
import Loader from "../Loader";

const Navigation = () => (
  <div>
    <NavigationHeader>
      <nav>
        <NavigationNavLink to="/">Home</NavigationNavLink>
        <NavigationNavLink to="/movies">Movies</NavigationNavLink>
      </nav>
    </NavigationHeader>
    <Suspense fallback={<Loader />}>
      <Outlet />
    </Suspense>
  </div>
);

export default Navigation;
