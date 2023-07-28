import React from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeTabBar from './HomeTabBar';
import HomeScreen from '../../home/screens/HomeScreen';
import CreateQuizScreen from '../../home/screens/CreateQuizScreen';

const Tab = createBottomTabNavigator();

const EMPTY_SCREEN = () => (
  <View>
    <Text>Hello world</Text>
  </View>
);

/* =============================================================================
<AppNavigation />
============================================================================= */
const AppNavigation = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }} tabBar={renderTabBar}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="CreateQuiz" component={CreateQuizScreen} />
      <Tab.Screen name="Saved" component={EMPTY_SCREEN} />
    </Tab.Navigator>
  );
};

const renderTabBar = props => <HomeTabBar {...props} />;

/* Export
============================================================================= */
export default AppNavigation;
