import {SignUp, Home, BottomTab} from './screens';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();
export default function MyStack() {
  return (
    <Stack.Navigator headerMode="none" initialRouteName={'BottomTab'}>
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="BottomTab" component={BottomTab} />
    </Stack.Navigator>
  );
}
