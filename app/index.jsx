import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Platform, ScrollView, SafeAreaView} from 'react-native';
import Header from '../components/header';
import Latest from '../components/latest';
import {MaterialIcons} from '@expo/vector-icons';
import BottomTab from '../components/tabs';
import Home from '../screens/Home';
import About from '../screens/About';
import Glossary from '../screens/Glossary';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';




const Tab = createBottomTabNavigator();
export default function FloatingBtn() {
  
  const [visible, setVisible] = useState(false);

    const handlePress = ()=>{
      
        setVisible(!visible);


    };

return(
  
  <View style={styles.container}>
    <Header />
    
    

    <View style={{}}>
      <ScrollView><Latest /></ScrollView>
    </View>
        <TouchableOpacity onPress={handlePress} style={styles.floatingbtn}>
          <MaterialIcons name='add' size={24} color='white' />
        </TouchableOpacity>
        {visible && (<View style={styles.btnContainer}>
         <TouchableOpacity style={styles.button} >
            <Text style={{color: 'white'}}>Quotes</Text>
         </TouchableOpacity>

         <TouchableOpacity style={styles.button} >
            <Text style={{color: 'white'}}>Glossary</Text>
         </TouchableOpacity>

         <TouchableOpacity style={styles.button} >
            <Text style={{color: 'white',}}>About</Text>
         </TouchableOpacity>

        </View>)}
      
    </View>
     
  
);
  
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingBottom: 10,
    
  },
  floatingbtn: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 20,
    right: 40,
    height: 60,
    width: 60,
    backgroundColor: 'midnightblue',
    borderRadius: 50,
    padding: 12,
},
btnContainer: {
  position: 'absolute',
  bottom: 65,
  right: 20,
  borderRadius: 50,
  padding: 12,
},
button: {
    backgroundColor: 'midnightblue',
    borderRadius: 5,
    padding: 12,
    marginBottom: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}
  
});
