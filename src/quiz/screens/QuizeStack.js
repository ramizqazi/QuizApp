import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import QuizeStartScreen from './QuizeStartScreen';
import QuizesScreen from './QuizesScreen';
import QuizeScreen from './QuizeScreen';
// import ResultScreen from './ResultScreen';

/* =============================================================================
<QuizeStack />
============================================================================= */
const QuizeStack = () => {
  return (
    <Stack.Navigator
      headerMode="none"
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
      }}>
      <Stack.Screen name="Quizes" component={QuizesScreen} />
      <Stack.Screen name="QuizeStart" component={QuizeStartScreen} />
      <Stack.Screen name="Quize" component={QuizeScreen} />
      {/* <Stack.Screen name="Result" component={ResultScreen} /> */}
    </Stack.Navigator>
  );
};

/* Export
============================================================================= */
export default QuizeStack;
