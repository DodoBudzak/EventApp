import { NavigationContainer } from '@react-navigation/native';

import firestore from '@react-native-firebase/firestore';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import auth from "@react-native-firebase/auth";
import React, { useState,useEffect ,useContext} from 'react';
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
import SignInScreen from './navigation/screens/Auth/SignInScreen';
import LoginScreen from './navigation/screens/Auth/LoginInScreen';
import HomeScreen from './navigation/screens/Home/HomeScreen';
import FauvoritesScreen from './navigation/screens/FauvoritesScreen';
import UserScreen from './navigation/screens/User/UserScreen';
import SearchScreen from './navigation/screens/Search/SearchScreen';
import CalendarScreen from"./navigation/screens/CalendarScreen"

import messaging from "@react-native-firebase/messaging"
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { PaperProvider } from 'react-native-paper';
import CardDetail from './navigation/screens/Home/CardDetail';
import FilterModal from './navigation/screens/Search/FilterModal';



const Stack = createNativeStackNavigator();
const CardStack = createNativeStackNavigator();
const UserStack = createNativeStackNavigator();
const LoginInStack = createNativeStackNavigator();
const SearchStack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();



export const Context = React.createContext()

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




//homepage stack
const CardStackGroup =({navigation}) =>{
    return(
    <CardStack.Navigator  >
        <CardStack.Screen name='Homes' options={{headerShown:false}} component={HomeScreen}/>
        <CardStack.Screen name='CardDetail'  component={CardDetail} />

    </CardStack.Navigator>
)  
}

//search stack
const SearchStackGroup = ({navigation}) =>{
        const chipData = [
          { chipId: 1, type: 'FilterCategory', text: 'Sport' },
          { chipId: 2, type: 'FilterCategory', text: 'Technology' },
          { chipId: 3, type: 'FilterCategory', text: 'Music' },
          { chipId: 4, type: 'FilterCategory', text: 'Food' },
          { chipId: 5, type: 'FilterCategory', text: 'Travel' },
          { chipId: 6, type: 'FilterCategory', text: 'Health' },
          { chipId: 7, type: 'FilterCategory', text: 'Fashion' },
          { chipId: 8, type: 'FilterCategory', text: 'Art' },
          { chipId: 9, type: 'FilterType', text: 'Type1' },
          { chipId: 10, type: 'FilterType', text: 'Type2' },
          { chipId: 11, type: 'FilterType', text: 'Type3' },
          { chipId: 12, type: 'FilterType', text: 'Type4' },
          { chipId: 13, type: 'FilterType', text: 'Type5' },
          { chipId: 14, type: 'FilterType', text: 'Type6' },
          { chipId: 15, type: 'FilterType', text: 'Type7' },
          { chipId: 16, type: 'FilterType', text: 'Type8' },
          { chipId: 17, type: 'FilterOkres', text: 'Okres1' },
          { chipId: 18, type: 'FilterOkres', text: 'Okres2' },
          { chipId: 19, type: 'FilterOkres', text: 'Okres3' },
          { chipId: 20, type: 'FilterOkres', text: 'Okres4' },
          { chipId: 21, type: 'FilterOkres', text: 'Okres5' },
          { chipId: 22, type: 'FilterOkres', text: 'Okres6' },
          { chipId: 23, type: 'FilterOkres', text: 'Okres7' },
          { chipId: 24, type: 'FilterOkres', text: 'Okres8' },
          
        ];
        
        const [chipsSelected, setChipsSelected] = useState({});
      
      


  return(
    <Context.Provider value={[chipsSelected,setChipsSelected]}>
    <SearchStack.Navigator  screenOptions={{headerShown:true}}>

    
      <SearchStack.Screen name="SearchScreen"
       component={SearchScreen}
       screenOptions={{headerShown:false}}
        />
      <SearchStack.Screen  name="FilterModal"
          component={FilterModal} 
             
          
        />

    </SearchStack.Navigator>
    </Context.Provider>
  )
}



//login stack
  const LoginInScreenGroup = () =>{
  return(
      <LoginInStack.Navigator screenOptions={{headerShown:false}} >
      
        <LoginInStack.Screen name='SignUp' component={SignInScreen} 
         />  
        <LoginInStack.Screen name='Login' component={LoginScreen}/> 
        <LoginInStack.Screen name='HomeBase' component={TabGroup}/>  
        
      </LoginInStack.Navigator>      
  )
  }


//top tap hihi 

//layoutik
const TabGroup = ({navigation})  =>{
  return(
    <Tab.Navigator
    initialRouteName='Home'
    activeColor='rgba(0, 100, 255, 0.9)'
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
      component={SearchStackGroup}
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



  return (
    
  
        <NavigationContainer>
         
            <LoginInScreenGroup/>   
          
        </NavigationContainer>
   

  );
}

