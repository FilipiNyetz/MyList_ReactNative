import Feather from '@expo/vector-icons/Feather';
import type { ComponentProps } from 'react';
import { Pressable, StyleSheet, type PressableProps, type StyleProp, type ViewStyle } from 'react-native';

import { colors } from '@/theme/colors';

type IconButtonProps = Omit<PressableProps, 'style'> & {
  icon: ComponentProps<typeof Feather>['name'];
  size?: number;
  style?: StyleProp<ViewStyle>;
};

export function IconButton({ icon, size = 18, style, ...props }: IconButtonProps) {
  return (
    <Pressable
      accessibilityRole="button"
      style={({ pressed }) => [styles.button, pressed && styles.pressed, style]}
      {...props}
    >
      <Feather name={icon} size={size} color={colors.gray100} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 54,
    height: 54,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.blueDark,
  },
  pressed: {
    backgroundColor: colors.blue,
  },
});
