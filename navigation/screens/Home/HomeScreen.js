import React, { useState,useRef } from 'react';
import { Animated,View,Text, StyleSheet,Image,FlatList ,ScrollView} from 'react-native';
import { Button,Divider,Searchbar,Chip ,useTheme,elevation} from 'react-native-paper';
import { GoogleSignin, GoogleSigninButton } from '@react-native-google-signin/google-signin';
import firestore from '@react-native-firebase/firestore';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'; // Import the icon library


import Card1 from '../../components/Cards/Card1';
import Card2 from '../../components/Cards/Card2';
import Card3 from '../../components/Cards/Card3';

const Header_Max_Height = 90;
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
          styles.top,
          {
            height: animatedHeaderHeight,
            //backgroundColor: animatedHeaderColor,
            
          },
        ]}>


                <View style={styles.upperText}>

                <MaterialCommunityIcons name='home' style={styles.topIcon} size={26} />

                        <Searchbar
                      placeholder="Search"
                      onChangeText={onChangeSearch}
                      value={searchQuery}
                      style={{width:"90%"}}
                      />
                    
                    
                </View>

        </Animated.View>


    );
  };



  ///styling
  const styles = StyleSheet.create({
    container: {
      
      backgroundColor: 'white',
    },
   
    top: {
   
      backgroundColor: theme.colors.primary,
    },
    upperText:{
        flexDirection:"row",
     
        margin:10,
        marginTop:20
    },
    topIcon:{
      margin:10,

     },
    hot: {
     flex:1
    
    },
   
   
    rendered:{
      marginTop:10,
      marginBottom:-10,
        backgroundColor:"white"
    },
    topicHeader:{
      marginLeft:20,
      marginTop:0,
      fontFamily:"Roboto",
      fontWeight:"bold",
      color:"black",
      fontSize:25

    },
    nearby:{
      
    },
    bottomScroll:{
flexDirection:"row"
    },
    eventL1: {
      height: 200,
      backgroundColor: 'orange',
    },
  });

  /////final return
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

        <View style={styles.hot}>

        <Card1 eventData={eventData[1]} navigation={navigation}   />

        </View>


            <Text style={styles.topicHeader}  variant='headlineSmall'>Horúca ponuka</Text>

        
              <View style={styles.nearby}>
                      {eventData.map((eventItem) => (
                    <Card2  eventData={eventItem} />
                      ))}
              </View>
           
              <Text style={styles.topicHeader} variant='headlineSmall'> Party v okolí</Text>

            <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>

              <View style={styles.nearby}>
                    {eventData.map((eventItem) => (
                  <Card2  eventData={eventItem} />
                    ))}
              </View>

            </ScrollView>
            
             <Text style={{margin:10}} variant='headlineSmall'> Top akcie mesiaca</Text>

            <ScrollView  showsHorizontalScrollIndicator={false} horizontal={true}>

              <View style={styles.bottomScroll}>
              {eventData.map((eventItem) => (
                  <Card3  eventData={eventItem} />
                    ))}
              </View>

            </ScrollView>


             <Text style={styles.topicHeader} variant='headlineSmall'> Akcie v : Košice</Text>

            <ScrollView  showsHorizontalScrollIndicator={false} horizontal={true}>
              <View style={styles.bottomScroll}>
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


  

export default HomeScreen;