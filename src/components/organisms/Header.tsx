import { StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { colors } from '@/theme/colors';
import { Divider, Logo } from '@/components/atoms';
import { AddItemForm, Counter } from '@/components/molecules';

const FORM_HEIGHT = 54;

type HeaderProps = {
  value: string;
  onChangeText: (text: string) => void;
  onAdd: () => void;
  createdCount: number;
  doneCount: number;
};

export function Header({ value, onChangeText, onAdd, createdCount, doneCount }: HeaderProps) {
  const insets = useSafeAreaInsets();

  return (
    <View>
      <View style={[styles.top, { paddingTop: insets.top + 70 }]}>
        <Logo />
      </View>

      <View style={styles.content}>
        {/* Metade do form fica sobre o fundo do topo, metade sobre o fundo da tela */}
        <AddItemForm
          style={styles.form}
          value={value}
          onChangeText={onChangeText}
          onSubmit={onAdd}
        />

        <View style={styles.counters}>
          <Counter label="Criadas" value={createdCount} color={colors.teal} />
          <Counter label="Concluídas" value={doneCount} color={colors.blue} />
        </View>

        <Divider />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  top: {
    alignItems: 'center',
    paddingBottom: 40 + FORM_HEIGHT / 2,
    backgroundColor: colors.gray600,
  },
  content: {
    paddingHorizontal: 24,
  },
  form: {
    marginTop: -FORM_HEIGHT / 2,
  },
  counters: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 32,
    marginBottom: 20,
  },
});
