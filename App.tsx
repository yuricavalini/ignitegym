import { Loading } from '@components/Loading';
import {
  Roboto_400Regular,
  Roboto_700Bold,
  useFonts,
} from '@expo-google-fonts/roboto';
import { NativeBaseProvider } from 'native-base';
import { StatusBar } from 'react-native';

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <NativeBaseProvider>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      <Loading />

      {/* {fontsLoaded ? (
        <Text style={{ fontFamily: 'Roboto_700Bold' }}>
          Open up App.tsx to start working on your app!
        </Text>
      ) : (
        <View />
      )} */}
    </NativeBaseProvider>
  );
}
