import React, { useState } from 'react';
import { View, StyleSheet,Image,FlatList ,ScrollView} from 'react-native';
import { Button,Divider,Text,Searchbar,Chip ,Card,Avatar} from 'react-native-paper';
import { GoogleSignin, GoogleSigninButton } from '@react-native-google-signin/google-signin';
import Card1 from '../components/Card3';


const SearchScreen = ({ navigation }) => {
  const eventData = [
    {
      id:1,
      date: 'Pondelok, 30. októbra o 16:00',
      eventTitle: 'Salašnícky Jarmok',
      location: 'Námestie',
      city: 'Mesto Spišská Belá',
      imageSource: require('../../images/e1.png'),
    },
    {
      id:2,
      date: 'Utorok, 31. októbra o 17:30',
      eventTitle: 'Hudobný Festival',
      location: 'Hlavné námestie',
      city: 'Bratislava',
      imageSource: require('../../images/e2.png'),
    },
    {
      id:3,
      date: 'Streda, 1. novembra o 14:00',
      eventTitle: 'Krčma na rohu',
      location: 'Historická ulica',
      city: 'Košice',
      imageSource: require('../../images/e3.png'),
    },
    {
      id:4,
      date: 'Štvrtok, 2. novembra o 19:45',
      eventTitle: 'Divadelná premiéra',
      location: 'Mestské divadlo',
      city: 'Žilina',
      imageSource: require('../../images/e4.png'),
    },
    {
      id:5,
      date: 'Piatok, 3. novembra o 20:15',
      eventTitle: 'Rockový koncert',
      location: 'Mestská hala',
      city: 'Prešov',
      imageSource: require('../../images/e5.png'),
    },
    {
      id:6,
      date: 'Sobota, 4. novembra o 10:30',
      eventTitle: 'Ranný trh',
      location: 'Trhovisko',
      city: 'Trnava',
      imageSource: require('../../images/e6.png'),
    },
    {
      id:7,
      date: 'Nedeľa, 5. novembra o 15:00',
      eventTitle: 'Umelci na námestí',
      location: 'Hlavné námestie',
      city: 'Banská Bystrica', 
      imageSource: require('../../images/e7.png'),
    },
    {
      id:8,
      date: 'Pondelok, 6. novembra o 16:00',
      eventTitle: 'Salašnícky Jarmok',
      location: 'Námestie',
      city: 'Mesto Spišská Belá',
      imageSource: require('../../images/e1.png'),
    },
    {
      id:9,
      date: 'Utorok, 7. novembra o 17:30',
      eventTitle: 'Hudobný Festival',
      location: 'Hlavné námestie',
      city: 'Bratislava',
      imageSource: require('../../images/e1.png'),
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

  const [currentUser,setUser] = useState()
  const [searchQuery, setSearchQuery] = useState('');
  const [chipsSelected, setChipsSelected] = useState({
    chip1: false,
    chip2: false,
    chip3: false,
    chip4: false,
    chip5: false,
    chip6: true, // You can set the initial selected state here
  });

  const handleChipPress = (chipName) => {
    setChipsSelected((prevState) => ({
      ...prevState,
      [chipName]: !prevState[chipName],
    }));
  };
  const onChangeSearch = query => setSearchQuery(query);

  getCurrentUser = async () => {
    try{
    const currentUser = await GoogleSignin.getCurrentUser();
    setUser(currentUser.user.name)
  }catch(error){
    setUser("")
  }
  };
  const signOut = async () => {
    try {
      await GoogleSignin.signOut();
      console.log("odlhaseno")
    } catch (error) {
      console.error(error);
    }
  };

  const SearchC = ()=>{
    return(
    <View style={styles.SearchC}>
      
      <Searchbar
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
    />
    </View>
    )
  }
  const Item = ({ id, title }) => (
    <View style={styles.item}>
       <Image source={require("../../disko.png")} style={styles.image} />
    <View style={styles.itemDetails}>
      <Text style={styles.id}>{id}</Text>
      <Text style={styles.title}>{title}</Text>
    </View>
  </View>
  );

  const Card = ({eventData}) =>{
    return(
      <View style={styles.Card}>
      <View style={styles.CardImage}>
        <Image source={eventData.imageSource} style={styles.image} />
      </View>
      <View style={styles.CardText}>
        <Text variant='titleLarge'>{eventData.date}</Text>
        <Text style={{ marginTop: 2 }} variant='headlineMedium'>
          {eventData.eventTitle}
        </Text>
        <Divider />
        <Text style={{ marginTop: 5 }} variant='titleMedium'>
          {eventData.location}
        </Text>
        <Text style={{ marginTop: 10 }} variant='titleSmall'>
          {eventData.city}
        </Text>
      </View>
    </View>

    )
  }

  const ChipList = () => {
    return(
      <View style={styles.chipList}>
      <Chip
        selected={true}
        style={styles.chipItem}
        icon="information"
        
        onPress={() => handleChipPress('chip1')}
      >
        Kokot
      </Chip>
      <Chip
        selected={chipsSelected.chip2}
        style={styles.chipItem}
        icon="information"
        onPress={() => handleChipPress('chip2')}
      >
        Example Chip
      </Chip>
      <Chip
        selected={chipsSelected.chip3}
        style={styles.chipItem}
        icon="information"
        onPress={() => handleChipPress('chip3')}
      >
        Example Chip
      </Chip>
      <Chip
        selected={chipsSelected.chip4}
        style={styles.chipItem}
        icon="information"
        onPress={() => handleChipPress('chip4')}
      >
        Example Chip
      </Chip>
      <Chip
        selected={chipsSelected.chip5}
        style={styles.chipItem}
        icon="information"
        onPress={() => handleChipPress('chip5')}
      >
        Example Chip
      </Chip>
      <Chip
        selected={chipsSelected.chip6}
        style={styles.chipItem}
        icon="information"
        onPress={() => handleChipPress('chip6')}
      >
        Example Chip
      </Chip>
    </View>
    )
  }
  return (
    <View style={styles.container}>

      <View style={styles.c1}>
            <Searchbar
            placeholder="Search"
            onChangeText={onChangeSearch}
            value={searchQuery}
            style={{margin:10}}
          />
        <ScrollView horizontal={true}>
          <ChipList />
          </ScrollView>
  

      </View>

<ScrollView>
      <View style={styles.c2}>

      {eventData.map((eventItem) => (
            <Card  eventData={eventItem} />
                    ))}
      </View>
    
</ScrollView>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  
 },
 c1:{
 
  
  
 },

chipList:{
flexDirection:"row",
marginBottom:20,
marginTop:10,

},
chipItem:{
margin:3
},

c2:{
  
  flex:2
 },

 Card:{
 flexDirection:"row",
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
});

export default SearchScreen;