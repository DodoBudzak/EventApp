import React, { useRef } from 'react';
import { View, StyleSheet,Image, FlatList, ScrollView ,Animated} from 'react-native';
import { Divider, Text ,} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


export default function UserScreen() {
  const testFile = [
    {
      icon: 'email',
      label: 'Email',
      value: 'dodo@gmail.com',
    },
    {
      icon: 'phone',
      label: 'Phone',
      value: '123-456-7890',
    },
    {
      icon: 'account',
      label: 'Username',
      value: 'dodo123',
    },
    {
      icon: 'email',
      label: 'Email',
      value: 'dodo@gmail.com',
    },
    {
      icon: 'phone',
      label: 'Phone',
      value: '123-456-7890',
    },
    {
      icon: 'account',
      label: 'Username',
      value: 'dodo123',
    }, {
      icon: 'email',
      label: 'Email',
      value: 'dodo@gmail.com',
    },
    {
      icon: 'phone',
      label: 'Phone',
      value: '123-456-7890',
    },
    {
      icon: 'account',
      label: 'Username',
      value: 'dodo123',
    },
    {
      icon: 'email',
      label: 'Email',
      value: 'dodo@gmail.com',
    },
    {
      icon: 'phone',
      label: 'Phone',
      value: '123-456-7890',
    },
    {
      icon: 'account',
      label: 'Username',
      value: 'dodo123',
    },
  ];

  const DetailInfo = ({ icon, label, value }) => {
    const infoStyles = StyleSheet.create({
      detailInfoContainer: {
        marginBottom: 20,
        marginTop: 10,
      },
      content: {
        flexDirection: 'row',
        margin: 10,
        marginLeft: 20,
      },
      text: {
        marginLeft: 15,
      },
    });

    return (
      <View style={infoStyles.detailInfoContainer}>
        <View style={infoStyles.content}>
          <View>
            <MaterialCommunityIcons name={icon} size={26} />
          </View>

          <View style={infoStyles.text}>
            <Text variant="labelLarge">{label}</Text>
            <Text style={{ marginTop: 5 }} variant="bodySmall">
              {value}
            </Text>
          </View>
        </View>
      </View>
    );
  };

  const Header_Max_Height = 240;
  const Header_Min_Height = 180;
  const Scroll_Distance = Header_Max_Height - Header_Min_Height;

  
  const scrollOffsetY = useRef(new Animated.Value(0)).current;

  return (
    <View style={styles.container}>
    
      <Animated.View
        style={[
          styles.dynamicHeader,
          {
            height: scrollOffsetY.interpolate({
              inputRange: [0, Scroll_Distance],
              outputRange: [Header_Max_Height, Header_Min_Height],
              extrapolate: 'clamp',
            }),
            backgroundColor: scrollOffsetY.interpolate({
              inputRange: [0, Scroll_Distance],
              outputRange: ['#181D31', '#678983'],
              extrapolate: 'clamp',
            }),
          },
        ]}
      >
     <View style={styles.c1}>
          <View style={styles.TopC1}>
            <MaterialCommunityIcons name="arrow-left" color="white" size={26}/>
            <Text></Text>
            <MaterialCommunityIcons name="account-settings" color="white" size={26}/>
            
          </View>

          <View style={styles.TopC2}>
            <Image source={require('../../glogo.png')} style={styles.image} />
            <Text variant='headlineMedium' style={{ alignSelf: 'center',color:"white" }}>Josko Budsak</Text>
          </View>

          <View style={styles.TopC1}></View>
        </View>
      </Animated.View>

      <ScrollView
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollOffsetY } } }],
          {
            useNativeDriver: false,
          }
        )}
        scrollEventThrottle={16}
      >
        

        <View style={styles.c2}>
        {testFile.map((item, index) => (
  <DetailInfo key={index} icon={item.icon} label={item.label} value={item.value} />
))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  c1: {
    backgroundColor: '#305ce3',
    flex: 1.2,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  c2: {
    flex: 2,
  },
  TopC1: {
    marginTop:20,
    marginHorizontal:10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  TopC2: {
    alignSelf: 'center',
    overflow:"hidden"
  },
  dynamicHeader: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1, // Place the header above the content
  },
  image:{
    overflow:"hidden",
    
    alignSelf:"center",
    width:90,
    height:90
    
  }
});