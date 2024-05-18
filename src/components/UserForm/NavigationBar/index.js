import { Navigation, NavigationItem, NavigationList } from "./styled";

const NavigationBar = () => {
  return (
    <Navigation>
      <NavigationList>
        <NavigationItem>create user</NavigationItem>
        <NavigationItem>show user</NavigationItem>
      </NavigationList>
    </Navigation>
  );
};

export default NavigationBar;
