import { NavigationContainer } from '@react-navigation/native';

import firestore from '@react-native-firebase/firestore';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import auth from "@react-native-firebase/auth";
import React, { useState,useEffect } from 'react';
import {
  Alert,
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TextInput,
} from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'; // Import the icon library
import Icon from 'react-native-paper';
import SignInScreen from './navigation/screens/SignInScreen';
import LoginScreen from './navigation/screens/LoginInScreen';
import HomeScreen from './navigation/screens/HomeScreen';
import FauvoritesScreen from './navigation/screens/FauvoritesScreen';
import UserScreen from './navigation/screens/UserScreen';
import SearchScreen from './navigation/screens/SearchScreen';
import CalendarScreen from"./navigation/screens/CalendarScreen"

import messaging from "@react-native-firebase/messaging"
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { PaperProvider } from 'react-native-paper';
import CardDetail from './navigation/screens/CardDetail';



const Stack = createNativeStackNavigator();
const CardStack = createNativeStackNavigator();
const UserStack = createNativeStackNavigator();
const LoginInStack = createNativeStackNavigator();

const Tab = createMaterialBottomTabNavigator();

export async function onGoogleButtonPress() {
  try{
  
  await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
 
  const { idToken ,user} = await GoogleSignin.signIn();

  const googleCredential = auth.GoogleAuthProvider.credential(idToken);
  
  console.log(idToken)
  
  return auth().signInWithCredential(googleCredential);

  }catch(error){

    console.log(error)
  }
}

export default function App() {

  //notifikacie
   async function requestUserPermission() { //notifikacie s firebasu
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;
  
    if (enabled) {
      
      //console.log('Authorization status:', authStatus);
    }
  }
  const getToken = async() =>{
    const token = await messaging().getToken();
    
  }

  const getData = async() =>{
    const mestaCollection =  await firestore().collection("Mesta").get()
    console.log(mestaCollection.docs[0].data())
  }

  useEffect(()=>{
    //google sigin
    GoogleSignin.configure({
      webClientId: '577657735730-r65l195mepv8gt1s6b7si0uv8qpmorg2.apps.googleusercontent.com',
    });
    //databaza
    //getData()
    //notifikacie
    //requestUserPermission()
    //getToken()
  },[])



  //layoutik
  const TabGroup = ({navigation})  =>{
    return(
      <Tab.Navigator
      initialRouteName='Home'
      activeColor='#fAAAAa'
      shifting={true}
      headerShown={false}
    
    >
      <Tab.Screen
        name='Home'
        component={CardStackGroup}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name='home' color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name='Search'
        component={SearchScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name='magnify' color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name='Favorites'
        component={FauvoritesScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name='heart' color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name='Kalendar'
        component={CalendarScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name='calendar' color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name='User'
        component={UserScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name='account' color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
)
  }

  const CardStackGroup =({navigation}) =>{
    return(
    <CardStack.Navigator screenOptions={{headerShown:false}} >
        <CardStack.Screen name='Homes' component={HomeScreen}/>
        <CardStack.Screen name='CardDetail' component={CardDetail} />

    </CardStack.Navigator>
)  
}

  const LoginInScreenGroup = () =>{
  return(
      <LoginInStack.Navigator screenOptions={{headerShown:false}}>
      
        <LoginInStack.Screen name='SignUp' component={CalendarScreen}/>  
        <LoginInStack.Screen name='Login' component={LoginScreen}/> 
        <LoginInStack.Screen name='HomeBase' component={TabGroup}/>  
        
      </LoginInStack.Navigator>      
  )
  }




  return (
    
    <PaperProvider >
        <NavigationContainer>
         
            <LoginInScreenGroup/>   
          
        </NavigationContainer>
    </PaperProvider>

  );
}

