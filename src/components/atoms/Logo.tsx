import { Image, StyleSheet, type ImageStyle, type StyleProp } from 'react-native';

const logo = require('@/assets/images/logo.png');

type LogoProps = {
  style?: StyleProp<ImageStyle>;
};

export function Logo({ style }: LogoProps) {
  return (
    <Image
      source={logo}
      style={[styles.logo, style]}
      resizeMode="contain"
      accessibilityRole="image"
      accessibilityLabel="MyList"
    />
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 118,
    height: 32,
  },
});
