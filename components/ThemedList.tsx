import * as React from 'react';
import { Text as DefaultText } from 'react-native';

import type { ThemeProps } from './state/types';
import { useThemeColor } from './state/helpers';

export type TextProps = ThemeProps & DefaultText['props'];
