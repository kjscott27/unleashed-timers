import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import * as React from 'react';

import {
  BottomTabParamList,
  HomeTabParamList,
  BossesTabParamList,
  SettingsTabParamList,
} from './state/types';

import Colors from '../globals/constants/Colors';
import useColorScheme from '../globals/hooks/useColorScheme';

import Bosses from '../screens/Bosses';
import Home from '../screens/Home';
import Settings from '../screens/Settings';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

const BottomTabNavigator = () => {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name="Home"
        component={HomeTabNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="ios-home" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Bosses"
        component={BossesTabNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="ios-alert" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Settings"
        component={SettingsTabNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="ios-code" color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigator;

const TabBarIcon = (props: { name: string; color: string }) => (
  // @ts-ignore
  <Ionicons size={20} style={{ marginBottom: -3 }} {...props} />
);

const HomeTabStack = createStackNavigator<HomeTabParamList>();

const HomeTabNavigator = () => (
  <HomeTabStack.Navigator>
    <HomeTabStack.Screen
      name="HomeTabScreen"
      component={Home}
      options={{ headerTitle: 'Home' }}
    />
  </HomeTabStack.Navigator>
);

const BossesTabStack = createStackNavigator<BossesTabParamList>();

const BossesTabNavigator = () => (
  <BossesTabStack.Navigator>
    <BossesTabStack.Screen
      name="BossesTabScreen"
      component={Bosses}
      options={{ headerTitle: 'Bosses' }}
    />
  </BossesTabStack.Navigator>
);

const SettingsTabStack = createStackNavigator<SettingsTabParamList>();

const SettingsTabNavigator = () => (
  <SettingsTabStack.Navigator>
    <SettingsTabStack.Screen
      name="SettingsTabScreen"
      component={Settings}
      options={{ headerTitle: 'Settings' }}
    />
  </SettingsTabStack.Navigator>
);
