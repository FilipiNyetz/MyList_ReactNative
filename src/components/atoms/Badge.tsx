import { StyleSheet, Text, View } from 'react-native';

import { colors } from '@/theme/colors';

type BadgeProps = {
  value: number;
};

export function Badge({ value }: BadgeProps) {
  return (
    <View style={styles.badge}>
      <Text style={styles.text}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    minWidth: 25,
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 999,
    alignItems: 'center',
    backgroundColor: colors.gray400,
  },
  text: {
    color: colors.gray100,
    fontSize: 12,
    fontWeight: 'bold',
  },
});
