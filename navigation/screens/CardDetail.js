import React from 'react';
import { Animated,View, StyleSheet,Image,FlatList ,ScrollView} from 'react-native';
import { Text,Divider } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
export default function CardDetail({ route }) {
    const { eventItem } = route.params;
  return (
    <View>
        <ScrollView >
        <View style={styles.container}>
        
            <View style={styles.top}>
                <Image source={eventItem.imageSource} style={styles.image} />
               
            </View>



            <View style={styles.mid}>

            <View style={styles.textContainer1}>
                <Text variant={"headlineMedium"}>Jano Holy pianko</Text>
            </View>

            <View style={styles.textContainer2}>
            <MaterialCommunityIcons name='home'  size={26} />
                <Text variant={"titleSmall"}>Kasárne/Kulturpark, Kukučínova 2, 040 01 Juh, Slovensko</Text>
                
            </View>
            <Divider style={{marginRight:-50,marginLeft:-50}} bold={true}/>
            <View style={styles.textContainer3}>
                <Text variant='titleMedium'>
                Zameranie sa na výsledky tvorivej činnosti iba jedného pohlavia, vzišlo z
                priebežného výskumu pri prehodnocovaní zbierkového fondu galérie,
                formovania i aktualizácie akvizičnej stratégie, no najmä z potreby reflexie
                tém dlhodobo prehliadaných, neriešených či riešených stále nie celkom
                dostatočne. Tém týkajúcich sa nepomeru zastúpenia autoriek voči autorom vo
                fondoch zbierkotvorných inštitúcií a ich následné prezentácie. Pálčivosť
                alebo aktuálnosť tohto problému neodzrkadľujú len súbežne sa konajúce
                výstavy, tematizujúce postavenie žien-autoriek a ich diel vo svete, ale
                rovnako krehké a balansujúce povedomie, nevedomie či dokonca odmietanie
                potreby rovnosti poh
                </Text>
            </View>

            </View>

        </View>

      </ScrollView>
    </View>

  )
}
const styles = StyleSheet.create({
container:{
    
},
top:{
  
},
mid:{
    flex:1,
  //  backgroundColor: 'rgba(50, 0, 0, 0.2)',
    padding:30

},

image:{
    alignSelf:"center",
    height:300,
    width:300,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  
},
textContainer1: {
   marginBottom:10
},
textContainer2: {
   flexDirection:"row",
   marginBottom:20
},
textContainer3: {
   
},
  


})