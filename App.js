/**
 * @format
 */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from './src/screens/HomeScreen';
import DetailScreen from './src/screens/DetailScreen';
import HeaderlessScreen from './src/screens/HeaderlessScreen';
import TodoListScreen from './src/screens/TodoListScreen';

import {
  DetailScreenOptions,
  HeaderlessScreenOptions,
  HomeScreenOptions,
  TodoListScreenOptions,
} from './src/styles/App.ScreenOptions';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={HomeScreenOptions}
        />
        <Stack.Screen
          name="Detail"
          component={DetailScreen}
          options={DetailScreenOptions}
        />
        <Stack.Screen
          name="Headerless"
          component={HeaderlessScreen}
          options={HeaderlessScreenOptions}
        />
        <Stack.Screen
          name="TodoList"
          component={TodoListScreen}
          options={TodoListScreenOptions}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
