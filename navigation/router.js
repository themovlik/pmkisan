import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import StartScreen from '../src/screens/StartScreen';
import HomeScreen from '../src/screens/HomeScreen';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="StartScreen" component={StartScreen} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default Router;
