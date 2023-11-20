import React, { useState } from 'react';
import { View, StyleSheet,Image,FlatList ,ScrollView} from 'react-native';
import { Button,Divider,Text,Searchbar,Chip ,useTheme,elevation} from 'react-native-paper';
import { GoogleSignin, GoogleSigninButton } from '@react-native-google-signin/google-signin';
import firestore from '@react-native-firebase/firestore';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'; // Import the icon library


const HomeScreen = ({ navigation }) => {
  const eventData = [
    {
      id:1,
      date: 'Pondelok, 30. októbra o 16:00',
      eventTitle: 'Salašnícky Jarmok',
      location: 'Námestie',
      city: 'Mesto Spišská Belá',
      imageSource: require('../../disko.png'),
    },
    {
      id:2,
      date: 'Utorok, 31. októbra o 17:30',
      eventTitle: 'Hudobný Festival',
      location: 'Hlavné námestie',
      city: 'Bratislava',
      imageSource: require('../../disko.png'),
    },
    {
      id:3,
      date: 'Streda, 1. novembra o 14:00',
      eventTitle: 'Krčma na rohu',
      location: 'Historická ulica',
      city: 'Košice',
      imageSource: require('../../disko.png'),
    },
    {
      id:4,
      date: 'Štvrtok, 2. novembra o 19:45',
      eventTitle: 'Divadelná premiéra',
      location: 'Mestské divadlo',
      city: 'Žilina',
      imageSource: require('../../disko.png'),
    },
    {
      id:5,
      date: 'Piatok, 3. novembra o 20:15',
      eventTitle: 'Rockový koncert',
      location: 'Mestská hala',
      city: 'Prešov',
      imageSource: require('../../disko.png'),
    },
    {
      id:6,
      date: 'Sobota, 4. novembra o 10:30',
      eventTitle: 'Ranný trh',
      location: 'Trhovisko',
      city: 'Trnava',
      imageSource: require('../../disko.png'),
    },
    {
      id:7,
      date: 'Nedeľa, 5. novembra o 15:00',
      eventTitle: 'Umelci na námestí',
      location: 'Hlavné námestie',
      city: 'Banská Bystrica',
      imageSource: require('../../disko.png'),
    },
    {
      id:8,
      date: 'Pondelok, 6. novembra o 16:00',
      eventTitle: 'Salašnícky Jarmok',
      location: 'Námestie',
      city: 'Mesto Spišská Belá',
      imageSource: require('../../disko.png'),
    },
    {
      id:9,
      date: 'Utorok, 7. novembra o 17:30',
      eventTitle: 'Hudobný Festival',
      location: 'Hlavné námestie',
      city: 'Bratislava',
      imageSource: require('../../disko.png'),
    },
    {
      id:10,
      date: 'Streda, 8. novembra o 14:00',
      eventTitle: 'Krčma na rohu',
      location: 'Historická ulica',
      city: 'Košice',
      imageSource: require('../../disko.png'),
    },
  ];
 
  const theme = useTheme();
  const [eventy,setEventy] = useState([])
  const getData = async() =>{
    const mestaCollection =  await firestore().collection("Eventy").get()
    mestaCollection.forEach(item=>{setEventy([...eventy,item.data()])})
    console.log(eventy)
    //console.log(mestaCollection.data())
  }

  
  const signOut = async () => {
    try {
      await GoogleSignin.signOut();
      console.log("odlhaseno")
    } catch (error) {
      console.error(error);
    }
  };
  const Card = ({ item }) => {
    const { date, eventTitle, location, city, imageSource } = item || data;
  
    return (
      <View style={styles.Card}>
           <View style={styles.CardImage}>
          <Image source={imageSource} style={styles.image} />
        </View>
        <View style={styles.CardText}>
          <Text variant='titleLarge'>{date}</Text>
          <Text style={{ marginTop: 2 }} variant='titleMedium'>
            {eventTitle}
          </Text>
          
          <Text style={{ marginTop: 5 }} variant='labelMedium'>
            {location}
          </Text>
          <Text style={{ marginTop: 10 }} variant='titleSmall'>
            {city}
          </Text>
        </View>
      </View>
    );
  };
  const Card2 = () => {
    const cardstyles = StyleSheet.create({
      container: {
        height:500,
        width:340,
        margin:10,
        marginRight:50,
        
      },

      imageBox: {
        flex:2,    
      },
      text: {
        flex:1, 
       
      },
      image: {
        height: '100%',
        aspectRatio: 1,
        borderTopLeftRadius: 20, // Top left corner
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 5, // Bottom left corner
        borderBottomRightRadius: 5, // Bottom right corner
      
      },
    });
  
    return (
      <View style={cardstyles.container}>
        
          <View style={cardstyles.imageBox}>
            <Image source={require('../../disko.png')} style={cardstyles.image} />
          </View>
  
          <View style={cardstyles.text}>
            <Text variant='titleLarge' style={{margin:1}}></Text>
            <Text variant='titleMedium' style={{marginTop:5}}>28.augusta,  23:00-4:00</Text>
            <Text variant='titleSmall' style={{margin:2}}>Ponorka Prešov</Text>
          
          
        </View>
      </View>
    );
  };
 

 

  const styles = StyleSheet.create({
    container:{
      flex:1
    },
    c1:{
      flex:1,
      marginTop:50,
      backgroundColor:theme.colors.primaryContainer,
    },
     c2:{
      flex:1.2,
      flexDirection:"row",
      
    },
    c3:{
      flex:1,
   
    },
    Card:{
      flexDirection:"row",
      marginLeft:50,
      width:400
      },
  
  
    CardText:{
   marginLeft:10,
  flex:1
     
      },
      CardImage:{
     height:200,
     
      },
     
      image:{
     height:150,
     width:150,
     margin:5,
     marginRight:1,
     borderRadius:20
      }
   
  })
  return (
    <View style={styles.container}>
      <ScrollView>
      <View style={styles.c1}>
         <Text variant='headlineMedium'>Práve sa deje</Text> 
         

         <Button onPress={getData}>Skus</Button>

            <FlatList
          data={eventData}
          renderItem={({item}) => <Card item={item} />}
          keyExtractor={(item) => item.id.toString()}
          horizontal={true}
          />
         
      </View>
      <Divider style={{margin:10}}/>
      <View style={styles.c2}>
      <FlatList
          data={eventData}
          renderItem={({item}) => <Card2 />}
          keyExtractor={(item) => item.id.toString()}
          horizontal={true}
        />
      </View>
      
    

      <View style={styles.c3}>
        <Text>Práve sa deje</Text>
      </View>
      
      </ScrollView>

    </View>
  );
};


export default HomeScreen;