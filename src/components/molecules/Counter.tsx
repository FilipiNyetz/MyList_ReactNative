import { StyleSheet, View } from 'react-native';

import { Badge, Label } from '@/components/atoms';

type CounterProps = {
  label: string;
  value: number;
  color?: string;
};

export function Counter({ label, value, color }: CounterProps) {
  return (
    <View style={styles.container}>
      <Label color={color}>{label}</Label>
      <Badge value={value} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
});
