import React, { useState } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import auth from "@react-native-firebase/auth";
import { useNavigation } from '@react-navigation/native'; 
import { Text,TextInput ,Button,useTheme} from "react-native-paper"
import {test,onGoogleButtonPress} from "../../App.js"
import { GoogleSignin, GoogleSigninButton } from '@react-native-google-signin/google-signin';



const SignInScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const theme = useTheme();
  

  const handleSignIn = () => {
 
    if (password === confirmPassword) {
     
      auth().createUserWithEmailAndPassword(email, password).then(() => {
        navigation.navigate("Login",{Pemail:email,Ppassword:password})
      }).catch((error) => {
        console.log(error);
      });;
    } else {
      
      setPasswordsMatch(false);
    }
  };
  const handlen = () =>{
    navigation.navigate("HomeBase")
  }
  const handleLogin = () =>{
    navigation.navigate("Login",{Pemail:email,Ppassword:password})
  }
  const handleGoogleSignIn = () =>{
    onGoogleButtonPress()
    navigation.navigate("HomeBase")
  }

  const signOut = async () => {
    try {
      await GoogleSignin.signOut();
      console.log("odlhaseno")
    } catch (error) {
      console.error(error);
    }
  };

  const handleSignOut = () =>{
    signOut()
  }
  return (
    <View style={styles.container}>
        <View style={styles.top}>
        <Image source={require("../../logoT.png")} style={styles.image}/>
     
        </View>
        <View style={styles.mid}>
            <Text style={{marginBottom:20}} variant='headlineMedium'>Vytvor si konkto</Text>
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
        />
        <TextInput
          label="Znovu heslo"
          style={styles.inputBoxes}
          value={confirmPassword}
          onChangeText={text => setConfirmPassword(text)}
        />
            
  <Button
    style={{ marginTop: 50, height: 50, justifyContent: "center" }}
    mode="contained"
    onPress={handleSignIn}
    disabled={password === '' || password !== confirmPassword}
  >
    Registrovať Sa
  </Button>

            <Button style={{marginTop:5,height:50,justifyContent:"center"}}  onPress={handlen}>Prihlásiť sa</Button>

        </View>
        

        <View style={styles.bottom}>

          <Text style={{margin:10}} variant='bodySmall'>Prihlásiť cez:</Text>
          <GoogleSigninButton onPress={handleGoogleSignIn}/>
     
        </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1
  },

  top:{
    
    flex:0.9
  },
  
  mid:{
   
    flex:3,
    alignSelf:"center",
    paddingTop:50
   
  },
  bottom:{
   alignItems:"center",
    flex:1.1
  },
  image:{
    width:100,
    height:100,
    marginTop:40,
    alignSelf:"center",
    justifyContent:"center"
  },
  inputBoxes:{
    margin:10,
    borderRadius:10,
    width:350
  }
  
});

export default SignInScreen;
