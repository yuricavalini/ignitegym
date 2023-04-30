import BackgroundImg from '@assets/background.png';
import LogoSvg from '@assets/logo.svg';

import { Button, Input } from '@components';

import { Center, Heading, Image, Text, VStack } from 'native-base';

export function SignIn() {
  return (
    <VStack flex={1} bg="gray.700" px={10}>
      {}
      <Image
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        source={BackgroundImg}
        alt="Pessoas treinando"
        resizeMode="contain"
        position="absolute"
      />

      <Center my={24}>
        <LogoSvg />

        <Text color="gray.100" fontSize="sm">
          Treine sua mente e o seu corpo
        </Text>
      </Center>

      <Center>
        <Heading color="gray.100" fontSize="xl" mb={6} fontFamily="heading">
          Acesse sua conta
        </Heading>

        <Input
          placeholder="E-mail"
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <Input placeholder="Senha" secureTextEntry />

        <Button title="Acessar" />
      </Center>

      <Button title="Criar conta" variant="outline" />
    </VStack>
  );
}
