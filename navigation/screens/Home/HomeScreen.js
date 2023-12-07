import React, { useState,useRef } from 'react';
import { Animated,View,Text, StyleSheet,Image,FlatList ,ScrollView} from 'react-native';
import { Button,Divider,Searchbar,Chip ,useTheme,elevation} from 'react-native-paper';
import { GoogleSignin, GoogleSigninButton } from '@react-native-google-signin/google-signin';
import firestore from '@react-native-firebase/firestore';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'; // Import the icon library

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import theme from '../fonts';

import Card1 from '../../components/Cards/Card1';
import Card2 from '../../components/Cards/Card2';
import Card3 from '../../components/Cards/Card3';
import Test from '../../Test';
import UserScreen from '../User/UserScreen';

import TabBarItem from "../../TabBarItem"

const Header_Max_Height = 200;
const Header_Min_Height = 0;
const Scroll_Distance = Header_Max_Height - Header_Min_Height;

const TabTop = createMaterialTopTabNavigator();


const TopTabGroup = ({navigation}) =>{
  return(
<TabTop.Navigator

  screenOptions={{
    
    tabBarLabelStyle: { fontSize: 12 },
    //tabBarLabel: ({ focused }) => {
      //return <Text style={{fontSize: 14, fontWeight: '600', color:"blue"}}>{focused ? "pes": "kon"}</Text>
    //},
    
    tabBarItemStyle: ({ focused }) => ({
      alignSelf: 'center',
      borderRadius: 100,
      borderColor: 'blue',
      backgroundColor: focused ? 'white' : 'transparent',
      width: focused ? 120 : 100, // Adjust the width when focused
      elevation: focused ? 10 : 0, // shadow on Android
    }),
    tabBarIndicatorStyle:{backgroundColor:"transparent"},
    tabBarPressColor:"transparent",

    tabBarStyle:{pressbackgroundColor:"rgba(0,0,0,0)",elevation:0},
    tabBar: () => null,
    
  }
  
}
  
>



            <TabTop.Screen
              name="To2p"
              component={Test}
              options={{
                tabBarLabel: ({ color,focused }) => (
                  <View style={{flexDirection:"row",borderRadius:focused ? 20 : 0,padding:12,backgroundColor:focused ? "lightblue" : "white"}}>
                 
                  <Text style={{fontSize:focused? 16: 13}}> Top   </Text>
                  </View>
                ),
              }}
             
            />

          <TabTop.Screen name="Top2" component={Test}
          options={{
            tabBarLabel: ({ color,focused }) => (
              <View style={{flexDirection:"row",borderRadius:focused ? 20 : 0,padding:12,backgroundColor:focused ? "lightblue" : "white"}}>
             
              <Text style={{fontSize:focused? 16: 13}}> Párty   </Text>
              </View>
            ),
          }}
          />
          <TabTop.Screen name="Top4" component={Test}
           options={{
            tabBarLabel: ({ color,focused }) => (
              <View style={{flexDirection:"row",borderRadius:focused ? 20 : 0,padding:12,backgroundColor:focused ? "lightblue" : "white"}}>
             
              <Text style={{fontSize:focused? 16: 13}}> Divadlo   </Text>
              </View>
            ),
          }}
           />
          <TabTop.Screen name="Top3" component={Test} 
         options={{
          tabBarLabel: ({ color,focused }) => (
            <View style={{flexDirection:"row",borderRadius:focused ? 20 : 0,padding:12,backgroundColor:focused ? "lightblue" : "white"}}>
           
            <Text style={{fontSize:focused? 16: 13}}> Gastro   </Text>
            </View>
          ),
        }}
          />

</TabTop.Navigator>
  )
}

const HomeScreen = ({ navigation }) => {
 

 
  const tyheme = useTheme();
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
            marginBottom:-10
            //backgroundColor: animatedHeaderColor,
            
          },
        ]}>
                  
              <View style={styles.topTextContainer}> 

                <View style={styles.topText}>
                  <Text style={{ marginBottom:-8,fontSize:theme.size.m}} >Udalosti v </Text>
                  <Text style={{ fontSize:45, color:theme.colors.primary}} >Košice</Text>
                </View>

                
                <View style={styles.topText2}>

                <MaterialCommunityIcons name='subdirectory-arrow-left' color="black" size={20} />
                  <Text style={{ marginBottom:-8,fontSize:theme.size.m}} >Košice </Text>
                 
                </View>

                </View>
                <View style={styles.upperText}>

                
                        <Searchbar
                      placeholder="Search"
                      onChangeText={onChangeSearch}
                      value={searchQuery}
                      style={{width:"100%"}}
                      />
                    
                    
                </View>

        </Animated.View>


    );
  };


  


  ///styling
  const styles = StyleSheet.create({
    TopBar:{
    height:2000,
    marginVertical:10
    },
   
    top: {
   
   backgroundColor: "white"
    },
    topTextContainer:{
      flexDirection:"row",
      justifyContent:"space-between"
    },
    topText:{
      fontFamily:theme.fonts.primary,
      margin:20
     
    },
    topText2:{
    flexDirection:"row",
    marginTop:25
     
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
      flex:1,
      marginLeft:20,
      marginTop:0,
      fontFamily:theme.fonts.primary,
      fontSize:theme.size.xl,
      color:"black",
    },
    nearby:{
      
      
    
    },
    akcie:{
      backgroundColor:theme.colors.tertiaryContainer,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 12,
      },
      shadowOpacity: 0.58,
      shadowRadius: 16.00,
      
      elevation: 10,
     
     
    },
    akcieNadpis:{
      color:theme.colors.onTertiaryContainer,
      fontWeight:"bold",
      margin:10,
      fontSize:theme.size.xxl
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
        <View style={styles.rendered}>
         
      <ScrollView
      
          scrollEventThrottle={5}
       
          showsVerticalScrollIndicator={false}
          onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollOffsetY}}}],
          {
              useNativeDriver: false,
          },
          )}>
             

     
      <View style={styles.TopBar}>
 <TopTabGroup  />
      </View>
   
      
      
      </ScrollView>
    </View>
    </View>
  );
};


  

export default HomeScreen;