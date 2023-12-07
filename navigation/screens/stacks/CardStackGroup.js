import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from '../Home/HomeScreen';
import CardDetail from '../Home/CardDetail';

const CardStack = createNativeStackNavigator();

const CardStackGroup = ({ navigation }) => {
  return (
    <CardStack.Navigator>
      <CardStack.Screen name='Home' options={{ headerShown: false }} component={HomeScreen} />
      <CardStack.Screen name='CardDetail' component={CardDetail} />
    </CardStack.Navigator>
  );
};

export default CardStackGroup;