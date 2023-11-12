import React, { useState,useEffect } from 'react';
import { Animated,Easing,View, StyleSheet,Image,FlatList ,ScrollView, TouchableOpacity} from 'react-native';
import { Button,Divider,Text,Searchbar,Chip ,useTheme,elevation} from 'react-native-paper';
import { GoogleSignin, GoogleSigninButton } from '@react-native-google-signin/google-signin';
import firestore from '@react-native-firebase/firestore';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'; // Import the icon library
import Card1 from '../components/Card1';
import Card2 from '../components/Card2';


export default function CalendarScreen() {
  const [value] = useState(new Animated.Value(0));

  const move = () => {
    Animated.timing(value, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: false,
    }).start(() => {
    
      Animated.timing(value, {
        toValue: 0,
        duration: 0,
        useNativeDriver: false,
      }).start();
    });
  };

  useEffect(() => {
    const loop = Animated.loop(
      Animated.timing(value, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: false,
      })
    );

    loop.start();

    return () => loop.stop(); 
  }, [value]);

  const interpolateRotation = value.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const animatedStyle = {
    transform: [{ rotate: interpolateRotation }],
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Animated.View style={[{ transform: [{ translateY: value }],marginBottom:100 }, animatedStyle]}>
        <View
          style={{ width: 50, height: 50, borderRadius: 25, backgroundColor: 'red' }}
        />
        <TouchableOpacity onPress={move}>
          <Text>Skus</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
}