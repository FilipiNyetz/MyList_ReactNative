import { StyleSheet, View, type StyleProp, type ViewStyle } from 'react-native';

import { IconButton, TextField } from '@/components/atoms';

type AddItemFormProps = {
  value: string;
  onChangeText: (text: string) => void;
  onSubmit: () => void;
  style?: StyleProp<ViewStyle>;
};

export function AddItemForm({ value, onChangeText, onSubmit, style }: AddItemFormProps) {
  return (
    <View style={[styles.container, style]}>
      <TextField
        style={styles.field}
        placeholder="Adicione algo a sua lista"
        value={value}
        onChangeText={onChangeText}
        returnKeyType="done"
      />
      <IconButton
        icon="plus-circle"
        accessibilityLabel="Adicionar item"
        onPress={onSubmit}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 4,
  },
  field: {
    flex: 1,
  },
});
