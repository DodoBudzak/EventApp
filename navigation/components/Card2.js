import React, { useState } from 'react';
import { Animated,View, StyleSheet,Image,FlatList ,ScrollView} from 'react-native';
import { Button,Divider,Text,Searchbar,Chip ,useTheme,elevation} from 'react-native-paper';

const Card2 = ( {eventData} ) => {
    const cardStyles = StyleSheet.create({
      container: {
        padding: 10,
        width: 350,
        height: 150,
        margin: 10,
        marginRight: 50,
        flexDirection: 'row',
        borderRadius: 20,
        overflow: 'hidden',
        backgroundColor: 'white',
        elevation: 2,
      },
      imageBox: {
        flex: 2,
      },
      text: {
        flex: 3,
        padding: 10,
      },
      image: {
        flex: 1,
        aspectRatio: 1,
        borderRadius: 20,
      },
    });
  console.log(eventData)
    return (
      <View style={cardStyles.container}>
        <View style={cardStyles.imageBox}>
          <Image source={eventData.imageSource} style={cardStyles.image} />
        </View>
        <View style={cardStyles.text}>
          <Text variant="titleLarge" style={{ margin: 1 }}>
            {eventData.eventTitle}
          </Text>
          <Text variant="titleMedium" style={{ marginTop: 5 }}>
            {eventData.date}
          </Text>
          <Text variant="titleSmall" style={{ margin: 2 }}>
            {eventData.location}, {eventData.city}
          </Text>
        </View>
      </View>
    );
  };
  export default Card2