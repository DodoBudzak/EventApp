import React, { useState,useContext } from 'react';

import { View, StyleSheet,Image,FlatList ,ScrollView} from 'react-native';
import { Button,Divider,Text,Searchbar,Chip ,Card,Avatar} from 'react-native-paper';

import {Context} from "../../../App"

const FilterModal = ({ navigation }) => {
 
 
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
  const filterTypes = Array.from(new Set(chipData.map((chip) => chip.type)));

  const [chipsSelected, setChipsSelected] = useContext(Context)
  
  const handleChipPress = (chipId) => {
    setChipsSelected((prevChipsSelected) => ({
      ...prevChipsSelected,
      [chipId]: !prevChipsSelected[chipId],
    }));
    
  };
  
 
  
  const getSelectedFilters = () => {
    const selectedFilters = {};
  
    chipData.forEach((chip) => {
      if (chipsSelected[chip.chipId]) {
        if (!selectedFilters[chip.type]) {
          selectedFilters[chip.type] = [];
        }
        selectedFilters[chip.type].push(chip.text);
      }
    });
    console.log(selectedFilters)
    return selectedFilters;
  };
  



  return (
    <View style={styles.container}>
      {filterTypes.map((filterType) => (
        <View key={filterType} style={styles.chipGroup}>
          <Text variant='headlineSmall'>{filterType}</Text>
          <View style={styles.Chips}>
            {chipData
              .filter((chip) => chip.type === filterType)
              .map((chip) => (
                <Chip
                  icon={()=>{null}}
                  key={chip.chipId}
                  selected={chipsSelected[chip.chipId]}
                   style={[styles.chipItem, { backgroundColor: chipsSelected[chip.chipId] ? 'blue' : 'lightblue' }]}

                  rippleColor={"blue"}
                  onPress={() => handleChipPress(chip.chipId)}
                >
                  {chip.text}
                </Chip>
              ))}
          </View>
        </View>
      ))}

      <View>
      


      </View>
      <Text>Selected Filters: {JSON.stringify(getSelectedFilters())}</Text>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    padding: 20,
  },
  chipGroup: {
    marginBottom: 20,
  },
  Chips: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
  },
  chipItem: {
   margin:5
  },
};

export default FilterModal;