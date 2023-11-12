import auth from "@react-native-firebase/auth";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const signUp = (navigation,Email,Pass) => {
  auth().createUserWithEmailAndPassword(Email, Pass).then(() => {
    navigation.navigate("Login")
  }).catch((error) => {
    console.log(error);
  });
}
