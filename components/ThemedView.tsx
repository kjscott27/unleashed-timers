import React from 'react';
import { View as DefaultView } from 'react-native';

import type { ThemeProps } from './state/types';
import { useThemeColor } from './state/helpers';

type ViewProps = ThemeProps & DefaultView['props'];

export const ThemedView = (props: ViewProps) => {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    'background',
  );

  return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
};

export default ThemedView;
