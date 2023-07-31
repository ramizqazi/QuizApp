import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import QuizScreen from './QuizScreen';
import QuizesScreen from './QuizesScreen';

/* =============================================================================
<QuizeStack />
============================================================================= */
const QuizeStack = () => {
  return (
    <Stack.Navigator
      headerMode="none"
      screenOptions={{ headerShown: false, animation: 'slide_from_right' }}>
      <Stack.Screen name="Quizes" component={QuizesScreen} />
      <Stack.Screen name="Quiz" component={QuizScreen} />
    </Stack.Navigator>
  );
};

/* Export
============================================================================= */
export default QuizeStack;
