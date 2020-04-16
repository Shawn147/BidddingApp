import {SignUp, Home, BottomTab, LoginOption, CreateAccount} from './screens';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();
export default function MyStack() {
  return (
    <Stack.Navigator headerMode="none" initialRouteName={'SignUp'}>
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="BottomTab" component={BottomTab} />
      <Stack.Screen name="CreateAccount" component={CreateAccount} />
      <Stack.Screen name="LoginOption" component={LoginOption} />
    </Stack.Navigator>
  );
}
