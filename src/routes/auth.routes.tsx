import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import { SignIn, SignUp } from '@screens';

type AuthRoutesTypes = {
  signIn: undefined;
  signUp: undefined;
};

export type AuthNavigatorRouterProps =
  NativeStackNavigationProp<AuthRoutesTypes>;

const { Navigator, Screen } = createNativeStackNavigator<AuthRoutesTypes>();

export function AuthRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="signIn" component={SignIn} />

      <Screen name="signUp" component={SignUp} />
    </Navigator>
  );
}
