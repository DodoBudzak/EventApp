import React, { useState } from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SearchScreen from '../Search/SearchScreen';
import FilterModal from '../Search/FilterModal';
import { Context } from "../../../App"

const SearchStack = createNativeStackNavigator();

const SearchStackGroup = ({ navigation }) => {
  const [chipsSelected, setChipsSelected] = useState({});

  return (
    <Context.Provider value={[chipsSelected, setChipsSelected]}>
      <SearchStack.Navigator screenOptions={{ headerShown: true }}>
        <SearchStack.Screen name='SearchScreen' component={SearchScreen} options={{ headerShown: false }} />
        <SearchStack.Screen name='FilterModal' component={FilterModal} />
      </SearchStack.Navigator>
    </Context.Provider>
  );
};

export default SearchStackGroup;