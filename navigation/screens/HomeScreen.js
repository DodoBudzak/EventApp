import React, { useState,useRef } from 'react';
import { Animated,View, StyleSheet,Image,FlatList ,ScrollView} from 'react-native';
import { Button,Divider,Text,Searchbar,Chip ,useTheme,elevation} from 'react-native-paper';
import { GoogleSignin, GoogleSigninButton } from '@react-native-google-signin/google-signin';
import firestore from '@react-native-firebase/firestore';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'; // Import the icon library

import Card1 from '../components/Card1';
import Card2 from '../components/Card2';
import Card3 from '../components/Card3';

const Header_Max_Height = 400;
const Header_Min_Height = 0;
const Scroll_Distance = Header_Max_Height - Header_Min_Height;

const HomeScreen = ({ navigation }) => {
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
 
  const theme = useTheme();
  const [eventy,setEventy] = useState([])
  const [searchQuery, setSearchQuery] = useState('');
  const onChangeSearch = query => setSearchQuery(query);
  const scrollOffsetY = useRef(new Animated.Value(0)).current;

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

  const renderItem = ({ item }) => {
    return <Card2  />;
  };

 
  
  

  
  
  const DynamicHeader = ({value}) => {
    const animatedHeaderHeight = value.interpolate({
      inputRange: [0, Scroll_Distance],
      outputRange: [Header_Max_Height, Header_Min_Height],
      extrapolate: 'clamp',
    });
    
  
    const animatedHeaderColor = value.interpolate({
      inputRange: [0, Scroll_Distance],
      outputRange: ['#181D31', '#678983'],
      extrapolate: 'clamp',
    });
  
    return (
        
      <Animated.View
        style={[
          styles.header,
          {
            height: animatedHeaderHeight,
            //backgroundColor: animatedHeaderColor,
            
          },
        ]}>

        <Animated.View
        style={[
            styles.top,{
                
            }
        ]}
        >

                <View style={styles.upperText}>
                    <Text variant='headlineSmall' style={{color:"white"}}>Search</Text>
                    <View style={{flexDirection:"row",color:"white"}}>
                        
                        <MaterialCommunityIcons name='calendar' color="white"  size={26} />
                        <Text  style={{color:"white"}} variant='titleSmall'>Search</Text>

                    </View>

                </View>

                    <Searchbar
                    placeholder="Search"
                    onChangeText={onChangeSearch}
                    value={searchQuery}
                    style={{margin:10}}
                    />

        </Animated.View>

        <View style={styles.hot}>

        <Card1 eventData={eventData[1]} navigation={navigation}   />
         </View>

             
          
      </Animated.View>
      
    );
  };
 

  
 
  return (
    <View style={styles.container}>

        <DynamicHeader style={styles.dynamicHeader} value={scrollOffsetY} />
        <ScrollView
        
            scrollEventThrottle={5}
            showsVerticalScrollIndicator={false}
            onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {y: scrollOffsetY}}}],
            {
                useNativeDriver: false,
            },
            )}>

        <View style={styles.rendered}>
            <Text style={{margin:10}} variant='headlineSmall'>Horúca ponuka</Text>

        
              <View style={styles.nearby}>
                      {eventData.map((eventItem) => (
                    <Card2  eventData={eventItem} />
                      ))}
              </View>
           
              <Text style={{margin:10}} variant='headlineSmall'> Party v okolí</Text>

            <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>

              <View style={styles.nearby}>
                    {eventData.map((eventItem) => (
                  <Card2  eventData={eventItem} />
                    ))}
              </View>
            </ScrollView>
            
             <Text style={{margin:10}} variant='headlineSmall'> Top akcie mesiaca</Text>

            <ScrollView  showsHorizontalScrollIndicator={false} horizontal={true}>

              <View style={styles.nearby}>
              {eventData.map((eventItem) => (
                  <Card3  eventData={eventItem} />
                    ))}
              </View>

            </ScrollView>


             <Text style={{margin:10}} variant='headlineSmall'> Akcie v : Košice</Text>

            <ScrollView  showsHorizontalScrollIndicator={false} horizontal={true}>
              <View style={styles.nearby}>
              {eventData.map((eventItem) => (
                  <Card3  eventData={eventItem} />
                    ))}
              </View>
            </ScrollView>
            

        </View>
        
        </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      
      backgroundColor: 'white',
    },
    dynamicHeader:{
        backgroundColor:"red"
    },
    top: {
      
        flex:1,
      
      backgroundColor: 'blue',
      borderBottomRightRadius:50,
      borderBottomLeftRadius:50,
      flexDirection:"column",
     marginBottom:-50,
      
      
    },
    upperText:{
        flexDirection:"row",
        justifyContent:"space-between",
        margin:10,
        marginTop:20
    },
    hot: {
     flex:1
    
    },
    header:{
        
    },
    rendered:{
        backgroundColor:"white"
    },
    nearby:{
      flexDirection:"row"
    },
    eventL1: {
      height: 200,
      backgroundColor: 'orange',
    },
  });
  

export default HomeScreen;