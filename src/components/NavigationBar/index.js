import {
  Navigation,
  NavigationItem,
  NavigationLink,
  NavigationList,
} from "./styled";

const NavigationBar = () => {
  return (
    <Navigation>
      <NavigationList>
        <NavigationItem>
          <NavigationLink to="/create">create user</NavigationLink>
        </NavigationItem>
        <NavigationItem>
          <NavigationLink to="/show-user">show user</NavigationLink>
        </NavigationItem>
      </NavigationList>
    </Navigation>
  );
};

export default NavigationBar;
