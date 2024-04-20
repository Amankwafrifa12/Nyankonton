import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, View, SafeAreaView, ScrollView} from 'react-native';

export default function App() {

    const [places, setPlaces] = useState([
      { name: 'Opon-Valley', key: '1'},
      { name: 'Dunkwa-on-Offin', key: '2'},
      { name: 'Kumasi', key: '3'},
      { name: 'Wasa Akropong', key: '4'},
      { name: 'Accra', key: '5'},
      { name: 'Winneba', key: '6'},
      { name: 'Obuasi', key: '7'},
      { name: 'Cape Coast', key: '8'},
      
    ]);

  return (
    <View style={styles.container}>
    <ScrollView>
      { places.map((item) => {
      return (
        <View key={item.key}>
          <Text style={styles.item}>{item.name}</Text>
        </View>
      )
    })}
      </ScrollView>
     </View>
    );
    
}

const styles = StyleSheet.create({
  container: { 
    
    backgroundColor: '#fff',
    padding: 24,
   
   // alignItems: 'center',
    //justifyContent: 'space-around',
    

  },
  item: {
    backgroundColor: 'midnightblue',
    padding: 30,
    marginTop: 24,
    fontSize: 30,
    textAlign: 'center',
    color: 'white',
  }
});
