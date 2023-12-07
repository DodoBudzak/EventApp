import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignInScreen from '../Auth/SignInScreen';
import LoginScreen from '../Auth/LoginInScreen';
import TabGroup from './Tabs';

const LoginInStack = createNativeStackNavigator();

const LoginInGroup = () => {
  return (
    <LoginInStack.Navigator screenOptions={{ headerShown: false }}>
      <LoginInStack.Screen name='SignUp' component={SignInScreen} />
      <LoginInStack.Screen name='Login' component={LoginScreen} />
      <LoginInStack.Screen name='HomeBase' component={TabGroup} />
    </LoginInStack.Navigator>
  );
};

export default LoginInGroup;