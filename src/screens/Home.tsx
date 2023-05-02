import { HomeHeader } from '@components';
import { VStack } from 'native-base';

export function Home() {
  return (
    <VStack flex={1}>
      <HomeHeader />
    </VStack>
  );
}
