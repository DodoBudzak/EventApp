import React, { useState } from 'react';
import { View, StyleSheet,Image,FlatList ,ScrollView} from 'react-native';

import { Button,Divider,Text,Searchbar,Chip,TextInput ,useTheme} from 'react-native-paper';
import firestore from '@react-native-firebase/firestore';



const FauvoritesScreen = ({ navigation }) => {
  const [eventName, setEventName] = useState('');
  const [city, setCity] = useState('');
  const [location, setLocation] = useState('');
  const [date, setDate] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleAddEvent = () => {
    // Create a new event object with the input values
    const newEvent = {
      eventName,
      city,
      location,
      date,
      imageUrl,
    };
    firestore().collection("Eventy").doc("jebko").set({eventName:eventName,city:city,location:location,date:date,imageUrl:imageUrl}).then(()=>{console.log("pridano")})
 
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Event Name"
        value={eventName}
        onChangeText={text => setEventName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="City"
        value={city}
        onChangeText={text => setCity(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Location"
        value={location}
        onChangeText={text => setLocation(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Date"
        value={date}
        onChangeText={text => setDate(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Image URL"
        value={imageUrl}
        onChangeText={text => setImageUrl(text)}
      />
      <Button title="Add Event" onPress={handleAddEvent} >pridaj</Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default FauvoritesScreen