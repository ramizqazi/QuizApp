import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeTabBar from './HomeTabBar';
import HomeScreen from '../../home/screens/HomeScreen';
import CreateQuizScreen from '../../home/screens/CreateQuizScreen';
import QuizeStack from '../../quiz/screens/QuizeStack';

const Tab = createBottomTabNavigator();

/* =============================================================================
<AppNavigation />
============================================================================= */
const AppNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false, unmountOnBlur: true }}
      tabBar={renderTabBar}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="CreateQuiz" component={CreateQuizScreen} />
      <Tab.Screen name="QuizeStack" component={QuizeStack} />
    </Tab.Navigator>
  );
};

const renderTabBar = props => <HomeTabBar {...props} />;

/* Export
============================================================================= */
export default AppNavigation;
