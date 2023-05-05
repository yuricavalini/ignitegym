import { HistoryCard, ScreenHeader } from '@components';
import { VStack } from 'native-base';

export function History() {
  return (
    <VStack flex={1}>
      <ScreenHeader title="Histórico de Exercícios" />

      <HistoryCard />
    </VStack>
  );
}
