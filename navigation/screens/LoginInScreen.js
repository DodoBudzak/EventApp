import React, { useState,useEffect } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import auth from "@react-native-firebase/auth";
import { useNavigation } from '@react-navigation/native'; 
import { Text, TextInput, Button } from "react-native-paper";
import { onGoogleButtonPress } from "../../App.js";
import { GoogleSignin, GoogleSigninButton } from '@react-native-google-signin/google-signin';

const LoginScreen = ({route,navigation}) => {
  const {Pemail,Ppassword } = route.params;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  useEffect(() => {

    setEmail(Pemail);
    setPassword(Ppassword);
  }, [Pemail, Ppassword]);

  const handleLogin = () => {
    console.log("hih")
    auth().signInWithEmailAndPassword(email,password).then((response)=>{
      console.log(response)
      navigation.navigate("HomeBase")
    }).catch((er)=>{console.log(er.nativeErrorMessage)})
    auth().currentUser.getIdToken(true).then((res)=>{console.log(re)})

  };

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Image source={require("../../logoT.png")} style={styles.image} />
      </View>
      <View style={styles.mid}>
        <Text style={{ marginBottom: 20 }} variant='headlineMedium'>Prihlásenie</Text>
        <TextInput
          label="Email"
          style={styles.inputBoxes}
          value={email}
          onChangeText={text => setEmail(text)}
        />
        <TextInput
          label="Heslo"
          style={styles.inputBoxes}
          value={password}
          onChangeText={text => setPassword(text)}
          secureTextEntry
        />
        <Button
          style={{ marginTop: 50, height: 50, justifyContent: "center" }}
          mode="contained"
          onPress={handleLogin}
        >
          Prihlásiť sa
        </Button>
      </View>
      <View style={styles.bottom}>
        <Text style={{ margin: 10 }} variant='bodySmall'>Prihlásiť cez:</Text>
        <GoogleSigninButton onPress={onGoogleButtonPress} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  top: {
    flex: 0.9
  },
  mid: {
    flex: 3,
    alignSelf: "center",
    paddingTop: 50
  },
  bottom: {
    alignItems: "center",
    flex: 1.1
  },
  image: {
    width: 100,
    height: 100,
    marginTop: 40,
    alignSelf: "center",
    justifyContent: "center"
  },
  inputBoxes: {
    margin: 10,
    borderRadius: 10,
    width: 350
  }
});

export default LoginScreen;
