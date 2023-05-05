import { ScreenHeader, UserPhoto } from '@components';
import { Center, ScrollView, Skeleton, Text, VStack } from 'native-base';
import { useState } from 'react';
import { TouchableOpacity } from 'react-native';

export function Profile() {
  const [photoIsLoading, setPhotoIsLoading] = useState<boolean>(false);
  const PHOTO_SIZE = 33;

  return (
    <VStack flex={1}>
      <ScreenHeader title="Perfil" />

      <ScrollView>
        <Center mt={6} px={10}>
          {photoIsLoading ? (
            <Skeleton
              w={PHOTO_SIZE}
              h={PHOTO_SIZE}
              rounded="full"
              startColor="gray.500"
              endColor="gray.400"
            />
          ) : (
            <UserPhoto
              source={{ uri: 'https://github.com/yuricavalini.png' }}
              alt="Foto do usuario"
              size={PHOTO_SIZE}
            />
          )}

          <TouchableOpacity>
            <Text
              color="green.500"
              fontWeight="bold"
              fontSize="md"
              mt={2}
              mb={8}
            >
              Alterar foto
            </Text>
          </TouchableOpacity>
        </Center>
      </ScrollView>
    </VStack>
  );
}
