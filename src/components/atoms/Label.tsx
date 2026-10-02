import type { ReactNode } from 'react';
import { StyleSheet, Text, type StyleProp, type TextStyle } from 'react-native';

import { colors } from '@/theme/colors';

type LabelProps = {
  color?: string;
  style?: StyleProp<TextStyle>;
  children: ReactNode;
};

export function Label({ color = colors.gray100, style, children }: LabelProps) {
  return <Text style={[styles.label, { color }, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  label: {
    fontSize: 14,
    fontWeight: 'bold',
  },
});
