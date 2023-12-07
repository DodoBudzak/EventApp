import React, { useState,useContext } from 'react';
import { View, StyleSheet,Image,FlatList ,ScrollView} from 'react-native';
import { Button,Divider,Text,Searchbar,Chip ,Card,Avatar} from 'react-native-paper';
import { GoogleSignin, GoogleSigninButton } from '@react-native-google-signin/google-signin';
import Card1 from '../../components/Cards/Card3';

import { Context } from '../../../App';

const SearchScreen = ({ navigation }) => {
  const eventData = [
    {
      id: 1,
      date: 'Pondelok, 30. októbra o 16:00',
      eventTitle: 'Salašnícky Jarmok',
      location: 'Námestie',
      city: 'Mesto Spišská Belá',
      imageSource: require('../../../images/e1.png'),
    },
    {
      id: 2,
      date: 'Utorok, 31. októbra o 17:30',
      eventTitle: 'Hudobný Festival',
      location: 'Hlavné námestie',
      city: 'Bratislava',
      imageSource: require('../../../images/e2.png'),
    },
    {
      id: 3,
      date: 'Streda, 1. novembra o 14:00',
      eventTitle: 'Krčma na rohu',
      location: 'Historická ulica',
      city: 'Košice',
      imageSource: require('../../../images/e3.png'),
    },
    {
      id: 4,
      date: 'Štvrtok, 2. novembra o 19:45',
      eventTitle: 'Divadelná premiéra',
      location: 'Mestské divadlo',
      city: 'Žilina',
      imageSource: require('../../../images/e4.png'),
    },
    {
      id: 5,
      date: 'Piatok, 3. novembra o 20:15',
      eventTitle: 'Rockový koncert',
      location: 'Mestská hala',
      city: 'Prešov',
      imageSource: require('../../../images/e5.png'),
    },
    {
      id: 6,
      date: 'Sobota, 4. novembra o 10:30',
      eventTitle: 'Ranný trh',
      location: 'Trhovisko',
      city: 'Trnava',
      imageSource: require('../../../images/e6.png'),
    },
    {
      id: 7,
      date: 'Nedeľa, 5. novembra o 15:00',
      eventTitle: 'Umelci na námestí',
      location: 'Hlavné námestie',
      city: 'Banská Bystrica',
      imageSource: require('../../../images/e7.png'),
    },
    {
      id: 8,
      date: 'Pondelok, 6. novembra o 16:00',
      eventTitle: 'Salašnícky Jarmok',
      location: 'Námestie',
      city: 'Mesto Spišská Belá',
      imageSource: require('../../../images/e1.png'),
    },
    {
      id: 9,
      date: 'Utorok, 7. novembra o 17:30',
      eventTitle: 'Hudobný Festival',
      location: 'Hlavné námestie',
      city: 'Bratislava',
      imageSource: require('../../../images/e1.png'),
    },
    {
      id: 10,
      date: 'Streda, 8. novembra o 14:00',
      eventTitle: 'Krčma na rohu',
      location: 'Historická ulica',
      city: 'Košice',
      imageSource: require('../../../images/e1.png'),
    },
  ];

  const [currentUser,setUser] = useState()
  const [searchQuery, setSearchQuery] = useState('');


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
       <Image source={require("../../../disko.png")} style={styles.image} />
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
  


  const ChipList = () => {
    return(
      <View style={styles.chipList}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
       <Chip  icon="home" style={{margin:10}}  onPress={() => navigation.navigate('FilterModal')}><Text variant='titleMedium'>Example Chip</Text></Chip>
       <Chip icon="home" style={{margin:10}}  onPress={() => navigation.navigate('FilterModal')}>Example Chip</Chip>
       
       <Chip icon="home" style={{margin:10}}  onPress={() => navigation.navigate('FilterModal')}>Example Chip</Chip>
       </ScrollView>
            
            
    

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
       
          <ChipList />

  

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
   paddingTop:20
  
 },

chipList:{
flexDirection:"row",
marginBottom:20,
marginTop:10,

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