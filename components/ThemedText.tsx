import * as React from 'react';
import { Text as DefaultText } from 'react-native';

import type { ThemeProps } from './state/types';
import { useThemeColor } from './state/helpers';

export type TextProps = ThemeProps & DefaultText['props'];

const ThemedText = (props: TextProps) => {
    const { style, lightColor, darkColor, ...otherProps } = props;
    const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

    return <DefaultText style={[{ color }, style]} {...otherProps} />;
}

export default ThemedText;
