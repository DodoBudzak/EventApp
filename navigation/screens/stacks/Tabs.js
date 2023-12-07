import React from 'react';
import  createMaterialBottomTabNavigator  from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CardStackGroup from './CardStackGroup';
import SearchStackGroup from './SearchStackGroup';
import FauvoritesScreen from '../FauvoritesScreen';
import CalendarScreen from '../CalendarScreen';
import UserScreen from '../User/UserScreen';

const Tab = createMaterialBottomTabNavigator();

const TabGroup = () => {
  return (
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
  );
};

export default TabGroup;