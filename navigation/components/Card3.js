import React, { useState } from 'react';
import { Animated,View, StyleSheet,Image,FlatList ,ScrollView} from 'react-native';
import { Button,Divider,Text,Searchbar,Chip ,useTheme,elevation} from 'react-native-paper';
const Card3 = ({ eventData }) => {
  const cardStyles3 = StyleSheet.create({
    container: {
      padding: 10,
      flex: 1,
      width: 170,
      margin: 10,
      marginRight: 0,
      flexDirection: 'row',
      borderRadius: 30,
      overflow: 'hidden',
      backgroundColor: 'white',
      flexWrap: 'wrap',
      flexDirection: 'column',
    },
    imageBox: {
      flex: 0.1,
    },
    text: {
      flex: 1,
      padding: 0,
    },
    image: {
      width: 150,
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
        <Text variant="titleLarge" style={{ margin: 1 }}>
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
