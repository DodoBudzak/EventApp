import { Animated,View,Text, StyleSheet,Image,FlatList ,ScrollView, TouchableOpacity} from 'react-native';
import theme from './screens/fonts';
import React from 'react'


import Card1 from './components/Cards/Card1';
import Card2 from './components/Cards/Card2';
import Card3 from './components/Cards/Card3';
const eventData = [
  {
    id: 1,
    date: 'Pondelok, 30. októbra o 16:00',
    eventTitle: 'Salašnícky Jarmok',
    location: 'Námestie',
    city: 'Mesto Spišská Belá',
    imageSource: require('../images/e1.png'),
  },
  {
    id: 2,
    date: 'Utorok, 31. októbra o 17:30',
    eventTitle: 'Hudobný Festival',
    location: 'Hlavné námestie',
    city: 'Bratislava',
    imageSource: require('../images/e2.png'),
  },
  {
    id: 3,
    date: 'Streda, 1. novembra o 14:00',
    eventTitle: 'Krčma na rohu',
    location: 'Historická ulica',
    city: 'Košice',
    imageSource: require('../images/e3.png'),
  },
  {
    id: 4,
    date: 'Štvrtok, 2. novembra o 19:45',
    eventTitle: 'Divadelná premiéra',
    location: 'Mestské divadlo',
    city: 'Žilina',
    imageSource: require('../images/e4.png'),
  },
  {
    id: 5,
    date: 'Piatok, 3. novembra o 20:15',
    eventTitle: 'Rockový koncert',
    location: 'Mestská hala',
    city: 'Prešov',
    imageSource: require('../images/e5.png'),
  },
  {
    id: 6,
    date: 'Sobota, 4. novembra o 10:30',
    eventTitle: 'Ranný trh',
    location: 'Trhovisko',
    city: 'Trnava',
    imageSource: require('../images/e6.png'),
  },

];
const Test = ({navigation}) => {
  const styles = StyleSheet.create({
   
    top: {
   
      backgroundColor: theme.colors.secondaryContainer,
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
      marginBottom:20,
      
      color:theme.colors.onTertiaryContainer,
      fontWeight:"bold",
      margin:10,
      fontSize:theme.size.xl
    
    },
    nearby:{
      
      
    
    },
    akcie:{
      
      backgroundColor:"white",
     
     
     
    },
    akcieNadpis:{
     
      color:theme.colors.onTertiaryContainer,
      fontWeight:"bold",
      margin:10,
      fontSize:theme.size.xxl
    },
    bottomScroll:{
      marginTop:-15,
  flexDirection:"row",
  height:300
    },
    eventL1: {
      height: 200,
      backgroundColor: 'orange',
    },
  });

  
  return (
    <View>

      

       
        <View style={styles.akcie}>
          
          <Text  style={styles.akcieNadpis}> Top akcie mesiaca</Text>

          <ScrollView  showsHorizontalScrollIndicator={false} horizontal={true}>

            <View style={styles.bottomScroll}>
            <TouchableOpacity onPress={() => navigation.navigate("CardStack",{screen: "Homes"})}>
            {eventData.map((eventItem) => (
             
                <Card3 navigation={navigation}  eventData={eventItem} />
                  ))}
                  </TouchableOpacity>
            </View>

          </ScrollView>

    </View> 

    <View style={styles.akcie}>
            <Text style={styles.topicHeader} variant='headlineSmall'> Akcie v : Košice</Text>

        <ScrollView  showsHorizontalScrollIndicator={false} horizontal={true}>
          
          <View style={styles.bottomScroll}>
          {eventData.map((eventItem) => (
              <Card3  eventData={eventItem} />
                ))}
          </View>

        </ScrollView>
        </View>

        <View style={styles.akcie}>
          <Text style={styles.topicHeader}  variant='headlineSmall'>Horúca ponuka</Text>

          
            <View style={styles.nearby}>
                    {eventData.map((eventItem) => (
                  <Card2  eventData={eventItem} />
                    ))}
            </View>

        </View>
         
      </View>     

  )
}

export default Test