import { NavigationHeader, NavigationNavLink } from "./Navigation.styled";

const Navigation = () => (
  <NavigationHeader>
    <nav>
      <NavigationNavLink to="/">Home</NavigationNavLink>
      <NavigationNavLink to="/movies">Movies</NavigationNavLink>
    </nav>
  </NavigationHeader>
);

export default Navigation;
