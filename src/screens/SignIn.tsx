import { Image, VStack } from 'native-base';

import BackgroundImg from '@assets/background.png';

export function SignIn() {
  return (
    <VStack flex={1} bg="gray.700">
      {}
      <Image
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        source={BackgroundImg}
        alt="Pessoas treinando"
        resizeMode="contain"
        position="absolute"
      />
    </VStack>
  );
}
