import { ColorSchemeName } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import * as React from 'react';

import { RootStackParamList } from './state/types';

import BottomTabNavigator from './BottomTabNavigator';
import LinkingConfiguration from './LinkingConfiguration';
import NotFoundScreen from '../screens/NotFoundScreen';

const Navigation = ({ colorScheme }: { colorScheme: ColorSchemeName }) => (
  <NavigationContainer
    linking={LinkingConfiguration}
    theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
    <RootNavigator />
  </NavigationContainer>
);
export default Navigation;

const Stack = createStackNavigator<RootStackParamList>();

const RootNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Root" component={BottomTabNavigator} />
    <Stack.Screen
      name="NotFound"
      component={NotFoundScreen}
      options={{ title: 'Oops!' }}
    />
  </Stack.Navigator>
);
