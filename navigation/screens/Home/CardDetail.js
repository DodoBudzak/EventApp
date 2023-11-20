import React from 'react';
import { Animated,View, StyleSheet,Image,FlatList ,ScrollView} from 'react-native';
import { Text,Divider, Button } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
export default function CardDetail({ route }) {
    const { eventItem } = route.params;
  return (
    <View>
        <ScrollView >
        <View style={styles.container}>
        
            
                <Image source={eventItem.imageSource} style={styles.image} />
               
          
   <View style={styles.mid}>
            <View style={styles.cena}>
              <Text >Zadarmenko</Text>
            </View>

            <View style={styles.textContainer1}>
                <Text variant={"headlineMedium"}>Jano Holy pianko</Text>
            </View>




           

           
        <View style={styles.placeTime}>
            <View style={styles.textIcon}>

            <MaterialCommunityIcons name='home'  size={26} />
              <View>
                <Text variant={"titleSmall"}>Kasárne/Kulturpark</Text>
                <Text variant={"labelMedium"}>Kukučínova 2, 040 01 Juh, Slovensko</Text>
              </View>
            </View>

           
            <View style={styles.textIcon}>

            <MaterialCommunityIcons name='home'  size={26} />
              <View>
                <Text variant={"titleSmall"}>Sobota 2.Marec</Text>
                <Text variant={"labelMedium"}>16:00-19:00</Text>
              </View>
            </View>

              <View style={styles.textIcon}>

            <MaterialCommunityIcons name='home'  size={26} />
              <View>
                <Text variant={"titleSmall"}>Sobota 2.Marec</Text>
                <Text variant={"labelMedium"}>16:00-19:00</Text>
              </View>
            </View>
        </View>

        <Divider style={{marginBottom:40}} bold={true}/>

            <View style={styles.textContainer3}>
              <Text variant={"headlineMedium"} style={{marginBottom:20}}>O Udalosti</Text>
                <Text variant='titleSmall'>
                Zameranie sa na výsledky tvorivej činnosti iba jedného pohlavia, vzišlo z
                priebežného výskumu pri prehodnocovaní zbierkového fondu galérie,
                formovania i aktualizácie akvizičnej stratégie, no najmä z potreby reflexie
                tém dlhodobo prehliada....
                </Text>
            </View>

            <Divider style={{marginVertical:40}} bold={true}/>


            <View style={styles.textContainer3}>
              <Text variant={"headlineMedium"} style={{marginBottom:20}}>Mapa</Text>
                <Text variant='titleSmall'>
                Zameranie sa na výsledky tvorivej činnosti iba jedného pohlavia, vzišlo z
                priebežného výskumu pri prehodnocovaní zbierkového fondu galérie,
                formovania i aktualizácie akvizičnej stratégie, no najmä z potreby reflexie
                tém dlhodobo prehliada....
                </Text>
            </View>


            <Divider style={{marginVertical:40}} bold={true}/>


            <View style={styles.organizator}>

                <Text style={{marginVertical:10}} variant='labelSmall'>Udalosť organizuje</Text>
                <Text style={{marginVertical:0}} variant='headlineMedium'>Mesto Košice</Text>

                <Text style={{marginTop:10}} variant='headlineMedium'>7.9K</Text>
                <Text variant='labelSmall'>Páči sa mi</Text>


                <Text style={{marginVertical:30}} variant='labelMedium'>Niečo o košicochého výskumu pri prehodnocovaní zbierkového fondu galérie,
                formovania i aktualizácie akvizičnej stra </Text>

                <Button style={{marginVertical:10}} >Paci sa mi </Button>

            </View>




 </View>

        </View>

      </ScrollView>
    </View>

  )
}
const styles = StyleSheet.create({
container:{
    padding:15,
},

mid:{
    flex:1,
  //  backgroundColor: 'rgba(50, 0, 0, 0.2)',
  paddingTop:10,
    padding:3
},

image:{
    alignSelf:"center",
    height:250,
    width:370,
   borderRadius:40
  
},
textContainer1: {
   margin:10
},
cena:{
  margin:10
},
placeTime:{
  padding:10
},
textIcon: {
   flexDirection:"row",
   marginBottom:25,
   
},
organizator:{
  
  alignItems:"center"
}
})