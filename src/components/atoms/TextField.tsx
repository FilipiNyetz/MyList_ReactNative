import { useState } from 'react';
import { StyleSheet, TextInput, type TextInputProps } from 'react-native';

import { colors } from '@/theme/colors';

export type TextFieldProps = TextInputProps;

export function TextField({ style, onFocus, onBlur, ...props }: TextFieldProps) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <TextInput
      placeholderTextColor={colors.gray300}
      selectionColor={colors.blue}
      style={[styles.input, isFocused && styles.inputFocused, style]}
      onFocus={(event) => {
        setIsFocused(true);
        onFocus?.(event);
      }}
      onBlur={(event) => {
        setIsFocused(false);
        onBlur?.(event);
      }}
      {...props}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    height: 54,
    paddingHorizontal: 16,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: colors.gray700,
    backgroundColor: colors.gray500,
    color: colors.gray100,
    fontSize: 16,
  },
  inputFocused: {
    borderColor: colors.blueDark,
  },
});
