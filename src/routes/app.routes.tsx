import {
  BottomTabNavigationProp,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';

import { Exercise, History, Home, Profile } from '@screens';

type AppRoutesTypes = {
  home: undefined;
  exercise: undefined;
  profile: undefined;
  history: undefined;
};

export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutesTypes>;

const { Navigator, Screen } = createBottomTabNavigator<AppRoutesTypes>();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />

      <Screen name="history" component={History} />

      <Screen name="profile" component={Profile} />

      <Screen name="exercise" component={Exercise} />
    </Navigator>
  );
}
