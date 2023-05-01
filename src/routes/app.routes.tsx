import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Exercise, History, Home, Profile } from '@screens';

const { Navigator, Screen } = createBottomTabNavigator();

export function AppRoutes() {
  return (
    <Navigator>
      <Screen name="home" component={Home} />

      <Screen name="history" component={History} />

      <Screen name="profile" component={Profile} />

      <Screen name="exercise" component={Exercise} />
    </Navigator>
  );
}
