import React, { useState } from 'react';
import { Animated,View, StyleSheet,Image,FlatList ,ScrollView, TouchableOpacity} from 'react-native';
import { Button,Divider,Text,Searchbar,Chip ,useTheme,elevation} from 'react-native-paper';
const Card3 = ({ navigation,eventData }) => {
  const cardStyles3 = StyleSheet.create({
    container: {
      padding: 10,
      width: 170,
      margin: 3,
      marginRight: 0,
      flexDirection: 'column',
      borderRadius: 30,
      backgroundColor: 'white',
      
    },
    imageBox: {
      flex: 1, // Adjust the flex to allocate more space for the image
    },
    text: {
      flex: 1, // Adjust the flex to allocate less space for the text
      marginTop:60
    },
    image: {
      width: '100%', // Make sure the image takes 100% width of its container
      height: 150,
      borderRadius: 20,
    },
  });

  return (
    
    <View style={cardStyles3.container}>
      <View style={cardStyles3.imageBox}>
        <Image source={eventData.imageSource} style={cardStyles3.image} />
      </View>
      <View style={cardStyles3.text}>
        <Text variant="titleLarge" style={{ margin: 0 }}>
          {eventData.eventTitle}
        </Text>
        <Text variant="titleSmall" style={{ margin: 2 }}>
          {eventData.date}
        </Text>
      </View>
    </View>

  );
};

export default Card3;
