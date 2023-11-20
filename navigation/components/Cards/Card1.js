import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const Card1 = ({ eventData }) => {
  const cardStyles = StyleSheet.create({
    container: {
      width:"85%",
      height:"80%",
      borderRadius: 20,
      overflow: 'hidden',
      backgroundColor: 'white',
      alignSelf:"center",
      
    },
    image: {
      
      height:270,
      width:350,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      borderBottomLeftRadius: 5,
      borderBottomRightRadius: 5,
    },
    textContainer: {
      position: 'absolute',
      bottom: 90,
      left: 0,
      right: 0,
      backgroundColor: 'rgba(50, 0, 100, 0.5)',
      padding: 10,
      borderBottomLeftRadius: 5,
      borderBottomRightRadius: 5,
    },
    titleText: {
      color: 'white',
      fontSize: 18,
    },
    subtitleText: {
      color: 'white',
      fontSize: 14,
    },
    descriptionText: {
      color: 'white',
      fontSize: 12,
    },
  });

  const navigation = useNavigation()

  const DoNavigate =() =>{
    navigation.navigate("CardDetail",{eventItem:eventData})
   
  }
  return (
    <View style={cardStyles.container}>
      <TouchableOpacity onPress={DoNavigate}>
        <Image source={eventData.imageSource} style={cardStyles.image} />
        <View style={cardStyles.textContainer}>
          <Text style={cardStyles.titleText}>{eventData.eventTitle}</Text>
         
          <Text style={cardStyles.descriptionText}>Super muzikant</Text>
        </View>
        </TouchableOpacity>
      </View>
  );
};

export default Card1;
